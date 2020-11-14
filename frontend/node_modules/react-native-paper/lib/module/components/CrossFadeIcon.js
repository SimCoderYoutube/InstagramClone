function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Icon, { isValidIcon, isEqualIcon } from './Icon';
import { withTheme } from '../core/theming';

class CrossFadeIcon extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentIcon: this.props.source,
      previousIcon: null,
      fade: new Animated.Value(1)
    });
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.currentIcon === nextProps.source) {
      return null;
    }

    return {
      currentIcon: nextProps.source,
      previousIcon: nextState.currentIcon
    };
  }

  componentDidUpdate(_, prevState) {
    const {
      previousIcon
    } = this.state;
    const {
      theme: {
        animation: {
          scale
        }
      }
    } = this.props;

    if (!isValidIcon(previousIcon) || isEqualIcon(previousIcon, prevState.previousIcon)) {
      return;
    }

    this.state.fade.setValue(1);
    Animated.timing(this.state.fade, {
      duration: scale * 200,
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  render() {
    const {
      color,
      size
    } = this.props;
    const opacityPrev = this.state.fade;
    const opacityNext = this.state.previousIcon ? this.state.fade.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    }) : 1;
    const rotatePrev = this.state.fade.interpolate({
      inputRange: [0, 1],
      outputRange: ['-90deg', '0deg']
    });
    const rotateNext = this.state.previousIcon ? this.state.fade.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-180deg']
    }) : '0deg';
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.content, {
        height: size,
        width: size
      }]
    }, this.state.previousIcon ? /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.icon, {
        opacity: opacityPrev,
        transform: [{
          rotate: rotatePrev
        }]
      }]
    }, /*#__PURE__*/React.createElement(Icon, {
      source: this.state.previousIcon,
      size: size,
      color: color
    })) : null, /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.icon, {
        opacity: opacityNext,
        transform: [{
          rotate: rotateNext
        }]
      }]
    }, /*#__PURE__*/React.createElement(Icon, {
      source: this.state.currentIcon,
      size: size,
      color: color
    })));
  }

}

export default withTheme(CrossFadeIcon);
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
//# sourceMappingURL=CrossFadeIcon.js.map