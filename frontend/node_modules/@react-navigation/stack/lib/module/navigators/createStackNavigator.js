function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Platform } from 'react-native';
import { useNavigationBuilder, createNavigatorFactory, StackRouter, StackActions } from '@react-navigation/native';
import StackView from '../views/Stack/StackView';

function StackNavigator(_ref) {
  let {
    initialRouteName,
    children,
    screenOptions
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["initialRouteName", "children", "screenOptions"]);

  const defaultOptions = {
    gestureEnabled: Platform.OS === 'ios',
    animationEnabled: Platform.OS !== 'web' && Platform.OS !== 'windows' && Platform.OS !== 'macos'
  };
  const {
    state,
    descriptors,
    navigation
  } = useNavigationBuilder(StackRouter, {
    initialRouteName,
    children,
    screenOptions: typeof screenOptions === 'function' ? (...args) => _objectSpread(_objectSpread({}, defaultOptions), screenOptions(...args)) : _objectSpread(_objectSpread({}, defaultOptions), screenOptions)
  });
  React.useEffect(() => navigation.addListener && navigation.addListener('tabPress', e => {
    const isFocused = navigation.isFocused(); // Run the operation in the next frame so we're sure all listeners have been run
    // This is necessary to know if preventDefault() has been called

    requestAnimationFrame(() => {
      if (state.index > 0 && isFocused && !e.defaultPrevented) {
        // When user taps on already focused tab and we're inside the tab,
        // reset the stack to replicate native behaviour
        navigation.dispatch(_objectSpread(_objectSpread({}, StackActions.popToTop()), {}, {
          target: state.key
        }));
      }
    });
  }), [navigation, state.index, state.key]);
  return /*#__PURE__*/React.createElement(StackView, _extends({}, rest, {
    state: state,
    descriptors: descriptors,
    navigation: navigation
  }));
}

export default createNavigatorFactory(StackNavigator);
//# sourceMappingURL=createStackNavigator.js.map