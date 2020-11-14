"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStateFromPath;

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

var _queryString = _interopRequireDefault(require("query-string"));

var _checkLegacyPathConfig = _interopRequireDefault(require("./checkLegacyPathConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Utility to parse a path string to initial state object accepted by the container.
 * This is useful for deep linking when we need to handle the incoming URL.
 *
 * Example:
 * ```js
 * getStateFromPath(
 *   '/chat/jane/42',
 *   {
 *     screens: {
 *       Chat: {
 *         path: 'chat/:author/:id',
 *         parse: { id: Number }
 *       }
 *     }
 *   }
 * )
 * ```
 * @param path Path string to parse and convert, e.g. /foo/bar?count=42.
 * @param options Extra options to fine-tune how to parse the path.
 */
function getStateFromPath(path, options) {
  const [legacy, compatOptions] = (0, _checkLegacyPathConfig.default)(options);
  let initialRoutes = [];

  if (compatOptions === null || compatOptions === void 0 ? void 0 : compatOptions.initialRouteName) {
    initialRoutes.push({
      initialRouteName: compatOptions.initialRouteName,
      connectedRoutes: Object.keys(compatOptions.screens)
    });
  }

  const screens = compatOptions === null || compatOptions === void 0 ? void 0 : compatOptions.screens;
  let remaining = path.replace(/\/+/g, '/') // Replace multiple slash (//) with single ones
  .replace(/^\//, '') // Remove extra leading slash
  .replace(/\?.*$/, ''); // Remove query params which we will handle later
  // Make sure there is a trailing slash

  remaining = remaining.endsWith('/') ? remaining : "".concat(remaining, "/");

  if (screens === undefined) {
    // When no config is specified, use the path segments as route names
    const routes = remaining.split('/').filter(Boolean).map((segment, i, self) => {
      const name = decodeURIComponent(segment);

      if (i === self.length - 1) {
        return {
          name,
          params: parseQueryParams(path)
        };
      }

      return {
        name
      };
    });

    if (routes.length) {
      return createNestedStateObject(routes, initialRoutes);
    }

    return undefined;
  } // Create a normalized configs array which will be easier to use


  const configs = [].concat(...Object.keys(screens).map(key => createNormalizedConfigs(legacy, key, screens, [], initialRoutes))).sort((a, b) => {
    // Sort config so that:
    // - the most exhaustive ones are always at the beginning
    // - patterns with wildcard are always at the end
    // If one of the patterns starts with the other, it's more exhaustive
    // So move it up
    if (a.pattern.startsWith(b.pattern)) {
      return 1;
    }

    if (b.pattern.startsWith(a.pattern)) {
      return 1;
    }

    const aParts = a.pattern.split('/');
    const bParts = b.pattern.split('/');
    const aWildcardIndex = aParts.indexOf('*');
    const bWildcardIndex = bParts.indexOf('*'); // If only one of the patterns has a wildcard, move it down in the list

    if (aWildcardIndex === -1 && bWildcardIndex !== -1) {
      return -1;
    }

    if (aWildcardIndex !== -1 && bWildcardIndex === -1) {
      return 1;
    }

    if (aWildcardIndex === bWildcardIndex) {
      // If `b` has more `/`, it's more exhaustive
      // So we move it up in the list
      return bParts.length - aParts.length;
    } // If the wildcard appears later in the pattern (has higher index), it's more specific
    // So we move it up in the list


    return bWildcardIndex - aWildcardIndex;
  });

  if (remaining === '/') {
    // We need to add special handling of empty path so navigation to empty path also works
    // When handling empty path, we should only look at the root level config
    const match = configs.find(config => config.path === '' && config.routeNames.every( // Make sure that none of the parent configs have a non-empty path defined
    name => {
      var _configs$find;

      return !((_configs$find = configs.find(c => c.screen === name)) === null || _configs$find === void 0 ? void 0 : _configs$find.path);
    }));

    if (match) {
      return createNestedStateObject(match.routeNames.map((name, i, self) => {
        if (i === self.length - 1) {
          return {
            name,
            params: parseQueryParams(path, match.parse)
          };
        }

        return {
          name
        };
      }), initialRoutes);
    }

    return undefined;
  }

  let result;
  let current;

  if (legacy === false) {
    // If we're not in legacy mode,, we match the whole path against the regex instead of segments
    // This makes sure matches such as wildcard will catch any unmatched routes, even if nested
    const {
      routeNames,
      allParams,
      remainingPath
    } = matchAgainstConfigs(remaining, configs.map(c => _objectSpread(_objectSpread({}, c), {}, {
      // Add `$` to the regex to make sure it matches till end of the path and not just beginning
      regex: c.regex ? new RegExp(c.regex.source + '$') : undefined
    })));

    if (routeNames !== undefined) {
      // This will always be empty if full path matched
      remaining = remainingPath;
      current = createNestedStateObject(createRouteObjects(configs, routeNames, allParams), initialRoutes);
      result = current;
    }
  } else {
    // In legacy mode, we divide the path into segments and match piece by piece
    // This preserves the legacy behaviour, but we should remove it in next major
    while (remaining) {
      let {
        routeNames,
        allParams,
        remainingPath
      } = matchAgainstConfigs(remaining, configs);
      remaining = remainingPath; // If we hadn't matched any segments earlier, use the path as route name

      if (routeNames === undefined) {
        const segments = remaining.split('/');
        routeNames = [decodeURIComponent(segments[0])];
        segments.shift();
        remaining = segments.join('/');
      }

      const state = createNestedStateObject(createRouteObjects(configs, routeNames, allParams), initialRoutes);

      if (current) {
        var _current2;

        // The state should be nested inside the deepest route we parsed before
        while ((_current = current) === null || _current === void 0 ? void 0 : _current.routes[current.index || 0].state) {
          var _current;

          current = current.routes[current.index || 0].state;
        }

        current.routes[((_current2 = current) === null || _current2 === void 0 ? void 0 : _current2.index) || 0].state = state;
      } else {
        result = state;
      }

      current = state;
    }
  }

  if (current == null || result == null) {
    return undefined;
  }

  const route = findFocusedRoute(current);
  const params = parseQueryParams(path, findParseConfigForRoute(route.name, configs));

  if (params) {
    // @ts-expect-error: params should be treated as read-only, but we're creating the state here so it doesn't matter
    route.params = _objectSpread(_objectSpread({}, route.params), params);
  }

  return result;
}

const joinPaths = (...paths) => [].concat(...paths.map(p => p.split('/'))).filter(Boolean).join('/');

const matchAgainstConfigs = (remaining, configs) => {
  let routeNames;
  let allParams;
  let remainingPath = remaining; // Go through all configs, and see if the next path segment matches our regex

  for (const config of configs) {
    if (!config.regex) {
      continue;
    }

    const match = remainingPath.match(config.regex); // If our regex matches, we need to extract params from the path

    if (match) {
      routeNames = [...config.routeNames];
      const paramPatterns = config.pattern.split('/').filter(p => p.startsWith(':'));

      if (paramPatterns.length) {
        allParams = paramPatterns.reduce((acc, p, i) => {
          const value = match[(i + 1) * 2].replace(/\//, ''); // The param segments appear every second item starting from 2 in the regex match result

          acc[p] = value;
          return acc;
        }, {});
      }

      remainingPath = remainingPath.replace(match[1], '');
      break;
    }
  }

  return {
    routeNames,
    allParams,
    remainingPath
  };
};

const createNormalizedConfigs = (legacy, screen, routeConfig, routeNames = [], initials, parentPattern) => {
  const configs = [];
  routeNames.push(screen);
  const config = routeConfig[screen];

  if (typeof config === 'string') {
    // If a string is specified as the value of the key(e.g. Foo: '/path'), use it as the pattern
    const pattern = parentPattern ? joinPaths(parentPattern, config) : config;
    configs.push(createConfigItem(legacy, screen, routeNames, pattern, config));
  } else if (typeof config === 'object') {
    let pattern; // if an object is specified as the value (e.g. Foo: { ... }),
    // it can have `path` property and
    // it could have `screens` prop which has nested configs

    if (typeof config.path === 'string') {
      if (legacy) {
        pattern = config.exact !== true && parentPattern ? joinPaths(parentPattern, config.path) : config.path;
      } else {
        if (config.exact && config.path === undefined) {
          throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
        }

        pattern = config.exact !== true ? joinPaths(parentPattern || '', config.path || '') : config.path || '';
      }

      configs.push(createConfigItem(legacy, screen, routeNames, pattern, config.path, config.parse));
    }

    if (config.screens) {
      // property `initialRouteName` without `screens` has no purpose
      if (config.initialRouteName) {
        initials.push({
          initialRouteName: config.initialRouteName,
          connectedRoutes: Object.keys(config.screens)
        });
      }

      Object.keys(config.screens).forEach(nestedConfig => {
        var _pattern;

        const result = createNormalizedConfigs(legacy, nestedConfig, config.screens, routeNames, initials, (_pattern = pattern) !== null && _pattern !== void 0 ? _pattern : parentPattern);
        configs.push(...result);
      });
    }
  }

  routeNames.pop();
  return configs;
};

const createConfigItem = (legacy, screen, routeNames, pattern, path, parse) => {
  // Normalize pattern to remove any leading, trailing slashes, duplicate slashes etc.
  pattern = pattern.split('/').filter(Boolean).join('/');
  const regex = pattern ? new RegExp("^(".concat(pattern.split('/').map(it => {
    if (legacy && it === '*') {
      throw new Error("Please update your config to the new format to use wildcard pattern ('*'). https://reactnavigation.org/docs/configuring-links/#updating-config");
    }

    if (it.startsWith(':')) {
      return "(([^/]+\\/)".concat(it.endsWith('?') ? '?' : '', ")");
    }

    return "".concat(it === '*' ? '.*' : (0, _escapeStringRegexp.default)(it), "\\/");
  }).join(''), ")")) : undefined;
  return {
    screen,
    regex,
    pattern,
    path,
    // The routeNames array is mutated, so copy it to keep the current state
    routeNames: [...routeNames],
    parse
  };
};

const findParseConfigForRoute = (routeName, flatConfig) => {
  for (const config of flatConfig) {
    if (routeName === config.routeNames[config.routeNames.length - 1]) {
      return config.parse;
    }
  }

  return undefined;
}; // Try to find an initial route connected with the one passed


const findInitialRoute = (routeName, initialRoutes) => {
  for (const config of initialRoutes) {
    if (config.connectedRoutes.includes(routeName)) {
      return config.initialRouteName === routeName ? undefined : config.initialRouteName;
    }
  }

  return undefined;
}; // returns state object with values depending on whether
// it is the end of state and if there is initialRoute for this level


const createStateObject = (initialRoute, routeName, params, isEmpty) => {
  if (isEmpty) {
    if (initialRoute) {
      return {
        index: 1,
        routes: [{
          name: initialRoute
        }, {
          name: routeName,
          params
        }]
      };
    } else {
      return {
        routes: [{
          name: routeName,
          params
        }]
      };
    }
  } else {
    if (initialRoute) {
      return {
        index: 1,
        routes: [{
          name: initialRoute
        }, {
          name: routeName,
          params,
          state: {
            routes: []
          }
        }]
      };
    } else {
      return {
        routes: [{
          name: routeName,
          params,
          state: {
            routes: []
          }
        }]
      };
    }
  }
};

const createNestedStateObject = (routes, initialRoutes) => {
  let state;
  let route = routes.shift();
  let initialRoute = findInitialRoute(route.name, initialRoutes);
  state = createStateObject(initialRoute, route.name, route.params, routes.length === 0);

  if (routes.length > 0) {
    let nestedState = state;

    while (route = routes.shift()) {
      initialRoute = findInitialRoute(route.name, initialRoutes);
      const nestedStateIndex = nestedState.index || nestedState.routes.length - 1;
      nestedState.routes[nestedStateIndex].state = createStateObject(initialRoute, route.name, route.params, routes.length === 0);

      if (routes.length > 0) {
        nestedState = nestedState.routes[nestedStateIndex].state;
      }
    }
  }

  return state;
};

const createRouteObjects = (configs, routeNames, allParams) => routeNames.map(name => {
  const config = configs.find(c => c.screen === name);
  let params;

  if (allParams && (config === null || config === void 0 ? void 0 : config.path)) {
    const pattern = config.path;

    if (pattern) {
      const paramPatterns = pattern.split('/').filter(p => p.startsWith(':'));

      if (paramPatterns.length) {
        params = paramPatterns.reduce((acc, p) => {
          const key = p.replace(/^:/, '').replace(/\?$/, '');
          const value = allParams[p];

          if (value) {
            acc[key] = config.parse && config.parse[key] ? config.parse[key](value) : value;
          }

          return acc;
        }, {});
      }
    }
  }

  if (params && Object.keys(params).length) {
    return {
      name,
      params
    };
  }

  return {
    name
  };
});

const findFocusedRoute = state => {
  var _current4;

  let current = state;

  while ((_current3 = current) === null || _current3 === void 0 ? void 0 : _current3.routes[current.index || 0].state) {
    var _current3;

    // The query params apply to the deepest route
    current = current.routes[current.index || 0].state;
  }

  const route = current.routes[((_current4 = current) === null || _current4 === void 0 ? void 0 : _current4.index) || 0];
  return route;
};

const parseQueryParams = (path, parseConfig) => {
  const query = path.split('?')[1];

  const params = _queryString.default.parse(query);

  if (parseConfig) {
    Object.keys(params).forEach(name => {
      if (parseConfig[name] && typeof params[name] === 'string') {
        params[name] = parseConfig[name](params[name]);
      }
    });
  }

  return Object.keys(params).length ? params : undefined;
};
//# sourceMappingURL=getStateFromPath.js.map