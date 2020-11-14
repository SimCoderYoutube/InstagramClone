"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FABGroup = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _FAB = _interopRequireDefault(require("./FAB"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _Card = _interopRequireDefault(require("../Card/Card"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A component to display a stack of FABs with related actions in a speed dial.
 * To render the group above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-group.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { FAB, Portal, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [state, setState] = React.useState({ open: false });
 *
 *   const onStateChange = ({ open }) => setState({ open });
 *
 *   const { open } = state;
 *
 *   return (
 *     <Provider>
 *       <Portal>
 *         <FAB.Group
 *           open={open}
 *           icon={open ? 'calendar-today' : 'plus'}
 *           actions={[
 *             { icon: 'plus', onPress: () => console.log('Pressed add') },
 *             {
 *               icon: 'star',
 *               label: 'Star',
 *               onPress: () => console.log('Pressed star'),
 *             },
 *             {
 *               icon: 'email',
 *               label: 'Email',
 *               onPress: () => console.log('Pressed email'),
 *             },
 *             {
 *               icon: 'bell',
 *               label: 'Remind',
 *               onPress: () => console.log('Pressed notifications'),
 *             },
 *           ]}
 *           onStateChange={onStateChange}
 *           onPress={() => {
 *             if (open) {
 *               // do something if the speed dial is open
 *             }
 *           }}
 *         />
 *       </Portal>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
class FABGroup extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      backdrop: new _reactNative.Animated.Value(0),
      animations: []
    });

    _defineProperty(this, "close", () => this.props.onStateChange({
      open: false
    }));

    _defineProperty(this, "toggle", () => this.props.onStateChange({
      open: !this.props.open
    }));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      animations: nextProps.actions.map((_, i) => prevState.animations[i] || new _reactNative.Animated.Value(nextProps.open ? 1 : 0))
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.open === prevProps.open) {
      return;
    }

    const {
      scale
    } = this.props.theme.animation;

    if (this.props.open) {
      _reactNative.Animated.parallel([_reactNative.Animated.timing(this.state.backdrop, {
        toValue: 1,
        duration: 250 * scale,
        useNativeDriver: true
      }), _reactNative.Animated.stagger(50 * scale, this.state.animations.map(animation => _reactNative.Animated.timing(animation, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      })).reverse())]).start();
    } else {
      _reactNative.Animated.parallel([_reactNative.Animated.timing(this.state.backdrop, {
        toValue: 0,
        duration: 200 * scale,
        useNativeDriver: true
      }), ...this.state.animations.map(animation => _reactNative.Animated.timing(animation, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }))]).start();
    }
  }

  render() {
    const {
      actions,
      icon,
      open,
      onPress: _onPress,
      accessibilityLabel,
      theme,
      style,
      fabStyle,
      visible,
      testID
    } = this.props;
    const {
      colors
    } = theme;
    const labelColor = theme.dark ? colors.text : (0, _color.default)(colors.text).fade(0.54).rgb().string();
    const backdropOpacity = open ? this.state.backdrop.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    }) : this.state.backdrop;
    const opacities = this.state.animations;
    const scales = opacities.map(opacity => open ? opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1]
    }) : 1);
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      pointerEvents: "box-none",
      style: [styles.container, style]
    }, /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
      onPress: this.close
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      pointerEvents: open ? 'auto' : 'none',
      style: [styles.backdrop, {
        opacity: backdropOpacity,
        backgroundColor: colors.backdrop
      }]
    })), /*#__PURE__*/React.createElement(_reactNative.SafeAreaView, {
      pointerEvents: "box-none",
      style: styles.safeArea
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      pointerEvents: open ? 'box-none' : 'none'
    }, actions.map((it, i) => /*#__PURE__*/React.createElement(_reactNative.View, {
      key: i // eslint-disable-line react/no-array-index-key
      ,
      style: styles.item,
      pointerEvents: open ? 'box-none' : 'none'
    }, it.label && /*#__PURE__*/React.createElement(_Card.default, {
      style: [styles.label, {
        transform: [{
          scale: scales[i]
        }],
        opacity: opacities[i]
      }],
      onPress: () => {
        it.onPress();
        this.close();
      },
      accessibilityLabel: it.accessibilityLabel !== 'undefined' ? it.accessibilityLabel : it.label,
      accessibilityTraits: "button",
      accessibilityComponentType: "button",
      accessibilityRole: "button"
    }, /*#__PURE__*/React.createElement(_Text.default, {
      style: {
        color: labelColor
      }
    }, it.label)), /*#__PURE__*/React.createElement(_FAB.default, {
      small: true,
      icon: it.icon,
      color: it.color,
      style: [{
        transform: [{
          scale: scales[i]
        }],
        opacity: opacities[i],
        backgroundColor: theme.colors.surface
      }, it.style],
      onPress: () => {
        it.onPress();
        this.close();
      },
      accessibilityLabel: typeof it.accessibilityLabel !== 'undefined' ? it.accessibilityLabel : it.label,
      accessibilityTraits: "button",
      accessibilityComponentType: "button",
      accessibilityRole: "button",
      testID: it.testID,
      visible: open
    })))), /*#__PURE__*/React.createElement(_FAB.default, {
      onPress: () => {
        _onPress === null || _onPress === void 0 ? void 0 : _onPress();
        this.toggle();
      },
      icon: icon,
      color: this.props.color,
      accessibilityLabel: accessibilityLabel,
      accessibilityTraits: "button",
      accessibilityComponentType: "button",
      accessibilityRole: "button",
      style: [styles.fab, fabStyle],
      visible: visible,
      testID: testID
    })));
  }

}

exports.FABGroup = FABGroup;

_defineProperty(FABGroup, "displayName", 'FAB.Group');

var _default = (0, _theming.withTheme)(FABGroup); // @component-docs ignore-next-line


exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  safeArea: {
    alignItems: 'flex-end'
  },
  container: _objectSpread(_objectSpread({}, _reactNative.StyleSheet.absoluteFillObject), {}, {
    justifyContent: 'flex-end'
  }),
  fab: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 0
  },
  backdrop: _objectSpread({}, _reactNative.StyleSheet.absoluteFillObject),
  label: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2
  },
  item: {
    marginHorizontal: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
//# sourceMappingURL=FABGroup.js.map