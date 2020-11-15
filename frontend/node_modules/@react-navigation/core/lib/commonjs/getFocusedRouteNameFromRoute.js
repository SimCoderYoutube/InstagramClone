"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFocusedRouteNameFromRoute;

function getFocusedRouteNameFromRoute(route) {
  var _state$index;

  const state = route.state;
  const params = route.params;
  const routeName = state ? // Get the currently active route name in the nested navigator
  state.routes[// If we have a partial state without index, for tab/drawer, first screen will be focused one, and last for stack
  // The type property will only exist for rehydrated state and not for state from deep link
  (_state$index = state.index) !== null && _state$index !== void 0 ? _state$index : typeof state.type === 'string' && state.type !== 'stack' ? 0 : state.routes.length - 1].name : // If state doesn't exist, we need to default to `screen` param if available
  typeof (params === null || params === void 0 ? void 0 : params.screen) === 'string' ? params.screen : undefined;
  return routeName;
}
//# sourceMappingURL=getFocusedRouteNameFromRoute.js.map