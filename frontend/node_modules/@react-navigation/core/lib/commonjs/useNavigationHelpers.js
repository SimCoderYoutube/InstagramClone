"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigationHelpers;

var React = _interopRequireWildcard(require("react"));

var _routers = require("@react-navigation/routers");

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

var _UnhandledActionContext = _interopRequireDefault(require("./UnhandledActionContext"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions
_types.PrivateValueStore;

/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
function useNavigationHelpers({
  onAction,
  getState,
  emitter,
  router
}) {
  const onUnhandledAction = React.useContext(_UnhandledActionContext.default);
  const parentNavigationHelpers = React.useContext(_NavigationContext.default);
  return React.useMemo(() => {
    const dispatch = op => {
      const action = typeof op === 'function' ? op(getState()) : op;
      const handled = onAction(action);

      if (!handled) {
        onUnhandledAction === null || onUnhandledAction === void 0 ? void 0 : onUnhandledAction(action);
      }
    };

    const actions = _objectSpread(_objectSpread({}, router.actionCreators), _routers.CommonActions);

    const helpers = Object.keys(actions).reduce((acc, name) => {
      // @ts-expect-error: name is a valid key, but TypeScript is dumb
      acc[name] = (...args) => dispatch(actions[name](...args));

      return acc;
    }, {});
    return _objectSpread(_objectSpread(_objectSpread({}, parentNavigationHelpers), helpers), {}, {
      dispatch,
      emit: emitter.emit,
      isFocused: parentNavigationHelpers ? parentNavigationHelpers.isFocused : () => true,
      canGoBack: () => {
        const state = getState();
        return router.getStateForAction(state, _routers.CommonActions.goBack(), {
          routeNames: state.routeNames,
          routeParamList: {}
        }) !== null || (parentNavigationHelpers === null || parentNavigationHelpers === void 0 ? void 0 : parentNavigationHelpers.canGoBack()) || false;
      },
      dangerouslyGetParent: () => parentNavigationHelpers,
      dangerouslyGetState: getState
    });
  }, [emitter.emit, getState, onAction, onUnhandledAction, parentNavigationHelpers, router]);
}
//# sourceMappingURL=useNavigationHelpers.js.map