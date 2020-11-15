"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Icon = _interopRequireWildcard(require("./Icon"));

var _theming = require("../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CrossFadeIcon extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentIcon: this.props.source,
      previousIcon: null,
      fade: new _reactNative.Animated.Value(1)
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

    if (!(0, _Icon.isValidIcon)(previousIcon) || (0, _Icon.isEqualIcon)(previousIcon, prevState.previousIcon)) {
      return;
    }

    this.state.fade.setValue(1);

    _reactNative.Animated.timing(this.state.fade, {
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
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.content, {
        height: size,
        width: size
      }]
    }, this.state.previousIcon ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.icon, {
        opacity: opacityPrev,
        transform: [{
          rotate: rotatePrev
        }]
      }]
    }, /*#__PURE__*/React.createElement(_Icon.default, {
      source: this.state.previousIcon,
      size: size,
      color: color
    })) : null, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.icon, {
        opacity: opacityNext,
        transform: [{
          rotate: rotateNext
        }]
      }]
    }, /*#__PURE__*/React.createElement(_Icon.default, {
      source: this.state.currentIcon,
      size: size,
      color: color
    })));
  }

}

var _default = (0, _theming.withTheme)(CrossFadeIcon);

exports.default = _default;

const styles = _reactNative.StyleSheet.create({
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