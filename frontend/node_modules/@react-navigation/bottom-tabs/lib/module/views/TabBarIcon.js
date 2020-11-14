import React from 'react';
import { View, StyleSheet } from 'react-native';
import Badge from './Badge';
export default function TabBarIcon({
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

  return /*#__PURE__*/React.createElement(View, {
    style: [horizontal ? styles.iconHorizontal : styles.iconVertical, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, {
      opacity: activeOpacity
    }]
  }, renderIcon({
    focused: true,
    size,
    color: activeTintColor
  })), /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, {
      opacity: inactiveOpacity
    }]
  }, renderIcon({
    focused: false,
    size,
    color: inactiveTintColor
  })), /*#__PURE__*/React.createElement(Badge, {
    visible: badge != null,
    style: [styles.badge, horizontal ? styles.badgeHorizontal : styles.badgeVertical],
    size: size * 3 / 4
  }, badge));
}
const styles = StyleSheet.create({
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