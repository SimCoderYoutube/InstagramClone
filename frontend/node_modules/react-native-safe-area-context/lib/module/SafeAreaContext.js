function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import NativeSafeAreaProvider from './NativeSafeAreaProvider';
export const SafeAreaInsetsContext = React.createContext(null);
export const SafeAreaFrameContext = React.createContext(null);
export function SafeAreaProvider({
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
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
  return /*#__PURE__*/React.createElement(NativeSafeAreaProvider, {
    style: [styles.fill, style],
    onInsetsChange: onInsetsChange
  }, insets != null ? /*#__PURE__*/React.createElement(SafeAreaFrameContext.Provider, {
    value: frame
  }, /*#__PURE__*/React.createElement(SafeAreaInsetsContext.Provider, {
    value: insets
  }, children)) : null);
}
const styles = StyleSheet.create({
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

export function useSafeAreaInsets() {
  const safeArea = React.useContext(SafeAreaInsetsContext);

  if (safeArea == null) {
    throw new Error('No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  }

  return safeArea;
}
export function useSafeAreaFrame() {
  const frame = React.useContext(SafeAreaFrameContext);

  if (frame == null) {
    throw new Error('No safe area frame value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.');
  }

  return frame;
}
export function withSafeAreaInsets(WrappedComponent) {
  return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(SafeAreaConsumer, null, insets => /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, props, {
    insets: insets,
    ref: ref
  }))));
}
/**
 * @deprecated
 */

export function useSafeArea() {
  return useSafeAreaInsets();
}
/**
 * @deprecated
 */

export const SafeAreaConsumer = SafeAreaInsetsContext.Consumer;
/**
 * @deprecated
 */

export const SafeAreaContext = SafeAreaInsetsContext;
//# sourceMappingURL=SafeAreaContext.js.map