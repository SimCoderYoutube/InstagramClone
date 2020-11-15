"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeAreaProvider = SafeAreaProvider;
exports.useSafeAreaInsets = useSafeAreaInsets;
exports.useSafeAreaFrame = useSafeAreaFrame;
exports.withSafeAreaInsets = withSafeAreaInsets;
exports.useSafeArea = useSafeArea;
exports.SafeAreaContext = exports.SafeAreaConsumer = exports.SafeAreaFrameContext = exports.SafeAreaInsetsContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _NativeSafeAreaProvider = _interopRequireDefault(require("./NativeSafeAreaProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SafeAreaInsetsContext = React.createContext(null);
exports.SafeAreaInsetsContext = SafeAreaInsetsContext;
const SafeAreaFrameContext = React.createContext(null);
exports.SafeAreaFrameContext = SafeAreaFrameContext;

function SafeAreaProvider({
  children,
  initialMetrics,
  initialSafeAreaInsets,
  style
}) {
  var _ref, _ref2, _initialMetrics$inset, _ref3, _initialMetrics$frame;

  const parentInsets = useParentSafeAreaInsets();
  const parentFrame = useParentSafeAreaFrame();
  const [insets, setInsets] = React.useState((_ref = (_ref2 = (_initialMetrics$inset = initialMetrics === null || initialMetrics === void 0 ? void 0 : initialMetrics.insets) !== null && _initialMetrics$inset !== void 0 ? _initialMetrics$inset : initialSafeAreaInsets) !== null && _ref2 !== void 0 ? _ref2 : parentInsets) !== null && _ref !== void 0 ? _ref : null);
  const [frame, setFrame] = React.useState((_ref3 = (_initialMetrics$frame = initialMetrics === null || initialMetrics === void 0 ? void 0 : initialMetrics.frame) !== null && _initialMetrics$frame !== void 0 ? _initialMetrics$frame : parentFrame) !== null && _ref3 !== void 0 ? _ref3 : {
    // Backwards compat so we render anyway if we don't have frame.
    x: 0,
    y: 0,
    width: _reactNative.Dimensions.get('window').width,
    height: _reactNative.Dimensions.get('window').height
  });
  const onInsetsChange = React.useCallback(event => {
    const {
      nativeEvent: {
        frame: nextFrame,
        insets: nextInsets
      }
    } = event;

    if ( // Backwards compat with old native code that won't send frame.
    nextFrame && (nextFrame.height !== frame.height || nextFrame.width !== frame.width || nextFrame.x !== frame.x || nextFrame.y !== frame.y)) {
      setFrame(nextFrame);
    }

    if (!insets || nextInsets.bottom !== insets.bottom || nextInsets.left !== insets.left || nextInsets.right !== insets.right || nextInsets.top !== insets.top) {
      setInsets(nextInsets);
    }
  }, [frame, insets]);
  return /*#__PURE__*/React.createElement(_NativeSafeAreaProvider.default, {
    style: [styles.fill, style],
    onInsetsChange: onInsetsChange
  }, insets != null ? /*#__PURE__*/React.createElement(SafeAreaFrameContext.Provider, {
    value: frame
  }, /*#__PURE__*/React.createElement(SafeAreaInsetsContext.Provider, {
    value: insets
  }, children)) : null);
}

const styles = _reactNative.StyleSheet.create({
  fill: {
    flex: 1
  }
});

function useParentSafeAreaInsets() {
  return React.useContext(SafeAreaInsetsContext);
}

function useParentSafeAreaFrame() {
  return React.useContext(SafeAreaFrameContext);
}

function useSafeAreaInsets() {
  const safeArea = React.useContext(SafeAreaInsetsContext);

  if (safeArea == null) {
    throw new Error('No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  }

  return safeArea;
}

function useSafeAreaFrame() {
  const frame = React.useContext(SafeAreaFrameContext);

  if (frame == null) {
    throw new Error('No safe area frame value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  }

  return frame;
}

function withSafeAreaInsets(WrappedComponent) {
  return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(SafeAreaConsumer, null, insets => /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
    insets: insets,
    ref: ref
  }))));
}
/**
 * @deprecated
 */


function useSafeArea() {
  return useSafeAreaInsets();
}
/**
 * @deprecated
 */


const SafeAreaConsumer = SafeAreaInsetsContext.Consumer;
/**
 * @deprecated
 */

exports.SafeAreaConsumer = SafeAreaConsumer;
const SafeAreaContext = SafeAreaInsetsContext;
exports.SafeAreaContext = SafeAreaContext;
//# sourceMappingURL=SafeAreaContext.js.map