function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import ThemeProvider from './theming/ThemeProvider';
import DefaultTheme from './theming/DefaultTheme';
import LinkingContext from './LinkingContext';
import useThenable from './useThenable';
import useLinking from './useLinking';
import useDocumentTitle from './useDocumentTitle';
import useBackButton from './useBackButton';

/**
 * Container component which holds the navigation state designed for React Native apps.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree. When deep link handling is enabled, this will override deep links when specified. Make sure that you don't specify an `initialState` when there's a deep link (`Linking.getInitialURL()`).
 * @param props.onReady Callback which is called after the navigation tree mounts.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.theme Theme object for the navigators.
 * @param props.linking Options for deep linking. Deep link handling is enabled when this prop is provided, unless `linking.enabled` is `false`.
 * @param props.fallback Fallback component to render until we have finished getting initial state when linking is enabled. Defaults to `null`.
 * @param props.documentTitle Options to configure the document title on Web. Updating document title is handled by default unless `documentTitle.enabled` is `false`.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
const NavigationContainer = /*#__PURE__*/React.forwardRef(function NavigationContainer(_ref, ref) {
  let {
    theme = DefaultTheme,
    linking,
    fallback = null,
    documentTitle,
    onReady
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["theme", "linking", "fallback", "documentTitle", "onReady"]);

  const isLinkingEnabled = linking ? linking.enabled !== false : false;
  const refContainer = React.useRef(null);
  useBackButton(refContainer);
  useDocumentTitle(refContainer, documentTitle);
  const {
    getInitialState
  } = useLinking(refContainer, _objectSpread({
    enabled: isLinkingEnabled,
    prefixes: []
  }, linking));
  const [isResolved, initialState] = useThenable(getInitialState);
  React.useImperativeHandle(ref, () => refContainer.current);
  const linkingContext = React.useMemo(() => ({
    options: linking
  }), [linking]);
  const isReady = rest.initialState != null || !isLinkingEnabled || isResolved;
  const onReadyRef = React.useRef(onReady);
  React.useEffect(() => {
    onReadyRef.current = onReady;
  });
  React.useEffect(() => {
    if (isReady) {
      var _onReadyRef$current;

      (_onReadyRef$current = onReadyRef.current) === null || _onReadyRef$current === void 0 ? void 0 : _onReadyRef$current.call(onReadyRef);
    }
  }, [isReady]);

  if (!isReady) {
    // This is temporary until we have Suspense for data-fetching
    // Then the fallback will be handled by a parent `Suspense` component
    return fallback;
  }

  return /*#__PURE__*/React.createElement(LinkingContext.Provider, {
    value: linkingContext
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    value: theme
  }, /*#__PURE__*/React.createElement(BaseNavigationContainer, _extends({}, rest, {
    initialState: rest.initialState == null ? initialState : rest.initialState,
    ref: refContainer
  }))));
});
export default NavigationContainer;
//# sourceMappingURL=NavigationContainer.js.map