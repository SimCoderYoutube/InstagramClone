"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOnPreventRemove;
exports.shouldPreventRemove = void 0;

var React = _interopRequireWildcard(require("react"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const VISITED_ROUTE_KEYS = Symbol('VISITED_ROUTE_KEYS');

const shouldPreventRemove = (emitter, beforeRemoveListeners, routes, action) => {
  var _action$VISITED_ROUTE;

  // Call these in reverse order so last screens handle the event first
  const reversedRoutes = [...routes].reverse();
  const visitedRouteKeys = // @ts-expect-error: add this property to mark that we've already emitted this action
  (_action$VISITED_ROUTE = action[VISITED_ROUTE_KEYS]) !== null && _action$VISITED_ROUTE !== void 0 ? _action$VISITED_ROUTE : new Set();

  const beforeRemoveAction = _objectSpread(_objectSpread({}, action), {}, {
    [VISITED_ROUTE_KEYS]: visitedRouteKeys
  });

  for (const route of reversedRoutes) {
    var _beforeRemoveListener;

    if (visitedRouteKeys.has(route.key)) {
      // Skip if we've already emitted this action for this screen
      continue;
    } // First, we need to check if any child screens want to prevent it


    const isPrevented = (_beforeRemoveListener = beforeRemoveListeners[route.key]) === null || _beforeRemoveListener === void 0 ? void 0 : _beforeRemoveListener.call(beforeRemoveListeners, beforeRemoveAction);

    if (isPrevented) {
      return true;
    }

    visitedRouteKeys.add(route.key);
    const event = emitter.emit({
      type: 'beforeRemove',
      target: route.key,
      data: {
        action: beforeRemoveAction
      },
      canPreventDefault: true
    });

    if (event.defaultPrevented) {
      return true;
    }
  }

  return false;
};

exports.shouldPreventRemove = shouldPreventRemove;

function useOnPreventRemove({
  getState,
  emitter,
  beforeRemoveListeners
}) {
  const {
    addKeyedListener
  } = React.useContext(_NavigationBuilderContext.default);
  const route = React.useContext(_NavigationRouteContext.default);
  const routeKey = route === null || route === void 0 ? void 0 : route.key;
  React.useEffect(() => {
    if (routeKey) {
      return addKeyedListener === null || addKeyedListener === void 0 ? void 0 : addKeyedListener('beforeRemove', routeKey, action => {
        const state = getState();
        return shouldPreventRemove(emitter, beforeRemoveListeners, state.routes, action);
      });
    }
  }, [addKeyedListener, beforeRemoveListeners, emitter, getState, routeKey]);
}
//# sourceMappingURL=useOnPreventRemove.js.map