function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Screen, screensEnabled } from 'react-native-screens';
const FAR_FAR_AWAY = 30000; // this should be big enough to move the whole view out of its container

export default class ResourceSavingScene extends React.Component {
  render() {
    // react-native-screens is buggy on web
    if ((screensEnabled === null || screensEnabled === void 0 ? void 0 : screensEnabled()) && Platform.OS !== 'web') {
      const _this$props = this.props,
            {
        isVisible
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["isVisible"]); // @ts-expect-error: stackPresentation is incorrectly marked as required


      return /*#__PURE__*/React.createElement(Screen, _extends({
        active: isVisible ? 1 : 0
      }, rest));
    }

    const _this$props2 = this.props,
          {
      isVisible,
      children,
      style
    } = _this$props2,
          rest = _objectWithoutProperties(_this$props2, ["isVisible", "children", "style"]);

    return /*#__PURE__*/React.createElement(View, _extends({
      style: [styles.container, Platform.OS === 'web' ? {
        display: isVisible ? 'flex' : 'none'
      } : null, style],
      collapsable: false,
      removeClippedSubviews: // On iOS, set removeClippedSubviews to true only when not focused
      // This is an workaround for a bug where the clipped view never re-appears
      Platform.OS === 'ios' ? !isVisible : true,
      pointerEvents: isVisible ? 'auto' : 'none'
    }, rest), /*#__PURE__*/React.createElement(View, {
      style: isVisible ? styles.attached : styles.detached
    }, children));
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  attached: {
    flex: 1
  },
  detached: {
    flex: 1,
    top: FAR_FAR_AWAY
  }
});
//# sourceMappingURL=ResourceSavingScene.js.map