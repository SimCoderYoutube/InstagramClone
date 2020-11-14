"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDescriptors;

var React = _interopRequireWildcard(require("react"));

var _SceneView = _interopRequireDefault(require("./SceneView"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

var _useNavigationCache = _interopRequireDefault(require("./useNavigationCache"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
function useDescriptors({
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
  } = React.useContext(_NavigationBuilderContext.default);
  const context = React.useMemo(() => ({
    navigation,
    onAction,
    addListener,
    addKeyedListener,
    onRouteFocus,
    onDispatchAction,
    onOptionsChange
  }), [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange]);
  const navigations = (0, _useNavigationCache.default)({
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
        return /*#__PURE__*/React.createElement(_NavigationBuilderContext.default.Provider, {
          key: route.key,
          value: context
        }, /*#__PURE__*/React.createElement(_NavigationContext.default.Provider, {
          value: navigation
        }, /*#__PURE__*/React.createElement(_NavigationRouteContext.default.Provider, {
          value: route
        }, /*#__PURE__*/React.createElement(_SceneView.default, {
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