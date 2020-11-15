"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsFocused;

var React = _interopRequireWildcard(require("react"));

var _useSubscription = require("use-subscription");

var _useNavigation = _interopRequireDefault(require("./useNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to get the current focus state of the screen. Returns a `true` if screen is focused, otherwise `false`.
 * This can be used if a component needs to render something based on the focus state.
 * It uses `use-subscription` under the hood for safer use in concurrent mode.
 */
function useIsFocused() {
  const navigation = (0, _useNavigation.default)(); // eslint-disable-next-line react-hooks/exhaustive-deps

  const getCurrentValue = React.useCallback(navigation.isFocused, [navigation]);
  const subscribe = React.useCallback(callback => {
    const unsubscribeFocus = navigation.addListener('focus', callback);
    const unsubscribeBlur = navigation.addListener('blur', callback);
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);
  return (0, _useSubscription.useSubscription)({
    getCurrentValue,
    subscribe
  });
}
//# sourceMappingURL=useIsFocused.js.map