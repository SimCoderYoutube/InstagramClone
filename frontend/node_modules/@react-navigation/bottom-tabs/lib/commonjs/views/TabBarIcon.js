"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabBarIcon;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Badge = _interopRequireDefault(require("./Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabBarIcon({
  horizontal,
  badge,
  activeOpacity,
  inactiveOpacity,
  activeTintColor,
  inactiveTintColor,
  renderIcon,
  style
}) {
  const size = 25; // We render the icon twice at the same position on top of each other:
  // active and inactive one, so we can fade between them.

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [horizontal ? styles.iconHorizontal : styles.iconVertical, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.icon, {
      opacity: activeOpacity
    }]
  }, renderIcon({
    focused: true,
    size,
    color: activeTintColor
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.icon, {
      opacity: inactiveOpacity
    }]
  }, renderIcon({
    focused: false,
    size,
    color: inactiveTintColor
  })), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    visible: badge != null,
    style: [styles.badge, horizontal ? styles.badgeHorizontal : styles.badgeVertical],
    size: size * 3 / 4
  }, badge));
}

const styles = _reactNative.StyleSheet.create({
  icon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // Workaround for react-native >= 0.54 layout bug
    minWidth: 25
  },
  iconVertical: {
    flex: 1
  },
  iconHorizontal: {
    height: '100%',
    marginTop: 3
  },
  badge: {
    position: 'absolute',
    left: 3
  },
  badgeVertical: {
    top: 3
  },
  badgeHorizontal: {
    top: 7
  }
});
//# sourceMappingURL=TabBarIcon.js.map