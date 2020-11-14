function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, Easing, Platform, StyleSheet, View } from 'react-native';
import { withTheme } from '../core/theming';
const DURATION = 2400;
/**
 * Activity indicator is used to present progress of some activity in the app.
 * It can be used as a drop-in for the ActivityIndicator shipped with React Native.
 *
 * <div class="screenshots">
 *   <img src="screenshots/activity-indicator.gif" style="width: 100px;" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ActivityIndicator, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ActivityIndicator animating={true} color={Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */

const ActivityIndicator = (_ref) => {
  let {
    animating = true,
    color: indicatorColor,
    hidesWhenStopped = true,
    size: indicatorSize = 'small',
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["animating", "color", "hidesWhenStopped", "size", "style", "theme"]);

  const {
    current: timer
  } = React.useRef(new Animated.Value(0));
  const {
    current: fade
  } = React.useRef(new Animated.Value(!animating && hidesWhenStopped ? 0 : 1));
  const rotation = React.useRef(undefined);
  const {
    animation: {
      scale
    }
  } = theme;
  const startRotation = React.useCallback(() => {
    // Show indicator
    Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 1,
      isInteraction: false,
      useNativeDriver: true
    }).start(); // Circular animation in loop

    if (rotation.current) {
      timer.setValue(0); // $FlowFixMe

      Animated.loop(rotation.current).start();
    }
  }, [scale, fade, timer]);

  const stopRotation = () => {
    if (rotation.current) {
      rotation.current.stop();
    }
  };

  React.useEffect(() => {
    if (rotation.current === undefined) {
      // Circular animation in loop
      rotation.current = Animated.timing(timer, {
        duration: DURATION,
        easing: Easing.linear,
        // Animated.loop does not work if useNativeDriver is true on web
        useNativeDriver: Platform.OS !== 'web',
        toValue: 1,
        isInteraction: false
      });
    }

    if (animating) {
      startRotation();
    } else if (hidesWhenStopped) {
      // Hide indicator first and then stop rotation
      Animated.timing(fade, {
        duration: 200 * scale,
        toValue: 0,
        useNativeDriver: true,
        isInteraction: false
      }).start(stopRotation);
    } else {
      stopRotation();
    }
  }, [animating, fade, hidesWhenStopped, startRotation, scale, timer]);
  const color = indicatorColor || theme.colors.primary;
  const size = typeof indicatorSize === 'string' ? indicatorSize === 'small' ? 24 : 48 : indicatorSize ? indicatorSize : 24;
  const frames = 60 * DURATION / 1000;
  const easing = Easing.bezier(0.4, 0.0, 0.7, 1.0);
  const containerStyle = {
    width: size,
    height: size / 2,
    overflow: 'hidden'
  };
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, style]
  }, rest), /*#__PURE__*/React.createElement(Animated.View, {
    style: [{
      width: size,
      height: size,
      opacity: fade
    }],
    collapsable: false
  }, [0, 1].map(index => {
    // Thanks to https://github.com/n4kz/react-native-indicators for the great work
    const inputRange = Array.from(new Array(frames), (_, frameIndex) => frameIndex / (frames - 1));
    const outputRange = Array.from(new Array(frames), (_, frameIndex) => {
      let progress = 2 * frameIndex / (frames - 1);
      const rotation = index ? +(360 - 15) : -(180 - 15);

      if (progress > 1.0) {
        progress = 2.0 - progress;
      }

      const direction = index ? -1 : +1;
      return "".concat(direction * (180 - 30) * easing(progress) + rotation, "deg");
    });
    const layerStyle = {
      width: size,
      height: size,
      transform: [{
        rotate: timer.interpolate({
          inputRange: [0, 1],
          outputRange: ["".concat(0 + 30 + 15, "deg"), "".concat(2 * 360 + 30 + 15, "deg")]
        })
      }]
    };
    const viewportStyle = {
      width: size,
      height: size,
      transform: [{
        translateY: index ? -size / 2 : 0
      }, {
        rotate: timer.interpolate({
          inputRange,
          outputRange
        })
      }]
    };
    const offsetStyle = index ? {
      top: size / 2
    } : null;
    const lineStyle = {
      width: size,
      height: size,
      borderColor: color,
      borderWidth: size / 10,
      borderRadius: size / 2
    };
    return /*#__PURE__*/React.createElement(Animated.View, {
      key: index,
      style: [styles.layer]
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: layerStyle
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: [containerStyle, offsetStyle],
      collapsable: false
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: viewportStyle
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: containerStyle,
      collapsable: false
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: lineStyle
    }))))));
  })));
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  layer: _objectSpread(_objectSpread({}, StyleSheet.absoluteFillObject), {}, {
    justifyContent: 'center',
    alignItems: 'center'
  })
});
export default withTheme(ActivityIndicator);
//# sourceMappingURL=ActivityIndicator.js.map