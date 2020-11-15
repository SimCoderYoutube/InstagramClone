function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { PanGestureHandler as PanGestureHandlerNative } from 'react-native-gesture-handler';
import GestureHandlerRefContext from '../utils/GestureHandlerRefContext';
export function PanGestureHandler(props) {
  const gestureRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(GestureHandlerRefContext.Provider, {
    value: gestureRef
  }, /*#__PURE__*/React.createElement(PanGestureHandlerNative, _extends({}, props, {
    ref: gestureRef
  })));
}
export { GestureHandlerRootView, State as GestureState, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
//# sourceMappingURL=GestureHandlerNative.js.map