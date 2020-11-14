function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { nanoid } from 'nanoid/non-secure';
import BaseRouter from './BaseRouter';
export const StackActions = {
  replace(name, params) {
    return {
      type: 'REPLACE',
      payload: {
        name,
        params
      }
    };
  },

  push(name, params) {
    return {
      type: 'PUSH',
      payload: {
        name,
        params
      }
    };
  },

  pop(count = 1) {
    return {
      type: 'POP',
      payload: {
        count
      }
    };
  },

  popToTop() {
    return {
      type: 'POP_TO_TOP'
    };
  }

};
export default function StackRouter(options) {
  const router = _objectSpread(_objectSpread({}, BaseRouter), {}, {
    type: 'stack',

    getInitialState({
      routeNames,
      routeParamList
    }) {
      const initialRouteName = options.initialRouteName !== undefined && routeNames.includes(options.initialRouteName) ? options.initialRouteName : routeNames[0];
      return {
        stale: false,
        type: 'stack',
        key: "stack-".concat(nanoid()),
        index: 0,
        routeNames,
        routes: [{
          key: "".concat(initialRouteName, "-").concat(nanoid()),
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        }]
      };
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList
    }) {
      let state = partialState;

      if (state.stale === false) {
        return state;
      }

      const routes = state.routes.filter(route => routeNames.includes(route.name)).map(route => _objectSpread(_objectSpread({}, route), {}, {
        key: route.key || "".concat(route.name, "-").concat(nanoid()),
        params: routeParamList[route.name] !== undefined ? _objectSpread(_objectSpread({}, routeParamList[route.name]), route.params) : route.params
      }));

      if (routes.length === 0) {
        const initialRouteName = options.initialRouteName !== undefined ? options.initialRouteName : routeNames[0];
        routes.push({
          key: "".concat(initialRouteName, "-").concat(nanoid()),
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        });
      }

      return {
        stale: false,
        type: 'stack',
        key: "stack-".concat(nanoid()),
        index: routes.length - 1,
        routeNames,
        routes
      };
    },

    getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList
    }) {
      const routes = state.routes.filter(route => routeNames.includes(route.name));

      if (routes.length === 0) {
        const initialRouteName = options.initialRouteName !== undefined && routeNames.includes(options.initialRouteName) ? options.initialRouteName : routeNames[0];
        routes.push({
          key: "".concat(initialRouteName, "-").concat(nanoid()),
          name: initialRouteName,
          params: routeParamList[initialRouteName]
        });
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        routeNames,
        routes,
        index: Math.min(state.index, routes.length - 1)
      });
    },

    getStateForRouteFocus(state, key) {
      const index = state.routes.findIndex(r => r.key === key);

      if (index === -1 || index === state.index) {
        return state;
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        index,
        routes: state.routes.slice(0, index + 1)
      });
    },

    getStateForAction(state, action, options) {
      const {
        routeParamList
      } = options;

      switch (action.type) {
        case 'REPLACE':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

            if (index === -1) {
              return null;
            }

            const {
              name,
              key,
              params
            } = action.payload;

            if (!state.routeNames.includes(name)) {
              return null;
            }

            return _objectSpread(_objectSpread({}, state), {}, {
              routes: state.routes.map((route, i) => i === index ? {
                key: key !== undefined ? key : "".concat(name, "-").concat(nanoid()),
                name,
                params: routeParamList[name] !== undefined ? _objectSpread(_objectSpread({}, routeParamList[name]), params) : params
              } : route)
            });
          }

        case 'PUSH':
          if (state.routeNames.includes(action.payload.name)) {
            return _objectSpread(_objectSpread({}, state), {}, {
              index: state.index + 1,
              routes: [...state.routes, {
                key: action.payload.key === undefined ? "".concat(action.payload.name, "-").concat(nanoid()) : action.payload.key,
                name: action.payload.name,
                params: routeParamList[action.payload.name] !== undefined ? _objectSpread(_objectSpread({}, routeParamList[action.payload.name]), action.payload.params) : action.payload.params
              }]
            });
          }

          return null;

        case 'POP':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

            if (index > 0) {
              const count = Math.max(index - action.payload.count + 1, 1);
              const routes = state.routes.slice(0, count).concat(state.routes.slice(index + 1));
              return _objectSpread(_objectSpread({}, state), {}, {
                index: routes.length - 1,
                routes
              });
            }

            return null;
          }

        case 'POP_TO_TOP':
          return router.getStateForAction(state, {
            type: 'POP',
            payload: {
              count: state.routes.length - 1
            }
          }, options);

        case 'NAVIGATE':
          if (action.payload.key || action.payload.name && state.routeNames.includes(action.payload.name)) {
            // If the route already exists, navigate to that
            let index = -1;

            if (state.routes[state.index].name === action.payload.name && action.payload.key === undefined || state.routes[state.index].key === action.payload.key) {
              index = state.index;
            } else {
              for (let i = state.routes.length - 1; i >= 0; i--) {
                if (state.routes[i].name === action.payload.name && action.payload.key === undefined || state.routes[i].key === action.payload.key) {
                  index = i;
                  break;
                }
              }
            }

            if (index === -1 && action.payload.key && action.payload.name === undefined) {
              return null;
            }

            if (index === -1 && action.payload.name !== undefined) {
              return router.getStateForAction(state, {
                type: 'PUSH',
                payload: {
                  key: action.payload.key,
                  name: action.payload.name,
                  params: action.payload.params
                }
              }, options);
            }

            return _objectSpread(_objectSpread({}, state), {}, {
              index,
              routes: [...state.routes.slice(0, index), action.payload.params !== undefined ? _objectSpread(_objectSpread({}, state.routes[index]), {}, {
                params: _objectSpread(_objectSpread({}, state.routes[index].params), action.payload.params)
              }) : state.routes[index]]
            });
          }

          return null;

        case 'GO_BACK':
          if (state.index > 0) {
            return router.getStateForAction(state, {
              type: 'POP',
              payload: {
                count: 1
              },
              target: action.target,
              source: action.source
            }, options);
          }

          return null;

        default:
          return BaseRouter.getStateForAction(state, action);
      }
    },

    actionCreators: StackActions
  });

  return router;
}
//# sourceMappingURL=StackRouter.js.map