"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOnRouteFocus;

var React = _interopRequireWildcard(require("react"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to handle focus actions for a route.
 * Focus action needs to be treated specially, coz when a nested route is focused,
 * the parent navigators also needs to be focused.
 */
function useOnRouteFocus({
  router,
  getState,
  key: sourceRouteKey,
  setState
}) {
  const {
    onRouteFocus: onRouteFocusParent
  } = React.useContext(_NavigationBuilderContext.default);
  return React.useCallback(key => {
    const state = getState();
    const result = router.getStateForRouteFocus(state, key);

    if (result !== state) {
      setState(result);
    }

    if (onRouteFocusParent !== undefined && sourceRouteKey !== undefined) {
      onRouteFocusParent(sourceRouteKey);
    }
  }, [getState, onRouteFocusParent, router, setState, sourceRouteKey]);
}
//# sourceMappingURL=useOnRouteFocus.js.map