function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { AccessibilityInfo, Appearance } from 'react-native';
import { ThemeProvider } from './theming';
import { Provider as SettingsProvider } from './settings';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
import PortalHost from '../components/Portal/PortalHost';
import DefaultTheme from '../styles/DefaultTheme';
import DarkTheme from '../styles/DarkTheme';
export default class Provider extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      reduceMotionEnabled: false,
      colorScheme: (Appearance === null || Appearance === void 0 ? void 0 : Appearance.getColorScheme()) || 'light'
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
        const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
        return _objectSpread(_objectSpread({}, theme), {}, {
          animation: _objectSpread(_objectSpread({}, theme.animation), {}, {
            scale: reduceMotionEnabled ? 0 : 1
          })
        });
      }
    });

    _defineProperty(this, "updateReduceMotionSettingsInfo", async () => {
      try {
        const reduceMotionEnabled = await AccessibilityInfo.isReduceMotionEnabled();
        this.setState({
          reduceMotionEnabled
        });
      } catch (err) {
        console.warn(err);
      }
    });
  }

  async componentDidMount() {
    AccessibilityInfo.addEventListener('reduceMotionChanged', this.updateReduceMotionSettingsInfo);
    this.updateReduceMotionSettingsInfo();
    Appearance === null || Appearance === void 0 ? void 0 : Appearance.addChangeListener(this.handleAppearanceChange);
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener('reduceMotionChanged', this.updateReduceMotionSettingsInfo);
    Appearance === null || Appearance === void 0 ? void 0 : Appearance.removeChangeListener(this.handleAppearanceChange);
  }

  render() {
    const {
      children,
      settings
    } = this.props;
    return /*#__PURE__*/React.createElement(PortalHost, null, /*#__PURE__*/React.createElement(SettingsProvider, {
      value: settings || {
        icon: MaterialCommunityIcon
      }
    }, /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: this.getTheme()
    }, children)));
  }

}
//# sourceMappingURL=Provider.js.map