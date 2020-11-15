"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _CardSheet = _interopRequireDefault(require("./CardSheet"));

var _GestureHandler = require("../GestureHandler");

var _CardAnimationContext = _interopRequireDefault(require("../../utils/CardAnimationContext"));

var _getDistanceForDirection = _interopRequireDefault(require("../../utils/getDistanceForDirection"));

var _getInvertedMultiplier = _interopRequireDefault(require("../../utils/getInvertedMultiplier"));

var _memoize = _interopRequireDefault(require("../../utils/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GESTURE_VELOCITY_IMPACT = 0.3;
const TRUE = 1;
const FALSE = 0;
/**
 * The distance of touch start from the edge of the screen where the gesture will be recognized
 */

const GESTURE_RESPONSE_DISTANCE_HORIZONTAL = 50;
const GESTURE_RESPONSE_DISTANCE_VERTICAL = 135;
const useNativeDriver = _reactNative.Platform.OS !== 'web';

class Card extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isCurrentlyMounted", false);

    _defineProperty(this, "isClosing", new _reactNative.Animated.Value(FALSE));

    _defineProperty(this, "inverted", new _reactNative.Animated.Value((0, _getInvertedMultiplier.default)(this.props.gestureDirection)));

    _defineProperty(this, "layout", {
      width: new _reactNative.Animated.Value(this.props.layout.width),
      height: new _reactNative.Animated.Value(this.props.layout.height)
    });

    _defineProperty(this, "isSwiping", new _reactNative.Animated.Value(FALSE));

    _defineProperty(this, "interactionHandle", void 0);

    _defineProperty(this, "pendingGestureCallback", void 0);

    _defineProperty(this, "lastToValue", void 0);

    _defineProperty(this, "animate", ({
      closing,
      velocity
    }) => {
      const {
        gesture,
        transitionSpec,
        onOpen,
        onClose,
        onTransitionStart
      } = this.props;
      const toValue = this.getAnimateToValue(_objectSpread(_objectSpread({}, this.props), {}, {
        closing
      }));
      this.lastToValue = toValue;
      const spec = closing ? transitionSpec.close : transitionSpec.open;
      const animation = spec.animation === 'spring' ? _reactNative.Animated.spring : _reactNative.Animated.timing;
      this.setPointerEventsEnabled(!closing);
      this.handleStartInteraction();
      clearTimeout(this.pendingGestureCallback);
      onTransitionStart === null || onTransitionStart === void 0 ? void 0 : onTransitionStart({
        closing
      });
      animation(gesture, _objectSpread(_objectSpread({}, spec.config), {}, {
        velocity,
        toValue,
        useNativeDriver,
        isInteraction: false
      })).start(({
        finished
      }) => {
        this.handleEndInteraction();
        clearTimeout(this.pendingGestureCallback);

        if (finished) {
          if (closing) {
            onClose();
          } else {
            onOpen();
          }

          if (this.isCurrentlyMounted) {
            // Make sure to re-open screen if it wasn't removed
            this.forceUpdate();
          }
        }
      });
    });

    _defineProperty(this, "getAnimateToValue", ({
      closing,
      layout,
      gestureDirection
    }) => {
      if (!closing) {
        return 0;
      }

      return (0, _getDistanceForDirection.default)(layout, gestureDirection);
    });

    _defineProperty(this, "setPointerEventsEnabled", enabled => {
      var _this$contentRef$curr;

      const pointerEvents = enabled ? 'box-none' : 'none';
      (_this$contentRef$curr = this.contentRef.current) === null || _this$contentRef$curr === void 0 ? void 0 : _this$contentRef$curr.setNativeProps({
        pointerEvents
      });
    });

    _defineProperty(this, "handleStartInteraction", () => {
      if (this.interactionHandle === undefined) {
        this.interactionHandle = _reactNative.InteractionManager.createInteractionHandle();
      }
    });

    _defineProperty(this, "handleEndInteraction", () => {
      if (this.interactionHandle !== undefined) {
        _reactNative.InteractionManager.clearInteractionHandle(this.interactionHandle);

        this.interactionHandle = undefined;
      }
    });

    _defineProperty(this, "handleGestureStateChange", ({
      nativeEvent
    }) => {
      const {
        layout,
        onClose,
        onGestureBegin,
        onGestureCanceled,
        onGestureEnd,
        gestureDirection,
        gestureVelocityImpact
      } = this.props;

      switch (nativeEvent.state) {
        case _GestureHandler.GestureState.BEGAN:
          this.isSwiping.setValue(TRUE);
          this.handleStartInteraction();
          onGestureBegin === null || onGestureBegin === void 0 ? void 0 : onGestureBegin();
          break;

        case _GestureHandler.GestureState.CANCELLED:
          {
            this.isSwiping.setValue(FALSE);
            this.handleEndInteraction();
            const velocity = gestureDirection === 'vertical' || gestureDirection === 'vertical-inverted' ? nativeEvent.velocityY : nativeEvent.velocityX;
            this.animate({
              closing: this.props.closing,
              velocity
            });
            onGestureCanceled === null || onGestureCanceled === void 0 ? void 0 : onGestureCanceled();
            break;
          }

        case _GestureHandler.GestureState.END:
          {
            this.isSwiping.setValue(FALSE);
            let distance;
            let translation;
            let velocity;

            if (gestureDirection === 'vertical' || gestureDirection === 'vertical-inverted') {
              distance = layout.height;
              translation = nativeEvent.translationY;
              velocity = nativeEvent.velocityY;
            } else {
              distance = layout.width;
              translation = nativeEvent.translationX;
              velocity = nativeEvent.velocityX;
            }

            const closing = (translation + velocity * gestureVelocityImpact) * (0, _getInvertedMultiplier.default)(gestureDirection) > distance / 2 ? velocity !== 0 || translation !== 0 : this.props.closing;
            this.animate({
              closing,
              velocity
            });

            if (closing) {
              // We call onClose with a delay to make sure that the animation has already started
              // This will make sure that the state update caused by this doesn't affect start of animation
              this.pendingGestureCallback = setTimeout(() => {
                onClose(); // Trigger an update after we dispatch the action to remove the screen
                // This will make sure that we check if the screen didn't get removed so we can cancel the animation

                this.forceUpdate();
              }, 32);
            }

            onGestureEnd === null || onGestureEnd === void 0 ? void 0 : onGestureEnd();
            break;
          }
      }
    });

    _defineProperty(this, "getInterpolatedStyle", (0, _memoize.default)((styleInterpolator, index, current, next, layout, insetTop, insetRight, insetBottom, insetLeft) => styleInterpolator({
      index,
      current: {
        progress: current
      },
      next: next && {
        progress: next
      },
      closing: this.isClosing,
      swiping: this.isSwiping,
      inverted: this.inverted,
      layouts: {
        screen: layout
      },
      insets: {
        top: insetTop,
        right: insetRight,
        bottom: insetBottom,
        left: insetLeft
      }
    })));

    _defineProperty(this, "getCardAnimationContext", (0, _memoize.default)((index, current, next, layout, insetTop, insetRight, insetBottom, insetLeft) => ({
      index,
      current: {
        progress: current
      },
      next: next && {
        progress: next
      },
      closing: this.isClosing,
      swiping: this.isSwiping,
      inverted: this.inverted,
      layouts: {
        screen: layout
      },
      insets: {
        top: insetTop,
        right: insetRight,
        bottom: insetBottom,
        left: insetLeft
      }
    })));

    _defineProperty(this, "contentRef", /*#__PURE__*/React.createRef());
  }

  componentDidMount() {
    this.animate({
      closing: this.props.closing
    });
    this.isCurrentlyMounted = true;
  }

  componentDidUpdate(prevProps) {
    const {
      layout,
      gestureDirection,
      closing
    } = this.props;
    const {
      width,
      height
    } = layout;

    if (width !== prevProps.layout.width) {
      this.layout.width.setValue(width);
    }

    if (height !== prevProps.layout.height) {
      this.layout.height.setValue(height);
    }

    if (gestureDirection !== prevProps.gestureDirection) {
      this.inverted.setValue((0, _getInvertedMultiplier.default)(gestureDirection));
    }

    const toValue = this.getAnimateToValue(this.props);

    if (this.getAnimateToValue(prevProps) !== toValue || this.lastToValue !== toValue) {
      // We need to trigger the animation when route was closed
      // Thr route might have been closed by a `POP` action or by a gesture
      // When route was closed due to a gesture, the animation would've happened already
      // It's still important to trigger the animation so that `onClose` is called
      // If `onClose` is not called, cleanup step won't be performed for gestures
      this.animate({
        closing
      });
    }
  }

  componentWillUnmount() {
    this.isCurrentlyMounted = false;
    this.handleEndInteraction();
  }

  gestureActivationCriteria() {
    const {
      layout,
      gestureDirection,
      gestureResponseDistance
    } = this.props;
    const distance = gestureDirection === 'vertical' || gestureDirection === 'vertical-inverted' ? (gestureResponseDistance === null || gestureResponseDistance === void 0 ? void 0 : gestureResponseDistance.vertical) !== undefined ? gestureResponseDistance.vertical : GESTURE_RESPONSE_DISTANCE_VERTICAL : (gestureResponseDistance === null || gestureResponseDistance === void 0 ? void 0 : gestureResponseDistance.horizontal) !== undefined ? gestureResponseDistance.horizontal : GESTURE_RESPONSE_DISTANCE_HORIZONTAL;

    if (gestureDirection === 'vertical') {
      return {
        maxDeltaX: 15,
        minOffsetY: 5,
        hitSlop: {
          bottom: -layout.height + distance
        }
      };
    } else if (gestureDirection === 'vertical-inverted') {
      return {
        maxDeltaX: 15,
        minOffsetY: -5,
        hitSlop: {
          top: -layout.height + distance
        }
      };
    } else {
      const hitSlop = -layout.width + distance;
      const invertedMultiplier = (0, _getInvertedMultiplier.default)(gestureDirection);

      if (invertedMultiplier === 1) {
        return {
          minOffsetX: 5,
          maxDeltaY: 20,
          hitSlop: {
            right: hitSlop
          }
        };
      } else {
        return {
          minOffsetX: -5,
          maxDeltaY: 20,
          hitSlop: {
            left: hitSlop
          }
        };
      }
    }
  }

  render() {
    const _this$props = this.props,
          {
      styleInterpolator,
      index,
      current,
      gesture,
      next,
      layout,
      insets,
      overlay,
      overlayEnabled,
      shadowEnabled,
      gestureEnabled,
      gestureDirection,
      pageOverflowEnabled,
      children,
      containerStyle: customContainerStyle,
      contentStyle
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["styleInterpolator", "index", "current", "gesture", "next", "layout", "insets", "overlay", "overlayEnabled", "shadowEnabled", "gestureEnabled", "gestureDirection", "pageOverflowEnabled", "children", "containerStyle", "contentStyle"]);

    const interpolatedStyle = this.getInterpolatedStyle(styleInterpolator, index, current, next, layout, insets.top, insets.right, insets.bottom, insets.left);
    const animationContext = this.getCardAnimationContext(index, current, next, layout, insets.top, insets.right, insets.bottom, insets.left);
    const {
      containerStyle,
      cardStyle,
      overlayStyle,
      shadowStyle
    } = interpolatedStyle;
    const handleGestureEvent = gestureEnabled ? _reactNative.Animated.event([{
      nativeEvent: gestureDirection === 'vertical' || gestureDirection === 'vertical-inverted' ? {
        translationY: gesture
      } : {
        translationX: gesture
      }
    }], {
      useNativeDriver
    }) : undefined;

    const {
      backgroundColor
    } = _reactNative.StyleSheet.flatten(contentStyle || {});

    const isTransparent = typeof backgroundColor === 'string' ? (0, _color.default)(backgroundColor).alpha() === 0 : false;
    return /*#__PURE__*/React.createElement(_CardAnimationContext.default.Provider, {
      value: animationContext
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: {
        // This is a dummy style that doesn't actually change anything visually.
        // Animated needs the animated value to be used somewhere, otherwise things don't update properly.
        // If we disable animations and hide header, it could end up making the value unused.
        // So we have this dummy style that will always be used regardless of what else changed.
        opacity: current
      } // Make sure that this view isn't removed. If this view is removed, our style with animated value won't apply
      ,
      collapsable: false
    }), /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      pointerEvents: "box-none"
    }, rest), overlayEnabled ? /*#__PURE__*/React.createElement(_reactNative.View, {
      pointerEvents: "box-none",
      style: _reactNative.StyleSheet.absoluteFill
    }, overlay({
      style: overlayStyle
    })) : null, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.container, containerStyle, customContainerStyle],
      pointerEvents: "box-none"
    }, /*#__PURE__*/React.createElement(_GestureHandler.PanGestureHandler, _extends({
      enabled: layout.width !== 0 && gestureEnabled,
      onGestureEvent: handleGestureEvent,
      onHandlerStateChange: this.handleGestureStateChange
    }, this.gestureActivationCriteria()), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.container, cardStyle]
    }, shadowEnabled && shadowStyle && !isTransparent ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.shadow, gestureDirection === 'horizontal' ? [styles.shadowHorizontal, styles.shadowLeft] : gestureDirection === 'horizontal-inverted' ? [styles.shadowHorizontal, styles.shadowRight] : gestureDirection === 'vertical' ? [styles.shadowVertical, styles.shadowTop] : [styles.shadowVertical, styles.shadowBottom], {
        backgroundColor
      }, shadowStyle],
      pointerEvents: "none"
    }) : null, /*#__PURE__*/React.createElement(_CardSheet.default, {
      ref: this.contentRef,
      enabled: pageOverflowEnabled,
      layout: layout,
      style: contentStyle
    }, children))))));
  }

}

exports.default = Card;

_defineProperty(Card, "defaultProps", {
  overlayEnabled: _reactNative.Platform.OS !== 'ios',
  shadowEnabled: true,
  gestureEnabled: true,
  gestureVelocityImpact: GESTURE_VELOCITY_IMPACT,
  overlay: ({
    style
  }) => style ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "none",
    style: [styles.overlay, style]
  }) : null
});

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000'
  },
  shadow: {
    position: 'absolute',
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3
  },
  shadowHorizontal: {
    top: 0,
    bottom: 0,
    width: 3,
    shadowOffset: {
      width: -1,
      height: 1
    }
  },
  shadowLeft: {
    left: 0
  },
  shadowRight: {
    right: 0
  },
  shadowVertical: {
    left: 0,
    right: 0,
    height: 3,
    shadowOffset: {
      width: 1,
      height: -1
    }
  },
  shadowTop: {
    top: 0
  },
  shadowBottom: {
    bottom: 0
  }
});
//# sourceMappingURL=Card.js.map