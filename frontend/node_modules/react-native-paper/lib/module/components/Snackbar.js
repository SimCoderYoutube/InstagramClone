function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';
import Button from './Button';
import Surface from './Surface';
import Text from './Typography/Text';
import { withTheme } from '../core/theming';
const DURATION_SHORT = 4000;
const DURATION_MEDIUM = 7000;
const DURATION_LONG = 10000;
/**
 * Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
 * Snackbar by default uses `onSurface` color from theme.
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/snackbar.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Button, Snackbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const onToggleSnackBar = () => setVisible(!visible);
 *
 *   const onDismissSnackBar = () => setVisible(false);
 *
 *   return (
 *     <View style={styles.container}>
 *       <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
 *       <Snackbar
 *         visible={visible}
 *         onDismiss={onDismissSnackBar}
 *         action={{
 *           label: 'Undo',
 *           onPress: () => {
 *             // Do something
 *           },
 *         }}>
 *         Hey there! I'm a Snackbar.
 *       </Snackbar>
 *     </View>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'space-between',
 *   },
 * });
 *
 * export default MyComponent;
 * ```
 */

const Snackbar = (_ref) => {
  let {
    visible,
    action,
    duration = DURATION_MEDIUM,
    onDismiss,
    children,
    wrapperStyle,
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["visible", "action", "duration", "onDismiss", "children", "wrapperStyle", "style", "theme"]);

  const {
    current: opacity
  } = React.useRef(new Animated.Value(0.0));
  const [hidden, setHidden] = React.useState(!visible);
  const hideTimeout = React.useRef(undefined);
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);
  React.useLayoutEffect(() => {
    if (visible) {
      // show
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      setHidden(false);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start(({
        finished
      }) => {
        if (finished) {
          const isInfinity = duration === Number.POSITIVE_INFINITY || duration === Number.NEGATIVE_INFINITY;

          if (finished && !isInfinity) {
            hideTimeout.current = setTimeout(onDismiss, duration);
          }
        }
      });
    } else {
      // hide
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      Animated.timing(opacity, {
        toValue: 0,
        duration: 100 * scale,
        useNativeDriver: true
      }).start(({
        finished
      }) => {
        if (finished) setHidden(true);
      });
    }
  }, [visible, duration, opacity, scale, onDismiss]);
  const {
    colors,
    roundness
  } = theme;
  if (hidden) return null;
  return /*#__PURE__*/React.createElement(SafeAreaView, {
    pointerEvents: "box-none",
    style: [styles.wrapper, wrapperStyle]
  }, /*#__PURE__*/React.createElement(Surface, _extends({
    pointerEvents: "box-none",
    accessibilityLiveRegion: "polite",
    style: [styles.container, {
      borderRadius: roundness,
      opacity: opacity,
      transform: [{
        scale: visible ? opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1]
        }) : 1
      }]
    }, {
      backgroundColor: colors.onSurface
    }, style]
  }, rest), /*#__PURE__*/React.createElement(Text, {
    style: [styles.content, {
      marginRight: action ? 0 : 16,
      color: colors.surface
    }]
  }, children), action ? /*#__PURE__*/React.createElement(Button, {
    accessibilityLabel: action.accessibilityLabel,
    onPress: () => {
      action.onPress();
      onDismiss();
    },
    style: styles.button,
    color: colors.accent,
    compact: true,
    mode: "text"
  }, action.label) : null));
};
/**
 * Show the Snackbar for a short duration.
 */


Snackbar.DURATION_SHORT = DURATION_SHORT;
/**
 * Show the Snackbar for a medium duration.
 */

Snackbar.DURATION_MEDIUM = DURATION_MEDIUM;
/**
 * Show the Snackbar for a long duration.
 */

Snackbar.DURATION_LONG = DURATION_LONG;
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  container: {
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    borderRadius: 4
  },
  content: {
    marginLeft: 16,
    marginVertical: 14,
    flexWrap: 'wrap',
    flex: 1
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 6
  }
});
export default withTheme(Snackbar);
//# sourceMappingURL=Snackbar.js.map