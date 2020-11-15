"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("./theming");

var _settings = require("./settings");

var _MaterialCommunityIcon = _interopRequireDefault(require("../components/MaterialCommunityIcon"));

var _PortalHost = _interopRequireDefault(require("../components/Portal/PortalHost"));

var _DefaultTheme = _interopRequireDefault(require("../styles/DefaultTheme"));

var _DarkTheme = _interopRequireDefault(require("../styles/DarkTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Provider extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      reduceMotionEnabled: false,
      colorScheme: (_reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.getColorScheme()) || 'light'
    });

    _defineProperty(this, "handleAppearanceChange", preferences => {
      const {
        colorScheme
      } = preferences;
      this.setState({
        colorScheme
      });
    });

    _defineProperty(this, "getTheme", () => {
      const {
        theme: providedTheme
      } = this.props;
      const {
        reduceMotionEnabled,
        colorScheme
      } = this.state;

      if (providedTheme) {
        return providedTheme;
      } else {
        const theme = colorScheme === 'dark' ? _DarkTheme.default : _DefaultTheme.default;
        return _objectSpread(_objectSpread({}, theme), {}, {
          animation: _objectSpread(_objectSpread({}, theme.animation), {}, {
            scale: reduceMotionEnabled ? 0 : 1
          })
        });
      }
    });

    _defineProperty(this, "updateReduceMotionSettingsInfo", async () => {
      try {
        const reduceMotionEnabled = await _reactNative.AccessibilityInfo.isReduceMotionEnabled();
        this.setState({
          reduceMotionEnabled
        });
      } catch (err) {
        console.warn(err);
      }
    });
  }

  async componentDidMount() {
    _reactNative.AccessibilityInfo.addEventListener('reduceMotionChanged', this.updateReduceMotionSettingsInfo);

    this.updateReduceMotionSettingsInfo();
    _reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.addChangeListener(this.handleAppearanceChange);
  }

  componentWillUnmount() {
    _reactNative.AccessibilityInfo.removeEventListener('reduceMotionChanged', this.updateReduceMotionSettingsInfo);

    _reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.removeChangeListener(this.handleAppearanceChange);
  }

  render() {
    const {
      children,
      settings
    } = this.props;
    return /*#__PURE__*/React.createElement(_PortalHost.default, null, /*#__PURE__*/React.createElement(_settings.Provider, {
      value: settings || {
        icon: _MaterialCommunityIcon.default
      }
    }, /*#__PURE__*/React.createElement(_theming.ThemeProvider, {
      theme: this.getTheme()
    }, children)));
  }

}

exports.default = Provider;
//# sourceMappingURL=Provider.js.map