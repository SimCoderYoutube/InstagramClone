"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsKeyboardShown;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useIsKeyboardShown() {
  const [isKeyboardShown, setIsKeyboardShown] = React.useState(false);
  React.useEffect(() => {
    const handleKeyboardShow = () => setIsKeyboardShown(true);

    const handleKeyboardHide = () => setIsKeyboardShown(false);

    if (_reactNative.Platform.OS === 'ios') {
      _reactNative.Keyboard.addListener('keyboardWillShow', handleKeyboardShow);

      _reactNative.Keyboard.addListener('keyboardWillHide', handleKeyboardHide);
    } else {
      _reactNative.Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

      _reactNative.Keyboard.addListener('keyboardDidHide', handleKeyboardHide);
    }

    return () => {
      if (_reactNative.Platform.OS === 'ios') {
        _reactNative.Keyboard.removeListener('keyboardWillShow', handleKeyboardShow);

        _reactNative.Keyboard.removeListener('keyboardWillHide', handleKeyboardHide);
      } else {
        _reactNative.Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);

        _reactNative.Keyboard.removeListener('keyboardDidHide', handleKeyboardHide);
      }
    };
  }, []);
  return isKeyboardShown;
}
//# sourceMappingURL=useIsKeyboardShown.js.map