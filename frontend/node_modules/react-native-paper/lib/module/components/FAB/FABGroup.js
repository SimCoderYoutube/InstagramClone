function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet, Animated, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import FAB from './FAB';
import Text from '../Typography/Text';
import Card from '../Card/Card';
import { withTheme } from '../../core/theming';

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
      backdrop: new Animated.Value(0),
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
      animations: nextProps.actions.map((_, i) => prevState.animations[i] || new Animated.Value(nextProps.open ? 1 : 0))
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
      Animated.parallel([Animated.timing(this.state.backdrop, {
        toValue: 1,
        duration: 250 * scale,
        useNativeDriver: true
      }), Animated.stagger(50 * scale, this.state.animations.map(animation => Animated.timing(animation, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      })).reverse())]).start();
    } else {
      Animated.parallel([Animated.timing(this.state.backdrop, {
        toValue: 0,
        duration: 200 * scale,
        useNativeDriver: true
      }), ...this.state.animations.map(animation => Animated.timing(animation, {
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
    const labelColor = theme.dark ? colors.text : color(colors.text).fade(0.54).rgb().string();
    const backdropOpacity = open ? this.state.backdrop.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    }) : this.state.backdrop;
    const opacities = this.state.animations;
    const scales = opacities.map(opacity => open ? opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1]
    }) : 1);
    return /*#__PURE__*/React.createElement(View, {
      pointerEvents: "box-none",
      style: [styles.container, style]
    }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
      onPress: this.close
    }, /*#__PURE__*/React.createElement(Animated.View, {
      pointerEvents: open ? 'auto' : 'none',
      style: [styles.backdrop, {
        opacity: backdropOpacity,
        backgroundColor: colors.backdrop
      }]
    })), /*#__PURE__*/React.createElement(SafeAreaView, {
      pointerEvents: "box-none",
      style: styles.safeArea
    }, /*#__PURE__*/React.createElement(View, {
      pointerEvents: open ? 'box-none' : 'none'
    }, actions.map((it, i) => /*#__PURE__*/React.createElement(View, {
      key: i // eslint-disable-line react/no-array-index-key
      ,
      style: styles.item,
      pointerEvents: open ? 'box-none' : 'none'
    }, it.label && /*#__PURE__*/React.createElement(Card, {
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
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: labelColor
      }
    }, it.label)), /*#__PURE__*/React.createElement(FAB, {
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
    })))), /*#__PURE__*/React.createElement(FAB, {
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

_defineProperty(FABGroup, "displayName", 'FAB.Group');

export default withTheme(FABGroup); // @component-docs ignore-next-line

export { FABGroup };
const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'flex-end'
  },
  container: _objectSpread(_objectSpread({}, StyleSheet.absoluteFillObject), {}, {
    justifyContent: 'flex-end'
  }),
  fab: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 0
  },
  backdrop: _objectSpread({}, StyleSheet.absoluteFillObject),
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