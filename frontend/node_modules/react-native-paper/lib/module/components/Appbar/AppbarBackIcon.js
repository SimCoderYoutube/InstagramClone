import * as React from 'react';
import { Platform, I18nManager, View, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcon from '../MaterialCommunityIcon';

const AppbarBackIcon = ({
  size,
  color
}) => Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(View, {
  style: [styles.wrapper, {
    width: size,
    height: size,
    transform: [{
      scaleX: I18nManager.isRTL ? -1 : 1
    }]
  }]
}, /*#__PURE__*/React.createElement(Image, {
  source: require('../../assets/back-chevron.png'),
  style: [styles.icon, {
    tintColor: color
  }]
})) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
  name: "arrow-left",
  color: color,
  size: size,
  direction: I18nManager.isRTL ? 'rtl' : 'ltr'
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 21,
    width: 21,
    resizeMode: 'contain'
  }
});
export default AppbarBackIcon;
//# sourceMappingURL=AppbarBackIcon.js.map