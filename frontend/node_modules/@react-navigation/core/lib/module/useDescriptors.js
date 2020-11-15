function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import SceneView from './SceneView';
import NavigationBuilderContext from './NavigationBuilderContext';
import useNavigationCache from './useNavigationCache';
import NavigationContext from './NavigationContext';
import NavigationRouteContext from './NavigationRouteContext';

/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
export default function useDescriptors({
  state,
  screens,
  navigation,
  screenOptions,
  onAction,
  getState,
  setState,
  addListener,
  addKeyedListener,
  onRouteFocus,
  router,
  emitter
}) {
  const [options, setOptions] = React.useState({});
  const {
    onDispatchAction,
    onOptionsChange
  } = React.useContext(NavigationBuilderContext);
  const context = React.useMemo(() => ({
    navigation,
    onAction,
    addListener,
    addKeyedListener,
    onRouteFocus,
    onDispatchAction,
    onOptionsChange
  }), [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange]);
  const navigations = useNavigationCache({
    state,
    getState,
    navigation,
    setOptions,
    router,
    emitter
  });
  return state.routes.reduce((acc, route) => {
    const screen = screens[route.name];
    const navigation = navigations[route.key];

    const routeOptions = _objectSpread(_objectSpread(_objectSpread({}, typeof screenOptions === 'object' || screenOptions == null ? screenOptions : // @ts-expect-error: this is a function, but typescript doesn't think so
    screenOptions({
      route,
      navigation
    })), typeof screen.options === 'object' || screen.options == null ? screen.options : // @ts-expect-error: this is a function, but typescript doesn't think so
    screen.options({
      route,
      navigation
    })), options[route.key]);

    acc[route.key] = {
      navigation,

      render() {
        return /*#__PURE__*/React.createElement(NavigationBuilderContext.Provider, {
          key: route.key,
          value: context
        }, /*#__PURE__*/React.createElement(NavigationContext.Provider, {
          value: navigation
        }, /*#__PURE__*/React.createElement(NavigationRouteContext.Provider, {
          value: route
        }, /*#__PURE__*/React.createElement(SceneView, {
          navigation: navigation,
          route: route,
          screen: screen,
          getState: getState,
          setState: setState,
          options: routeOptions
        }))));
      },

      options: routeOptions
    };
    return acc;
  }, {});
}
//# sourceMappingURL=useDescriptors.js.map