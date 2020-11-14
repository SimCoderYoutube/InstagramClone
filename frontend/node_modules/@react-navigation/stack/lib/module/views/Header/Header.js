function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import HeaderSegment from './HeaderSegment';
import HeaderTitle from './HeaderTitle';
import debounce from '../../utils/debounce';
export default /*#__PURE__*/React.memo(function Header(props) {
  const {
    scene,
    previous,
    layout,
    insets,
    navigation,
    styleInterpolator
  } = props;
  const {
    options
  } = scene.descriptor;
  const title = typeof options.headerTitle !== 'function' && options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
  let leftLabel; // The label for the left back button shows the title of the previous screen
  // If a custom label is specified, we use it, otherwise use previous screen's title

  if (options.headerBackTitle !== undefined) {
    leftLabel = options.headerBackTitle;
  } else if (previous) {
    const o = previous.descriptor.options;
    leftLabel = typeof o.headerTitle !== 'function' && o.headerTitle !== undefined ? o.headerTitle : o.title !== undefined ? o.title : previous.route.name;
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  const goBack = React.useCallback(debounce(() => {
    if (navigation.isFocused() && navigation.canGoBack()) {
      navigation.dispatch(_objectSpread(_objectSpread({}, StackActions.pop()), {}, {
        source: scene.route.key
      }));
    }
  }, 50), [navigation, scene.route.key]);
  return /*#__PURE__*/React.createElement(HeaderSegment, _extends({}, options, {
    insets: insets,
    layout: layout,
    scene: scene,
    title: title,
    leftLabel: leftLabel,
    headerTitle: typeof options.headerTitle !== 'function' ? props => /*#__PURE__*/React.createElement(HeaderTitle, props) : options.headerTitle,
    onGoBack: previous ? goBack : undefined,
    styleInterpolator: styleInterpolator
  }));
});
//# sourceMappingURL=Header.js.map