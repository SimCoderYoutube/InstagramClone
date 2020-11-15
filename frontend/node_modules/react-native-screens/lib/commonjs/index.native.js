"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ReactNativeVersion = require("react-native/Libraries/Core/ReactNativeVersion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let ENABLE_SCREENS = false; // UIManager[`${moduleName}`] is deprecated in RN 0.58 and `getViewManagerConfig` is added.
// We can remove this when we drop support for RN < 0.58.

const getViewManagerConfigCompat = name => typeof _reactNative.UIManager.getViewManagerConfig !== 'undefined' ? _reactNative.UIManager.getViewManagerConfig(name) : _reactNative.UIManager[name];

function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = shouldEnableScreens;

  if (ENABLE_SCREENS && !getViewManagerConfigCompat('RNSScreen')) {
    console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  }
} // we should remove this at some point


function useScreens(shouldUseScreens = true) {
  console.warn('Method `useScreens` is deprecated, please use `enableScreens`');
  enableScreens(shouldUseScreens);
}

function screensEnabled() {
  return ENABLE_SCREENS;
} // We initialize these lazily so that importing the module doesn't throw error when not linked
// This is necessary coz libraries such as React Navigation import the library where it may not be enabled


let NativeScreenValue;
let NativeScreenContainerValue;
let NativeScreenStack;
let NativeScreenStackHeaderConfig;
let NativeScreenStackHeaderSubview;
let AnimatedNativeScreen;
const ScreensNativeModules = {
  get NativeScreen() {
    NativeScreenValue = NativeScreenValue || (0, _reactNative.requireNativeComponent)('RNSScreen', null);
    return NativeScreenValue;
  },

  get NativeScreenContainer() {
    NativeScreenContainerValue = NativeScreenContainerValue || (0, _reactNative.requireNativeComponent)('RNSScreenContainer', null);
    return NativeScreenContainerValue;
  },

  get NativeScreenStack() {
    NativeScreenStack = NativeScreenStack || (0, _reactNative.requireNativeComponent)('RNSScreenStack', null);
    return NativeScreenStack;
  },

  get NativeScreenStackHeaderConfig() {
    NativeScreenStackHeaderConfig = NativeScreenStackHeaderConfig || (0, _reactNative.requireNativeComponent)('RNSScreenStackHeaderConfig', null);
    return NativeScreenStackHeaderConfig;
  },

  get NativeScreenStackHeaderSubview() {
    NativeScreenStackHeaderSubview = NativeScreenStackHeaderSubview || (0, _reactNative.requireNativeComponent)('RNSScreenStackHeaderSubview', null);
    return NativeScreenStackHeaderSubview;
  }

};

class Screen extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setRef", ref => {
      this._ref = ref;
      this.props.onComponentRef && this.props.onComponentRef(ref);
    });
  }

  setNativeProps(props) {
    this._ref.setNativeProps(props);
  }

  render() {
    if (!ENABLE_SCREENS) {
      // Filter out active prop in this case because it is unused and
      // can cause problems depending on react-native version:
      // https://github.com/react-navigation/react-navigation/issues/4886

      /* eslint-disable no-unused-vars */
      const _this$props = this.props,
            {
        active,
        onComponentRef
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["active", "onComponentRef"]);

      return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, _extends({}, props, {
        ref: this.setRef
      }));
    } else {
      AnimatedNativeScreen = AnimatedNativeScreen || _reactNative.Animated.createAnimatedComponent(ScreensNativeModules.NativeScreen); // When using RN from master version is 0.0.0

      if (_ReactNativeVersion.version.minor >= 57 || _ReactNativeVersion.version.minor === 0) {
        return /*#__PURE__*/_react.default.createElement(AnimatedNativeScreen, _extends({}, this.props, {
          ref: this.setRef
        }));
      } else {
        // On RN version below 0.57 we need to wrap screen's children with an
        // additional View because of a bug fixed in react-native/pull/20658 which
        // was preventing a view from having both styles and some other props being
        // "animated" (using Animated native driver)
        const _this$props2 = this.props,
              {
          style,
          children
        } = _this$props2,
              rest = _objectWithoutProperties(_this$props2, ["style", "children"]);

        return /*#__PURE__*/_react.default.createElement(AnimatedNativeScreen, _extends({}, rest, {
          ref: this.setRef,
          style: _reactNative.StyleSheet.absoluteFill
        }), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
          style: style
        }, children));
      }
    }
  }

}

class ScreenContainer extends _react.default.Component {
  render() {
    if (!ENABLE_SCREENS) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, this.props);
    } else {
      return /*#__PURE__*/_react.default.createElement(ScreensNativeModules.NativeScreenContainer, this.props);
    }
  }

}

const styles = _reactNative.StyleSheet.create({
  headerSubview: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ScreenStackHeaderBackButtonImage = props => /*#__PURE__*/_react.default.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, {
  type: "back",
  style: styles.headerSubview
}, /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({
  resizeMode: "center",
  fadeDuration: 0
}, props)));

const ScreenStackHeaderRightView = props => /*#__PURE__*/_react.default.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "right",
  style: styles.headerSubview
}));

const ScreenStackHeaderLeftView = props => /*#__PURE__*/_react.default.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "left",
  style: styles.headerSubview
}));

const ScreenStackHeaderCenterView = props => /*#__PURE__*/_react.default.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "center",
  style: styles.headerSubview
}));

module.exports = {
  ScreenContainer,
  Screen,

  get NativeScreen() {
    return ScreensNativeModules.NativeScreen;
  },

  get NativeScreenContainer() {
    return ScreensNativeModules.NativeScreenContainer;
  },

  get ScreenStack() {
    return ScreensNativeModules.NativeScreenStack;
  },

  get ScreenStackHeaderConfig() {
    return ScreensNativeModules.NativeScreenStackHeaderConfig;
  },

  get ScreenStackHeaderSubview() {
    return ScreensNativeModules.NativeScreenStackHeaderSubview;
  },

  ScreenStackHeaderBackButtonImage,
  ScreenStackHeaderRightView,
  ScreenStackHeaderLeftView,
  ScreenStackHeaderCenterView,
  enableScreens,
  useScreens,
  screensEnabled
};
//# sourceMappingURL=index.native.js.map