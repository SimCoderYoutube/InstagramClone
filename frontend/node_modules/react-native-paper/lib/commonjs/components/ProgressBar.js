"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const INDETERMINATE_DURATION = 2000;
const INDETERMINATE_MAX_WIDTH = 0.6;
const {
  isRTL
} = _reactNative.I18nManager;
/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * <div class="screenshots">
 *   <img src="screenshots/progress-bar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */

class ProgressBar extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      width: 0,
      timer: new _reactNative.Animated.Value(0),
      fade: new _reactNative.Animated.Value(0)
    });

    _defineProperty(this, "indeterminateAnimation", null);

    _defineProperty(this, "onLayout", event => {
      const {
        visible
      } = this.props;
      const {
        width: previousWidth
      } = this.state;
      this.setState({
        width: event.nativeEvent.layout.width
      }, () => {
        // Start animation the very first time when previously the width was unclear
        if (visible && previousWidth === 0) {
          this.startAnimation();
        }
      });
    });

    _defineProperty(this, "startAnimation", () => {
      const {
        indeterminate,
        progress,
        theme: {
          animation: {
            scale
          }
        }
      } = this.props;
      const {
        fade,
        timer
      } = this.state; // Show progress bar

      _reactNative.Animated.timing(fade, {
        duration: 200 * scale,
        toValue: 1,
        useNativeDriver: true,
        isInteraction: false
      }).start(); // Animate progress bar


      if (indeterminate) {
        if (!this.indeterminateAnimation) {
          this.indeterminateAnimation = _reactNative.Animated.timing(timer, {
            duration: INDETERMINATE_DURATION,
            toValue: 1,
            // Animated.loop does not work if useNativeDriver is true on web
            useNativeDriver: _reactNative.Platform.OS !== 'web',
            isInteraction: false
          });
        } // Reset timer to the beginning


        timer.setValue(0);

        _reactNative.Animated.loop(this.indeterminateAnimation).start();
      } else {
        _reactNative.Animated.timing(timer, {
          duration: 200 * scale,
          toValue: progress ? progress : 0,
          useNativeDriver: true,
          isInteraction: false
        }).start();
      }
    });

    _defineProperty(this, "stopAnimation", () => {
      const {
        fade
      } = this.state;
      const {
        scale
      } = this.props.theme.animation; // Stop indeterminate animation

      if (this.indeterminateAnimation) {
        this.indeterminateAnimation.stop();
      }

      _reactNative.Animated.timing(fade, {
        duration: 200 * scale,
        toValue: 0,
        useNativeDriver: true,
        isInteraction: false
      }).start();
    });
  }

  componentDidUpdate(prevProps) {
    const {
      visible,
      progress
    } = this.props;

    if (progress !== prevProps.progress || visible !== prevProps.visible) {
      if (visible) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    }
  }

  render() {
    const _this$props = this.props,
          {
      color,
      indeterminate,
      style,
      theme,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      progress,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      visible
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["color", "indeterminate", "style", "theme", "progress", "visible"]);

    const {
      fade,
      timer,
      width
    } = this.state;
    const tintColor = color || theme.colors.primary;
    const trackTintColor = (0, _color.default)(tintColor).alpha(0.38).rgb().string();
    return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      onLayout: this.onLayout
    }, rest), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.container, {
        backgroundColor: trackTintColor,
        opacity: fade
      }, style]
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.progressBar, {
        backgroundColor: tintColor,
        width,
        transform: [{
          translateX: timer.interpolate(indeterminate ? {
            inputRange: [0, 0.5, 1],
            outputRange: [(isRTL ? 1 : -1) * 0.5 * width, (isRTL ? 1 : -1) * 0.5 * INDETERMINATE_MAX_WIDTH * width, (isRTL ? -1 : 1) * 0.7 * width]
          } : {
            inputRange: [0, 1],
            outputRange: [(isRTL ? 1 : -1) * 0.5 * width, 0]
          })
        }, {
          // Workaround for workaround for https://github.com/facebook/react-native/issues/6278
          scaleX: timer.interpolate(indeterminate ? {
            inputRange: [0, 0.5, 1],
            outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001]
          } : {
            inputRange: [0, 1],
            outputRange: [0.0001, 1]
          })
        }]
      }]
    })));
  }

}

_defineProperty(ProgressBar, "defaultProps", {
  visible: true,
  progress: 0
});

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 4,
    overflow: 'hidden'
  },
  progressBar: {
    flex: 1
  }
});

var _default = (0, _theming.withTheme)(ProgressBar);

exports.default = _default;
//# sourceMappingURL=ProgressBar.js.map