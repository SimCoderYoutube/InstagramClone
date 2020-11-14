import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import AnimatedText from '../../Typography/AnimatedText';

const LabelBackground = ({
  parentState,
  labelProps: {
    placeholderStyle,
    baseLabelTranslateX,
    topPosition,
    hasActiveOutline,
    label,
    backgroundColor
  },
  labelStyle
}) => {
  const hasFocus = hasActiveOutline || parentState.value;
  const opacity = parentState.labeled.interpolate({
    inputRange: [0, 1],
    outputRange: [hasFocus ? 1 : 0, 0]
  });
  const labelTranslationX = {
    transform: [{
      translateX: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [-baseLabelTranslateX, 0]
      })
    }]
  };
  return label ? [/*#__PURE__*/React.createElement(Animated.View, {
    key: "labelBackground-view",
    pointerEvents: "none",
    style: [StyleSheet.absoluteFill, styles.view, {
      backgroundColor,
      opacity
    }, labelTranslationX]
  }), /*#__PURE__*/React.createElement(AnimatedText, {
    key: "labelBackground-text",
    style: [placeholderStyle, labelStyle, styles.outlinedLabel, {
      top: topPosition + 1,
      backgroundColor,
      opacity,
      transform: [...labelStyle.transform, {
        scaleY: parentState.labeled.interpolate({
          inputRange: [0, 1],
          outputRange: [0.2, 1]
        })
      }]
    }],
    numberOfLines: 1
  }, label)] : null;
};

export default LabelBackground;
const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 8,
    height: 2
  },
  outlinedLabel: {
    position: 'absolute',
    left: 18,
    paddingHorizontal: 0,
    color: 'transparent'
  }
});
//# sourceMappingURL=LabelBackground.js.map