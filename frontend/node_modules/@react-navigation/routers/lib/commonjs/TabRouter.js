"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabRouter;
exports.TabActions = void 0;

var _nonSecure = require("nanoid/non-secure");

var _BaseRouter = _interopRequireDefault(require("./BaseRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TYPE_ROUTE = 'route';
const TabActions = {
  jumpTo(name, params) {
    return {
      type: 'JUMP_TO',
      payload: {
        name,
        params
      }
    };
  }

};
exports.TabActions = TabActions;

const getRouteHistory = (routes, index, backBehavior, initialRouteName) => {
  const history = [{
    type: TYPE_ROUTE,
    key: routes[index].key
  }];
  let initialRouteIndex;

  switch (backBehavior) {
    case 'order':
      for (let i = index; i > 0; i--) {
        history.unshift({
          type: TYPE_ROUTE,
          key: routes[i - 1].key
        });
      }

      break;

    case 'initialRoute':
      initialRouteIndex = routes.findIndex(route => route.name === initialRouteName);
      initialRouteIndex = initialRouteIndex === -1 ? 0 : initialRouteIndex;

      if (initialRouteIndex !== index) {
        history.unshift({
          type: TYPE_ROUTE,
          key: routes[initialRouteIndex].key
        });
      }

      break;

    case 'history':
      // The history will fill up on navigation
      break;
  }

  return history;
};

const changeIndex = (state, index, backBehavior, initialRouteName) => {
  let history;

  if (backBehavior === 'history') {
    const currentKey = state.routes[index].key;
    history = state.history.filter(it => it.type === 'route' ? it.key !== currentKey : false).concat({
      type: TYPE_ROUTE,
      key: currentKey
    });
  } else {
    history = getRouteHistory(state.routes, index, backBehavior, initialRouteName);
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    index,
    history
  });
};

function TabRouter({
  initialRouteName,
  backBehavior = 'history'
}) {
  const router = _objectSpread(_objectSpread({}, _BaseRouter.default), {}, {
    type: 'tab',

    getInitialState({
      routeNames,
      routeParamList
    }) {
      const index = initialRouteName !== undefined && routeNames.includes(initialRouteName) ? routeNames.indexOf(initialRouteName) : 0;
      const routes = routeNames.map(name => ({
        name,
        key: "".concat(name, "-").concat((0, _nonSecure.nanoid)()),
        params: routeParamList[name]
      }));
      const history = getRouteHistory(routes, index, backBehavior, initialRouteName);
      return {
        stale: false,
        type: 'tab',
        key: "tab-".concat((0, _nonSecure.nanoid)()),
        index,
        routeNames,
        history,
        routes
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList
    }) {
      var _state$routes, _state$index, _state$history$filter, _state$history;

      let state = partialState;

      if (state.stale === false) {
        return state;
      }

      const routes = routeNames.map(name => {
        const route = state.routes.find(r => r.name === name);
        return _objectSpread(_objectSpread({}, route), {}, {
          name,
          key: route && route.name === name && route.key ? route.key : "".concat(name, "-").concat((0, _nonSecure.nanoid)()),
          params: routeParamList[name] !== undefined ? _objectSpread(_objectSpread({}, routeParamList[name]), route ? route.params : undefined) : route ? route.params : undefined
        });
      });
      const index = Math.min(Math.max(routeNames.indexOf((_state$routes = state.routes[(_state$index = state === null || state === void 0 ? void 0 : state.index) !== null && _state$index !== void 0 ? _state$index : 0]) === null || _state$routes === void 0 ? void 0 : _state$routes.name), 0), routes.length - 1);
      const history = (_state$history$filter = (_state$history = state.history) === null || _state$history === void 0 ? void 0 : _state$history.filter(it => routes.find(r => r.key === it.key))) !== null && _state$history$filter !== void 0 ? _state$history$filter : [];
      return changeIndex({
        stale: false,
        type: 'tab',
        key: "tab-".concat((0, _nonSecure.nanoid)()),
        index,
        routeNames,
        history,
        routes
      }, index, backBehavior, initialRouteName);
    },

    getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList
    }) {
      const routes = routeNames.map(name => state.routes.find(r => r.name === name) || {
        name,
        key: "".concat(name, "-").concat((0, _nonSecure.nanoid)()),
        params: routeParamList[name]
      });
      const index = Math.max(0, routeNames.indexOf(state.routes[state.index].name));
      let history = state.history.filter( // Type will always be 'route' for tabs, but could be different in a router extending this (e.g. drawer)
      it => it.type !== 'route' || routes.find(r => r.key === it.key));

      if (!history.length) {
        history = getRouteHistory(routes, index, backBehavior, initialRouteName);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        history,
        routeNames,
        routes,
        index
      });
    },

    getStateForRouteFocus(state, key) {
      const index = state.routes.findIndex(r => r.key === key);

      if (index === -1 || index === state.index) {
        return state;
      }

      return changeIndex(state, index, backBehavior, initialRouteName);
    },

    getStateForAction(state, action) {
      switch (action.type) {
        case 'JUMP_TO':
        case 'NAVIGATE':
          {
            let index = -1;

            if (action.type === 'NAVIGATE' && action.payload.key) {
              index = state.routes.findIndex(route => route.key === action.payload.key);
            } else {
              index = state.routes.findIndex(route => route.name === action.payload.name);
            }

            if (index === -1) {
              return null;
            }

            return changeIndex(_objectSpread(_objectSpread({}, state), {}, {
              routes: action.payload.params !== undefined ? state.routes.map((route, i) => i === index ? _objectSpread(_objectSpread({}, route), {}, {
                params: _objectSpread(_objectSpread({}, route.params), action.payload.params)
              }) : route) : state.routes
            }), index, backBehavior, initialRouteName);
          }

        case 'GO_BACK':
          {
            if (state.history.length === 1) {
              return null;
            }

            const previousKey = state.history[state.history.length - 2].key;
            const index = state.routes.findIndex(route => route.key === previousKey);

            if (index === -1) {
              return null;
            }

            return _objectSpread(_objectSpread({}, state), {}, {
              history: state.history.slice(0, -1),
              index
            });
          }

        default:
          return _BaseRouter.default.getStateForAction(state, action);
      }
    },

    shouldActionChangeFocus(action) {
      return action.type === 'NAVIGATE';
    },

    actionCreators: TabActions
  });

  return router;
}
//# sourceMappingURL=TabRouter.js.map