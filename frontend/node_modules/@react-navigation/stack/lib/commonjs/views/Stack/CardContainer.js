"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _Card = _interopRequireDefault(require("./Card"));

var _HeaderHeightContext = _interopRequireDefault(require("../../utils/HeaderHeightContext"));

var _HeaderShownContext = _interopRequireDefault(require("../../utils/HeaderShownContext"));

var _PreviousSceneContext = _interopRequireDefault(require("../../utils/PreviousSceneContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const EPSILON = 0.1;

function CardContainer({
  active,
  cardOverlay,
  cardOverlayEnabled,
  cardShadowEnabled,
  cardStyle,
  cardStyleInterpolator,
  closing,
  gesture,
  focused,
  gestureDirection,
  gestureEnabled,
  gestureResponseDistance,
  gestureVelocityImpact,
  getPreviousScene,
  getFocusedRoute,
  mode,
  headerMode,
  headerShown,
  headerStyleInterpolator,
  hasAbsoluteHeader,
  headerHeight,
  onHeaderHeightChange,
  index,
  layout,
  onCloseRoute,
  onOpenRoute,
  onPageChangeCancel,
  onPageChangeConfirm,
  onPageChangeStart,
  onGestureCancel,
  onGestureEnd,
  onGestureStart,
  onTransitionEnd,
  onTransitionStart,
  renderHeader,
  renderScene,
  safeAreaInsetBottom,
  safeAreaInsetLeft,
  safeAreaInsetRight,
  safeAreaInsetTop,
  scene,
  transitionSpec
}) {
  React.useEffect(() => {
    onPageChangeConfirm === null || onPageChangeConfirm === void 0 ? void 0 : onPageChangeConfirm();
  }, [active, onPageChangeConfirm]);

  const handleOpen = () => {
    onTransitionEnd === null || onTransitionEnd === void 0 ? void 0 : onTransitionEnd({
      route: scene.route
    }, false);
    onOpenRoute({
      route: scene.route
    });
  };

  const handleClose = () => {
    onTransitionEnd === null || onTransitionEnd === void 0 ? void 0 : onTransitionEnd({
      route: scene.route
    }, true);
    onCloseRoute({
      route: scene.route
    });
  };

  const handleGestureBegin = () => {
    onPageChangeStart === null || onPageChangeStart === void 0 ? void 0 : onPageChangeStart();
    onGestureStart === null || onGestureStart === void 0 ? void 0 : onGestureStart({
      route: scene.route
    });
  };

  const handleGestureCanceled = () => {
    onPageChangeCancel === null || onPageChangeCancel === void 0 ? void 0 : onPageChangeCancel();
    onGestureCancel === null || onGestureCancel === void 0 ? void 0 : onGestureCancel({
      route: scene.route
    });
  };

  const handleGestureEnd = () => {
    onGestureEnd === null || onGestureEnd === void 0 ? void 0 : onGestureEnd({
      route: scene.route
    });
  };

  const handleTransitionStart = ({
    closing
  }) => {
    if (active && closing) {
      onPageChangeConfirm === null || onPageChangeConfirm === void 0 ? void 0 : onPageChangeConfirm();
    } else {
      onPageChangeCancel === null || onPageChangeCancel === void 0 ? void 0 : onPageChangeCancel();
    }

    onTransitionStart === null || onTransitionStart === void 0 ? void 0 : onTransitionStart({
      route: scene.route
    }, closing);
  };

  const insets = {
    top: safeAreaInsetTop,
    right: safeAreaInsetRight,
    bottom: safeAreaInsetBottom,
    left: safeAreaInsetLeft
  };
  const {
    colors
  } = (0, _native.useTheme)();
  const [pointerEvents, setPointerEvents] = React.useState('box-none');
  React.useEffect(() => {
    var _scene$progress$next, _scene$progress$next$;

    // @ts-expect-error: AnimatedInterpolation optionally has addListener, but the type defs don't think so
    const listener = (_scene$progress$next = scene.progress.next) === null || _scene$progress$next === void 0 ? void 0 : (_scene$progress$next$ = _scene$progress$next.addListener) === null || _scene$progress$next$ === void 0 ? void 0 : _scene$progress$next$.call(_scene$progress$next, ({
      value
    }) => {
      setPointerEvents(value <= EPSILON ? 'box-none' : 'none');
    });
    return () => {
      if (listener) {
        var _scene$progress$next2, _scene$progress$next3;

        // @ts-expect-error: AnimatedInterpolation optionally has removedListener, but the type defs don't think so
        (_scene$progress$next2 = scene.progress.next) === null || _scene$progress$next2 === void 0 ? void 0 : (_scene$progress$next3 = _scene$progress$next2.removeListener) === null || _scene$progress$next3 === void 0 ? void 0 : _scene$progress$next3.call(_scene$progress$next2, listener);
      }
    };
  }, [pointerEvents, scene.progress.next]);
  const isParentHeaderShown = React.useContext(_HeaderShownContext.default);
  const isCurrentHeaderShown = headerMode !== 'none' && headerShown !== false;
  const previousScene = getPreviousScene({
    route: scene.route
  });
  return /*#__PURE__*/React.createElement(_Card.default, {
    index: index,
    gestureDirection: gestureDirection,
    layout: layout,
    insets: insets,
    gesture: gesture,
    current: scene.progress.current,
    next: scene.progress.next,
    closing: closing,
    onOpen: handleOpen,
    onClose: handleClose,
    overlay: cardOverlay,
    overlayEnabled: cardOverlayEnabled,
    shadowEnabled: cardShadowEnabled,
    onTransitionStart: handleTransitionStart,
    onGestureBegin: handleGestureBegin,
    onGestureCanceled: handleGestureCanceled,
    onGestureEnd: handleGestureEnd,
    gestureEnabled: gestureEnabled,
    gestureResponseDistance: gestureResponseDistance,
    gestureVelocityImpact: gestureVelocityImpact,
    transitionSpec: transitionSpec,
    styleInterpolator: cardStyleInterpolator,
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    pointerEvents: active ? 'box-none' : pointerEvents,
    pageOverflowEnabled: headerMode === 'screen' && mode === 'card',
    containerStyle: hasAbsoluteHeader ? {
      marginTop: headerHeight
    } : null,
    contentStyle: [{
      backgroundColor: colors.background
    }, cardStyle],
    style: _reactNative.StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.scene
  }, /*#__PURE__*/React.createElement(_PreviousSceneContext.default.Provider, {
    value: previousScene
  }, /*#__PURE__*/React.createElement(_HeaderShownContext.default.Provider, {
    value: isParentHeaderShown || isCurrentHeaderShown
  }, /*#__PURE__*/React.createElement(_HeaderHeightContext.default.Provider, {
    value: headerHeight
  }, renderScene({
    route: scene.route
  }))))), headerMode === 'screen' ? renderHeader({
    mode: 'screen',
    layout,
    insets,
    scenes: [previousScene, scene],
    getPreviousScene,
    getFocusedRoute,
    gestureDirection,
    styleInterpolator: headerStyleInterpolator,
    onContentHeightChange: onHeaderHeightChange
  }) : null));
}

var _default = /*#__PURE__*/React.memo(CardContainer);

exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  scene: {
    flex: 1
  }
});
//# sourceMappingURL=CardContainer.js.map