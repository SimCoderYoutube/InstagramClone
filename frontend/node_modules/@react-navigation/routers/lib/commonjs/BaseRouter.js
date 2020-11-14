"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nonSecure = require("nanoid/non-secure");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Base router object that can be used when writing custom routers.
 * This provides few helper methods to handle common actions such as `RESET`.
 */
const BaseRouter = {
  getStateForAction(state, action) {
    switch (action.type) {
      case 'SET_PARAMS':
        {
          const index = action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;

          if (index === -1) {
            return null;
          }

          return _objectSpread(_objectSpread({}, state), {}, {
            routes: state.routes.map((r, i) => i === index ? _objectSpread(_objectSpread({}, r), {}, {
              params: _objectSpread(_objectSpread({}, r.params), action.payload.params)
            }) : r)
          });
        }

      case 'RESET':
        {
          const nextState = action.payload;

          if (nextState.routes.length === 0 || nextState.routes.some(route => !state.routeNames.includes(route.name))) {
            return null;
          }

          if (nextState.stale === false) {
            if (state.routeNames.length !== nextState.routeNames.length || nextState.routeNames.some(name => !state.routeNames.includes(name))) {
              return null;
            }

            return _objectSpread(_objectSpread({}, nextState), {}, {
              routes: nextState.routes.map(route => route.key ? route : _objectSpread(_objectSpread({}, route), {}, {
                key: "".concat(route.name, "-").concat((0, _nonSecure.nanoid)())
              }))
            });
          }

          return nextState;
        }

      default:
        return null;
    }
  },

  shouldActionChangeFocus(action) {
    return action.type === 'NAVIGATE';
  }

};
var _default = BaseRouter;
exports.default = _default;
//# sourceMappingURL=BaseRouter.js.map