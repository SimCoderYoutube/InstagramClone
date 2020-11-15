"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forUIKit = forUIKit;
exports.forFade = forFade;
exports.forSlideLeft = forSlideLeft;
exports.forSlideRight = forSlideRight;
exports.forSlideUp = forSlideUp;
exports.forNoAnimation = forNoAnimation;

var _reactNative = require("react-native");

const {
  add
} = _reactNative.Animated;
/**
 * Standard UIKit style animation for the header where the title fades into the back button label.
 */

function forUIKit({
  current,
  next,
  layouts
}) {
  const defaultOffset = 100;
  const leftSpacing = 27; // The title and back button title should cross-fade to each other
  // When screen is fully open, the title should be in center, and back title should be on left
  // When screen is closing, the previous title will animate to back title's position
  // And back title will animate to title's position
  // We achieve this by calculating the offsets needed to translate title to back title's position and vice-versa

  const leftLabelOffset = layouts.leftLabel ? (layouts.screen.width - layouts.leftLabel.width) / 2 - leftSpacing : defaultOffset;
  const titleLeftOffset = layouts.title ? (layouts.screen.width - layouts.title.width) / 2 - leftSpacing : defaultOffset; // When the current title is animating to right, it is centered in the right half of screen in middle of transition
  // The back title also animates in from this position

  const rightOffset = layouts.screen.width / 4;
  const progress = add(current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  }), next ? next.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  }) : 0);
  return {
    leftButtonStyle: {
      opacity: progress.interpolate({
        inputRange: [0.3, 1, 1.5],
        outputRange: [0, 1, 0]
      })
    },
    leftLabelStyle: {
      transform: [{
        translateX: progress.interpolate({
          inputRange: [0, 1, 2],
          outputRange: _reactNative.I18nManager.isRTL ? [-rightOffset, 0, leftLabelOffset] : [leftLabelOffset, 0, -rightOffset]
        })
      }]
    },
    rightButtonStyle: {
      opacity: progress.interpolate({
        inputRange: [0.3, 1, 1.5],
        outputRange: [0, 1, 0]
      })
    },
    titleStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.4, 1, 1.5],
        outputRange: [0, 0.1, 1, 0]
      }),
      transform: [{
        translateX: progress.interpolate({
          inputRange: [0.5, 1, 2],
          outputRange: _reactNative.I18nManager.isRTL ? [-titleLeftOffset, 0, rightOffset] : [rightOffset, 0, -titleLeftOffset]
        })
      }]
    },
    backgroundStyle: {
      transform: [{
        translateX: progress.interpolate({
          inputRange: [0, 1, 2],
          outputRange: _reactNative.I18nManager.isRTL ? [-layouts.screen.width, 0, layouts.screen.width] : [layouts.screen.width, 0, -layouts.screen.width]
        })
      }]
    }
  };
}
/**
 * Simple fade animation for the header elements.
 */


function forFade({
  current,
  next
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
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });
  return {
    leftButtonStyle: {
      opacity
    },
    rightButtonStyle: {
      opacity
    },
    titleStyle: {
      opacity
    },
    backgroundStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1, 1.9, 2],
        outputRange: [0, 1, 1, 0]
      })
    }
  };
}
/**
 * Simple translate animation to translate the header to left.
 */


function forSlideLeft({
  current,
  next,
  layouts: {
    screen
  }
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
  const translateX = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: _reactNative.I18nManager.isRTL ? [-screen.width, 0, screen.width] : [screen.width, 0, -screen.width]
  });
  const transform = [{
    translateX
  }];
  return {
    leftButtonStyle: {
      transform
    },
    rightButtonStyle: {
      transform
    },
    titleStyle: {
      transform
    },
    backgroundStyle: {
      transform
    }
  };
}
/**
 * Simple translate animation to translate the header to right.
 */


function forSlideRight({
  current,
  next,
  layouts: {
    screen
  }
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
  const translateX = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: _reactNative.I18nManager.isRTL ? [screen.width, 0, -screen.width] : [-screen.width, 0, screen.width]
  });
  const transform = [{
    translateX
  }];
  return {
    leftButtonStyle: {
      transform
    },
    rightButtonStyle: {
      transform
    },
    titleStyle: {
      transform
    },
    backgroundStyle: {
      transform
    }
  };
}
/**
 * Simple translate animation to translate the header to slide up.
 */


function forSlideUp({
  current,
  next,
  layouts: {
    header
  }
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
  const translateY = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [-header.height, 0, -header.height]
  });
  const transform = [{
    translateY
  }];
  return {
    leftButtonStyle: {
      transform
    },
    rightButtonStyle: {
      transform
    },
    titleStyle: {
      transform
    },
    backgroundStyle: {
      transform
    }
  };
}

function forNoAnimation() {
  return {};
}
//# sourceMappingURL=HeaderStyleInterpolators.js.map