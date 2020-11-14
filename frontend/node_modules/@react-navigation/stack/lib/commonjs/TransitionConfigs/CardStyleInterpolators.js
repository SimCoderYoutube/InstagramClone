"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forHorizontalIOS = forHorizontalIOS;
exports.forVerticalIOS = forVerticalIOS;
exports.forModalPresentationIOS = forModalPresentationIOS;
exports.forFadeFromBottomAndroid = forFadeFromBottomAndroid;
exports.forRevealFromBottomAndroid = forRevealFromBottomAndroid;
exports.forScaleFromCenterAndroid = forScaleFromCenterAndroid;
exports.forNoAnimation = forNoAnimation;

var _reactNative = require("react-native");

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

var _conditional = _interopRequireDefault(require("../utils/conditional"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  add,
  multiply
} = _reactNative.Animated;
/**
 * Standard iOS-style slide in from the right.
 */

function forHorizontalIOS({
  current,
  next,
  inverted,
  layouts: {
    screen
  }
}) {
  const translateFocused = multiply(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.width, 0],
    extrapolate: 'clamp'
  }), inverted);
  const translateUnfocused = next ? multiply(next.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screen.width * -0.3],
    extrapolate: 'clamp'
  }), inverted) : 0;
  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: 'clamp'
  });
  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp'
  });
  return {
    cardStyle: {
      transform: [// Translation for the animation of the current card
      {
        translateX: translateFocused
      }, // Translation for the animation of the card on top of this
      {
        translateX: translateUnfocused
      }]
    },
    overlayStyle: {
      opacity: overlayOpacity
    },
    shadowStyle: {
      shadowOpacity
    }
  };
}
/**
 * Standard iOS-style slide in from the bottom (used for modals).
 */


function forVerticalIOS({
  current,
  inverted,
  layouts: {
    screen
  }
}) {
  const translateY = multiply(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.height, 0],
    extrapolate: 'clamp'
  }), inverted);
  return {
    cardStyle: {
      transform: [// Translation for the animation of the current card
      {
        translateY
      }]
    }
  };
}
/**
 * Standard iOS-style modal animation in iOS 13.
 */


function forModalPresentationIOS({
  index,
  current,
  next,
  inverted,
  layouts: {
    screen
  },
  insets
}) {
  const isLandscape = screen.width > screen.height;
  const topOffset = isLandscape ? 0 : 10;
  const statusBarHeight = insets.top;
  const aspectRatio = screen.height / screen.width;
  const progress = add(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  }), next ? next.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  }) : 0);
  const translateY = multiply(progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [screen.height, index === 0 ? 0 : topOffset, (index === 0 ? statusBarHeight : 0) - topOffset * aspectRatio]
  }), inverted);
  const overlayOpacity = progress.interpolate({
    inputRange: [0, 1, 1.0001, 2],
    outputRange: [0, 0.3, 1, 1]
  });
  const scale = isLandscape ? 1 : progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1, screen.width ? 1 - topOffset * 2 / screen.width : 1]
  });
  const borderRadius = isLandscape ? 0 : index === 0 ? progress.interpolate({
    inputRange: [0, 1, 1.0001, 2],
    outputRange: [0, 0, (0, _reactNativeIphoneXHelper.isIphoneX)() ? 38 : 0, 10]
  }) : 10;
  return {
    cardStyle: {
      overflow: 'hidden',
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      marginTop: index === 0 ? 0 : statusBarHeight,
      marginBottom: index === 0 ? 0 : topOffset,
      transform: [{
        translateY
      }, {
        scale
      }]
    },
    overlayStyle: {
      opacity: overlayOpacity
    }
  };
}
/**
 * Standard Android-style fade in from the bottom for Android Oreo.
 */


function forFadeFromBottomAndroid({
  current,
  inverted,
  layouts: {
    screen
  },
  closing
}) {
  const translateY = multiply(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.height * 0.08, 0],
    extrapolate: 'clamp'
  }), inverted);
  const opacity = (0, _conditional.default)(closing, current.progress, current.progress.interpolate({
    inputRange: [0, 0.5, 0.9, 1],
    outputRange: [0, 0.25, 0.7, 1]
  }));
  return {
    cardStyle: {
      opacity,
      transform: [{
        translateY
      }]
    }
  };
}
/**
 * Standard Android-style reveal from the bottom for Android Pie.
 */


function forRevealFromBottomAndroid({
  current,
  next,
  inverted,
  layouts: {
    screen
  }
}) {
  const containerTranslateY = multiply(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.height, 0],
    extrapolate: 'clamp'
  }), inverted);
  const cardTranslateYFocused = multiply(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.height * (95.9 / 100) * -1, 0],
    extrapolate: 'clamp'
  }), inverted);
  const cardTranslateYUnfocused = next ? multiply(next.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screen.height * (2 / 100) * -1],
    extrapolate: 'clamp'
  }), inverted) : 0;
  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 0.36, 1],
    outputRange: [0, 0.1, 0.1],
    extrapolate: 'clamp'
  });
  return {
    containerStyle: {
      overflow: 'hidden',
      transform: [{
        translateY: containerTranslateY
      }]
    },
    cardStyle: {
      transform: [{
        translateY: cardTranslateYFocused
      }, {
        translateY: cardTranslateYUnfocused
      }]
    },
    overlayStyle: {
      opacity: overlayOpacity
    }
  };
}
/**
 * Standard Android-style reveal from the bottom for Android Q.
 */


function forScaleFromCenterAndroid({
  current,
  next,
  closing
}) {
  const progress = add(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  }), next ? next.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  }) : 0);
  const opacity = progress.interpolate({
    inputRange: [0, 0.8, 1, 1.2, 2],
    outputRange: [0, 0.5, 1, 0.33, 0]
  });
  const scale = (0, _conditional.default)(closing, current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 1],
    extrapolate: 'clamp'
  }), progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0.85, 1, 1.1]
  }));
  return {
    containerStyle: {
      opacity,
      transform: [{
        scale
      }]
    }
  };
}

function forNoAnimation() {
  return {};
}
//# sourceMappingURL=CardStyleInterpolators.js.map