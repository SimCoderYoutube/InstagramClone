"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPathFromState;

var _queryString = _interopRequireDefault(require("query-string"));

var _checkLegacyPathConfig = _interopRequireDefault(require("./checkLegacyPathConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getActiveRoute = state => {
  const route = typeof state.index === 'number' ? state.routes[state.index] : state.routes[state.routes.length - 1];

  if (route.state) {
    return getActiveRoute(route.state);
  }

  return route;
};
/**
 * Utility to serialize a navigation state object to a path string.
 *
 * Example:
 * ```js
 * getPathFromState(
 *   {
 *     routes: [
 *       {
 *         name: 'Chat',
 *         params: { author: 'Jane', id: 42 },
 *       },
 *     ],
 *   },
 *   {
 *     screens: {
 *       Chat: {
 *         path: 'chat/:author/:id',
 *         stringify: { author: author => author.toLowerCase() }
 *       }
 *     }
 *   }
 * )
 * ```
 *
 * @param state Navigation state to serialize.
 * @param options Extra options to fine-tune how to serialize the path.
 * @returns Path representing the state, e.g. /foo/bar?count=42.
 */


function getPathFromState(state, options) {
  if (state == null) {
    throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");
  }

  const [legacy, compatOptions] = (0, _checkLegacyPathConfig.default)(options); // Create a normalized configs object which will be easier to use

  const configs = compatOptions ? createNormalizedConfigs(legacy, compatOptions.screens) : {};
  let path = '/';
  let current = state;
  const allParams = {};

  while (current) {
    let index = typeof current.index === 'number' ? current.index : 0;
    let route = current.routes[index];
    let pattern;
    let focusedParams;
    let focusedRoute = getActiveRoute(state);
    let currentOptions = configs; // Keep all the route names that appeared during going deeper in config in case the pattern is resolved to undefined

    let nestedRouteNames = [];
    let hasNext = true;

    while (route.name in currentOptions && hasNext) {
      pattern = currentOptions[route.name].pattern;
      nestedRouteNames.push(route.name);

      if (route.params) {
        var _currentOptions$route;

        const stringify = (_currentOptions$route = currentOptions[route.name]) === null || _currentOptions$route === void 0 ? void 0 : _currentOptions$route.stringify;
        const currentParams = fromEntries(Object.entries(route.params).map(([key, value]) => [key, (stringify === null || stringify === void 0 ? void 0 : stringify[key]) ? stringify[key](value) : String(value)]));

        if (pattern) {
          Object.assign(allParams, currentParams);
        }

        if (focusedRoute === route) {
          var _pattern;

          // If this is the focused route, keep the params for later use
          // We save it here since it's been stringified already
          focusedParams = _objectSpread({}, currentParams);
          (_pattern = pattern) === null || _pattern === void 0 ? void 0 : _pattern.split('/').filter(p => p.startsWith(':')) // eslint-disable-next-line no-loop-func
          .forEach(p => {
            const name = getParamName(p); // Remove the params present in the pattern since we'll only use the rest for query string

            if (focusedParams) {
              // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
              delete focusedParams[name];
            }
          });
        }
      } // If there is no `screens` property or no nested state, we return pattern


      if (!currentOptions[route.name].screens || route.state === undefined) {
        hasNext = false;
      } else {
        index = typeof route.state.index === 'number' ? route.state.index : route.state.routes.length - 1;
        const nextRoute = route.state.routes[index];
        const nestedConfig = currentOptions[route.name].screens; // if there is config for next route name, we go deeper

        if (nestedConfig && nextRoute.name in nestedConfig) {
          route = nextRoute;
          currentOptions = nestedConfig;
        } else {
          // If not, there is no sense in going deeper in config
          hasNext = false;
        }
      }
    }

    if (pattern === undefined) {
      pattern = nestedRouteNames.join('/');
    }

    if (currentOptions[route.name] !== undefined) {
      path += pattern.split('/').map(p => {
        const name = getParamName(p); // We don't know what to show for wildcard patterns
        // Showing the route name seems ok, though whatever we show here will be incorrect
        // Since the page doesn't actually exist

        if (p === '*') {
          if (legacy) {
            throw new Error("Please update your config to the new format to use wildcard pattern ('*'). https://reactnavigation.org/docs/configuring-links/#updating-config");
          }

          return route.name;
        } // If the path has a pattern for a param, put the param in the path


        if (p.startsWith(':')) {
          const value = allParams[name];

          if (value === undefined && p.endsWith('?')) {
            // Optional params without value assigned in route.params should be ignored
            return '';
          }

          return encodeURIComponent(value);
        }

        return encodeURIComponent(p);
      }).join('/');
    } else {
      path += encodeURIComponent(route.name);
    }

    if (!focusedParams) {
      focusedParams = focusedRoute.params;
    }

    if (route.state) {
      path += '/';
    } else if (focusedParams) {
      for (let param in focusedParams) {
        if (focusedParams[param] === 'undefined') {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete focusedParams[param];
        }
      }

      const query = _queryString.default.stringify(focusedParams);

      if (query) {
        path += "?".concat(query);
      }
    }

    current = route.state;
  } // Remove multiple as well as trailing slashes


  path = path.replace(/\/+/g, '/');
  path = path.length > 1 ? path.replace(/\/$/, '') : path;
  return path;
} // Object.fromEntries is not available in older iOS versions


const fromEntries = entries => entries.reduce((acc, [k, v]) => {
  acc[k] = v;
  return acc;
}, {});

const getParamName = pattern => pattern.replace(/^:/, '').replace(/\?$/, '');

const joinPaths = (...paths) => [].concat(...paths.map(p => p.split('/'))).filter(Boolean).join('/');

const createConfigItem = (legacy, config, parentPattern) => {
  var _pattern2;

  if (typeof config === 'string') {
    // If a string is specified as the value of the key(e.g. Foo: '/path'), use it as the pattern
    const pattern = parentPattern ? joinPaths(parentPattern, config) : config;
    return {
      pattern
    };
  } // If an object is specified as the value (e.g. Foo: { ... }),
  // It can have `path` property and `screens` prop which has nested configs


  let pattern;

  if (legacy) {
    pattern = config.exact !== true && parentPattern && config.path ? joinPaths(parentPattern, config.path) : config.path;
  } else {
    if (config.exact && config.path === undefined) {
      throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
    }

    pattern = config.exact !== true ? joinPaths(parentPattern || '', config.path || '') : config.path || '';
  }

  const screens = config.screens ? createNormalizedConfigs(legacy, config.screens, pattern) : undefined;
  return {
    // Normalize pattern to remove any leading, trailing slashes, duplicate slashes etc.
    pattern: (_pattern2 = pattern) === null || _pattern2 === void 0 ? void 0 : _pattern2.split('/').filter(Boolean).join('/'),
    stringify: config.stringify,
    screens
  };
};

const createNormalizedConfigs = (legacy, options, pattern) => fromEntries(Object.entries(options).map(([name, c]) => {
  const result = createConfigItem(legacy, c, pattern);
  return [name, result];
}));
//# sourceMappingURL=getPathFromState.js.map