"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BottomTabBar;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _BottomTabItem = _interopRequireDefault(require("./BottomTabItem"));

var _useWindowDimensions = _interopRequireDefault(require("../utils/useWindowDimensions"));

var _useIsKeyboardShown = _interopRequireDefault(require("../utils/useIsKeyboardShown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_TABBAR_HEIGHT = 49;
const DEFAULT_MAX_TAB_ITEM_WIDTH = 125;
const useNativeDriver = _reactNative.Platform.OS !== 'web';

function BottomTabBar({
  state,
  navigation,
  descriptors,
  activeBackgroundColor,
  activeTintColor,
  adaptive = true,
  allowFontScaling,
  inactiveBackgroundColor,
  inactiveTintColor,
  keyboardHidesTabBar = false,
  labelPosition,
  labelStyle,
  iconStyle,
  safeAreaInsets,
  showLabel,
  style,
  tabStyle
}) {
  var _safeAreaInsets$top, _safeAreaInsets$right, _safeAreaInsets$botto, _safeAreaInsets$left;

  const {
    colors
  } = (0, _native.useTheme)();
  const buildLink = (0, _native.useLinkBuilder)();
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const dimensions = (0, _useWindowDimensions.default)();
  const isKeyboardShown = (0, _useIsKeyboardShown.default)();
  const shouldShowTabBar = focusedOptions.tabBarVisible !== false && !(keyboardHidesTabBar && isKeyboardShown);

  const visibilityAnimationConfigRef = _react.default.useRef(focusedOptions.tabBarVisibilityAnimationConfig);

  _react.default.useEffect(() => {
    visibilityAnimationConfigRef.current = focusedOptions.tabBarVisibilityAnimationConfig;
  });

  const [isTabBarHidden, setIsTabBarHidden] = _react.default.useState(!shouldShowTabBar);

  const [visible] = _react.default.useState(() => new _reactNative.Animated.Value(shouldShowTabBar ? 1 : 0));

  _react.default.useEffect(() => {
    const visibilityAnimationConfig = visibilityAnimationConfigRef.current;

    if (shouldShowTabBar) {
      var _visibilityAnimationC, _visibilityAnimationC2;

      const animation = (visibilityAnimationConfig === null || visibilityAnimationConfig === void 0 ? void 0 : (_visibilityAnimationC = visibilityAnimationConfig.show) === null || _visibilityAnimationC === void 0 ? void 0 : _visibilityAnimationC.animation) === 'spring' ? _reactNative.Animated.spring : _reactNative.Animated.timing;
      animation(visible, _objectSpread({
        toValue: 1,
        useNativeDriver,
        duration: 250
      }, visibilityAnimationConfig === null || visibilityAnimationConfig === void 0 ? void 0 : (_visibilityAnimationC2 = visibilityAnimationConfig.show) === null || _visibilityAnimationC2 === void 0 ? void 0 : _visibilityAnimationC2.config)).start(({
        finished
      }) => {
        if (finished) {
          setIsTabBarHidden(false);
        }
      });
    } else {
      var _visibilityAnimationC3, _visibilityAnimationC4;

      setIsTabBarHidden(true);
      const animation = (visibilityAnimationConfig === null || visibilityAnimationConfig === void 0 ? void 0 : (_visibilityAnimationC3 = visibilityAnimationConfig.hide) === null || _visibilityAnimationC3 === void 0 ? void 0 : _visibilityAnimationC3.animation) === 'spring' ? _reactNative.Animated.spring : _reactNative.Animated.timing;
      animation(visible, _objectSpread({
        toValue: 0,
        useNativeDriver,
        duration: 200
      }, visibilityAnimationConfig === null || visibilityAnimationConfig === void 0 ? void 0 : (_visibilityAnimationC4 = visibilityAnimationConfig.hide) === null || _visibilityAnimationC4 === void 0 ? void 0 : _visibilityAnimationC4.config)).start();
    }
  }, [visible, shouldShowTabBar]);

  const [layout, setLayout] = _react.default.useState({
    height: 0,
    width: dimensions.width
  });

  const handleLayout = e => {
    const {
      height,
      width
    } = e.nativeEvent.layout;
    setLayout(layout => {
      if (height === layout.height && width === layout.width) {
        return layout;
      } else {
        return {
          height,
          width
        };
      }
    });
  };

  const {
    routes
  } = state;

  const shouldUseHorizontalLabels = () => {
    if (labelPosition) {
      return labelPosition === 'beside-icon';
    }

    if (!adaptive) {
      return false;
    }

    if (layout.width >= 768) {
      // Screen size matches a tablet
      let maxTabItemWidth = DEFAULT_MAX_TAB_ITEM_WIDTH;

      const flattenedStyle = _reactNative.StyleSheet.flatten(tabStyle);

      if (flattenedStyle) {
        if (typeof flattenedStyle.width === 'number') {
          maxTabItemWidth = flattenedStyle.width;
        } else if (typeof flattenedStyle.maxWidth === 'number') {
          maxTabItemWidth = flattenedStyle.maxWidth;
        }
      }

      return routes.length * maxTabItemWidth <= layout.width;
    } else {
      const isLandscape = dimensions.width > dimensions.height;
      return isLandscape;
    }
  };

  const defaultInsets = (0, _reactNativeSafeAreaContext.useSafeArea)();
  const insets = {
    top: (_safeAreaInsets$top = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.top) !== null && _safeAreaInsets$top !== void 0 ? _safeAreaInsets$top : defaultInsets.top,
    right: (_safeAreaInsets$right = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.right) !== null && _safeAreaInsets$right !== void 0 ? _safeAreaInsets$right : defaultInsets.right,
    bottom: (_safeAreaInsets$botto = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.bottom) !== null && _safeAreaInsets$botto !== void 0 ? _safeAreaInsets$botto : defaultInsets.bottom,
    left: (_safeAreaInsets$left = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.left) !== null && _safeAreaInsets$left !== void 0 ? _safeAreaInsets$left : defaultInsets.left
  };
  const paddingBottom = Math.max(insets.bottom - _reactNative.Platform.select({
    ios: 4,
    default: 0
  }), 0);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.tabBar, {
      backgroundColor: colors.card,
      borderTopColor: colors.border
    }, {
      transform: [{
        translateY: visible.interpolate({
          inputRange: [0, 1],
          outputRange: [layout.height + paddingBottom, 0]
        })
      }],
      // Absolutely position the tab bar so that the content is below it
      // This is needed to avoid gap at bottom when the tab bar is hidden
      position: isTabBarHidden ? 'absolute' : null
    }, {
      height: DEFAULT_TABBAR_HEIGHT + paddingBottom,
      paddingBottom,
      paddingHorizontal: Math.max(insets.left, insets.right)
    }, style],
    pointerEvents: isTabBarHidden ? 'none' : 'auto'
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.content,
    onLayout: handleLayout
  }, routes.map((route, index) => {
    const focused = index === state.index;
    const {
      options
    } = descriptors[route.key];

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true
      });

      if (!focused && !event.defaultPrevented) {
        navigation.dispatch(_objectSpread(_objectSpread({}, _native.CommonActions.navigate(route.name)), {}, {
          target: state.key
        }));
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key
      });
    };

    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
    const accessibilityLabel = options.tabBarAccessibilityLabel !== undefined ? options.tabBarAccessibilityLabel : typeof label === 'string' ? "".concat(label, ", tab, ").concat(index + 1, " of ").concat(routes.length) : undefined;
    return /*#__PURE__*/_react.default.createElement(_native.NavigationContext.Provider, {
      key: route.key,
      value: descriptors[route.key].navigation
    }, /*#__PURE__*/_react.default.createElement(_native.NavigationRouteContext.Provider, {
      value: route
    }, /*#__PURE__*/_react.default.createElement(_BottomTabItem.default, {
      route: route,
      focused: focused,
      horizontal: shouldUseHorizontalLabels(),
      onPress: onPress,
      onLongPress: onLongPress,
      accessibilityLabel: accessibilityLabel,
      to: buildLink(route.name, route.params),
      testID: options.tabBarTestID,
      allowFontScaling: allowFontScaling,
      activeTintColor: activeTintColor,
      inactiveTintColor: inactiveTintColor,
      activeBackgroundColor: activeBackgroundColor,
      inactiveBackgroundColor: inactiveBackgroundColor,
      button: options.tabBarButton,
      icon: options.tabBarIcon,
      badge: options.tabBarBadge,
      label: label,
      showLabel: showLabel,
      labelStyle: labelStyle,
      iconStyle: iconStyle,
      style: tabStyle
    })));
  })));
}

const styles = _reactNative.StyleSheet.create({
  tabBar: {
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    elevation: 8
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  }
});
//# sourceMappingURL=BottomTabBar.js.map