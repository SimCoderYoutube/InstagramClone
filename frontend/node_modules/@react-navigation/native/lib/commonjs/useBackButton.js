"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBackButton;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useBackButton(ref) {
  React.useEffect(() => {
    const subscription = _reactNative.BackHandler.addEventListener('hardwareBackPress', () => {
      const navigation = ref.current;

      if (navigation == null) {
        return false;
      }

      if (navigation.canGoBack()) {
        navigation.goBack();
        return true;
      }

      return false;
    });

    return () => subscription.remove();
  }, [ref]);
}
//# sourceMappingURL=useBackButton.js.map