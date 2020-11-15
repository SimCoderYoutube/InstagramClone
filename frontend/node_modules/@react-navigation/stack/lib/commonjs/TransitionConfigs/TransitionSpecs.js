"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScaleFromCenterAndroidSpec = exports.RevealFromBottomAndroidSpec = exports.FadeOutToBottomAndroidSpec = exports.FadeInFromBottomAndroidSpec = exports.TransitionIOSSpec = void 0;

var _reactNative = require("react-native");

/**
 * Exact values from UINavigationController's animation configuration.
 */
const TransitionIOSSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10
  }
};
/**
 * Configuration for activity open animation from Android Nougat.
 * See http://aosp.opersys.com/xref/android-7.1.2_r37/xref/frameworks/base/core/res/res/anim/activity_open_enter.xml
 */

exports.TransitionIOSSpec = TransitionIOSSpec;
const FadeInFromBottomAndroidSpec = {
  animation: 'timing',
  config: {
    duration: 350,
    easing: _reactNative.Easing.out(_reactNative.Easing.poly(5))
  }
};
/**
 * Configuration for activity close animation from Android Nougat.
 * See http://aosp.opersys.com/xref/android-7.1.2_r37/xref/frameworks/base/core/res/res/anim/activity_close_exit.xml
 */

exports.FadeInFromBottomAndroidSpec = FadeInFromBottomAndroidSpec;
const FadeOutToBottomAndroidSpec = {
  animation: 'timing',
  config: {
    duration: 150,
    easing: _reactNative.Easing.in(_reactNative.Easing.linear)
  }
};
/**
 * Approximate configuration for activity open animation from Android Pie.
 * See http://aosp.opersys.com/xref/android-9.0.0_r47/xref/frameworks/base/core/res/res/anim/activity_open_enter.xml
 */

exports.FadeOutToBottomAndroidSpec = FadeOutToBottomAndroidSpec;
const RevealFromBottomAndroidSpec = {
  animation: 'timing',
  config: {
    duration: 425,
    // This is super rough approximation of the path used for the curve by android
    // See http://aosp.opersys.com/xref/android-9.0.0_r47/xref/frameworks/base/core/res/res/interpolator/fast_out_extra_slow_in.xml
    easing: _reactNative.Easing.bezier(0.35, 0.45, 0, 1)
  }
};
/**
 * Approximate configuration for activity open animation from Android Q.
 * See http://aosp.opersys.com/xref/android-10.0.0_r2/xref/frameworks/base/core/res/res/anim/activity_open_enter.xml
 */

exports.RevealFromBottomAndroidSpec = RevealFromBottomAndroidSpec;
const ScaleFromCenterAndroidSpec = {
  animation: 'timing',
  config: {
    duration: 400,
    // This is super rough approximation of the path used for the curve by android
    // See http://aosp.opersys.com/xref/android-10.0.0_r2/xref/frameworks/base/core/res/res/interpolator/fast_out_extra_slow_in.xml
    easing: _reactNative.Easing.bezier(0.35, 0.45, 0, 1)
  }
};
exports.ScaleFromCenterAndroidSpec = ScaleFromCenterAndroidSpec;
//# sourceMappingURL=TransitionSpecs.js.map