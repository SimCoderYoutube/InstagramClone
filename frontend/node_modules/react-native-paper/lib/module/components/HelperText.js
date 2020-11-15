function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import color from 'color';
import { Animated, StyleSheet } from 'react-native';
import AnimatedText from './Typography/AnimatedText';
import { withTheme } from '../core/theming';

/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/helper-text.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const HelperText = (_ref) => {
  let {
    style,
    type = 'info',
    visible = true,
    theme,
    onLayout,
    padding = 'normal'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["style", "type", "visible", "theme", "onLayout", "padding"]);

  const {
    current: shown
  } = React.useRef(new Animated.Value(visible ? 1 : 0));
  let {
    current: textHeight
  } = React.useRef(0);
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    if (visible) {
      // show text
      Animated.timing(shown, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      // hide text
      Animated.timing(shown, {
        toValue: 0,
        duration: 180 * scale,
        useNativeDriver: true
      }).start();
    }
  }, [visible, scale, shown]);

  const handleTextLayout = e => {
    //@ts-ignore Animated.Text typings are improved but something is still broken. It thinks onLayout is not callable.
    onLayout === null || onLayout === void 0 ? void 0 : onLayout(e);
    textHeight = e.nativeEvent.layout.height;
  };

  const {
    colors,
    dark
  } = theme;
  const textColor = type === 'error' ? colors.error : color(colors.text).alpha(dark ? 0.7 : 0.54).rgb().string();
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(AnimatedText, _extends({
      onLayout: handleTextLayout,
      style: [styles.text, padding !== 'none' ? styles.padding : {}, {
        color: textColor,
        opacity: shown,
        transform: visible && type === 'error' ? [{
          translateY: shown.interpolate({
            inputRange: [0, 1],
            outputRange: [-textHeight / 2, 0]
          })
        }] : []
      }, style]
    }, rest), rest.children)
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingVertical: 4
  },
  padding: {
    paddingHorizontal: 12
  }
});
export default withTheme(HelperText);
//# sourceMappingURL=HelperText.js.map