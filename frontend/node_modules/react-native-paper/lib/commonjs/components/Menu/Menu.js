"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../core/theming");

var _Portal = _interopRequireDefault(require("../Portal/Portal"));

var _Surface = _interopRequireDefault(require("../Surface"));

var _MenuItem2 = _interopRequireDefault(require("./MenuItem"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Minimum padding between the edge of the screen and the menu
const SCREEN_INDENT = 8; // From https://material.io/design/motion/speed.html#duration

const ANIMATION_DURATION = 250; // From the 'Standard easing' section of https://material.io/design/motion/speed.html#easing

const EASING = _reactNative.Easing.bezier(0.4, 0, 0.2, 1);
/**
 * Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/menu-1.png" />
 *   <img class="medium" src="screenshots/menu-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Menu, Divider, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const openMenu = () => setVisible(true);
 *
 *   const closeMenu = () => setVisible(false);
 *
 *   return (
 *     <Provider>
 *       <View
 *         style={{
 *           paddingTop: 50,
 *           flexDirection: 'row',
 *           justifyContent: 'center',
 *         }}>
 *         <Menu
 *           visible={visible}
 *           onDismiss={closeMenu}
 *           anchor={<Button onPress={openMenu}>Show menu</Button>}>
 *           <Menu.Item onPress={() => {}} title="Item 1" />
 *           <Menu.Item onPress={() => {}} title="Item 2" />
 *           <Divider />
 *           <Menu.Item onPress={() => {}} title="Item 3" />
 *         </Menu>
 *       </View>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */


class Menu extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      rendered: this.props.visible,
      top: 0,
      left: 0,
      menuLayout: {
        width: 0,
        height: 0
      },
      anchorLayout: {
        width: 0,
        height: 0
      },
      opacityAnimation: new _reactNative.Animated.Value(0),
      scaleAnimation: new _reactNative.Animated.ValueXY({
        x: 0,
        y: 0
      })
    });

    _defineProperty(this, "anchor", null);

    _defineProperty(this, "menu", null);

    _defineProperty(this, "isAnchorCoord", () => ! /*#__PURE__*/React.isValidElement(this.props.anchor));

    _defineProperty(this, "measureMenuLayout", () => new Promise(resolve => {
      if (this.menu) {
        this.menu.measureInWindow((x, y, width, height) => {
          resolve({
            x,
            y,
            width,
            height
          });
        });
      }
    }));

    _defineProperty(this, "measureAnchorLayout", () => new Promise(resolve => {
      const {
        anchor
      } = this.props;

      if (this.isAnchorCoord()) {
        // @ts-ignore
        resolve({
          x: anchor.x,
          y: anchor.y,
          width: 0,
          height: 0
        });
        return;
      }

      if (this.anchor) {
        this.anchor.measureInWindow((x, y, width, height) => {
          resolve({
            x,
            y,
            width,
            height
          });
        });
      }
    }));

    _defineProperty(this, "updateVisibility", async () => {
      // Menu is rendered in Portal, which updates items asynchronously
      // We need to do the same here so that the ref is up-to-date
      await Promise.resolve();

      if (this.props.visible) {
        this.show();
      } else {
        this.hide();
      }
    });

    _defineProperty(this, "isBrowser", () => _reactNative.Platform.OS === 'web' && 'document' in global);

    _defineProperty(this, "focusFirstDOMNode", el => {
      if (el && this.isBrowser()) {
        // When in the browser, we want to focus the first focusable item on toggle
        // For example, when menu is shown, focus the first item in the menu
        // And when menu is dismissed, send focus back to the button to resume tabbing
        const node = (0, _reactNative.findNodeHandle)(el);
        const focusableNode = node.querySelector( // This is a rough list of selectors that can be focused
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusableNode === null || focusableNode === void 0 ? void 0 : focusableNode.focus();
      }
    });

    _defineProperty(this, "handleDismiss", () => {
      if (this.props.visible) {
        this.props.onDismiss();
      }

      return true;
    });

    _defineProperty(this, "handleKeypress", e => {
      if (e.key === 'Escape') {
        this.props.onDismiss();
      }
    });

    _defineProperty(this, "attachListeners", () => {
      _reactNative.BackHandler.addEventListener('hardwareBackPress', this.handleDismiss);

      _reactNative.Dimensions.addEventListener('change', this.handleDismiss);

      this.isBrowser() && document.addEventListener('keyup', this.handleKeypress);
    });

    _defineProperty(this, "removeListeners", () => {
      _reactNative.BackHandler.removeEventListener('hardwareBackPress', this.handleDismiss);

      _reactNative.Dimensions.removeEventListener('change', this.handleDismiss);

      this.isBrowser() && document.removeEventListener('keyup', this.handleKeypress);
    });

    _defineProperty(this, "show", async () => {
      const windowLayout = _reactNative.Dimensions.get('window');

      const [menuLayout, anchorLayout] = await Promise.all([this.measureMenuLayout(), this.measureAnchorLayout()]); // When visible is true for first render
      // native views can be still not rendered and
      // measureMenuLayout/measureAnchorLayout functions
      // return wrong values e.g { x:0, y: 0, width: 0, height: 0 }
      // so we have to wait until views are ready
      // and rerun this function to show menu

      if (!windowLayout.width || !windowLayout.height || !menuLayout.width || !menuLayout.height || !anchorLayout.width && !this.isAnchorCoord() || !anchorLayout.height && !this.isAnchorCoord()) {
        requestAnimationFrame(this.show);
        return;
      }

      this.setState(() => ({
        left: anchorLayout.x,
        top: anchorLayout.y,
        anchorLayout: {
          height: anchorLayout.height,
          width: anchorLayout.width
        },
        menuLayout: {
          width: menuLayout.width,
          height: menuLayout.height
        }
      }), () => {
        this.attachListeners();
        const {
          animation
        } = this.props.theme;

        _reactNative.Animated.parallel([_reactNative.Animated.timing(this.state.scaleAnimation, {
          toValue: {
            x: menuLayout.width,
            y: menuLayout.height
          },
          duration: ANIMATION_DURATION * animation.scale,
          easing: EASING,
          useNativeDriver: true
        }), _reactNative.Animated.timing(this.state.opacityAnimation, {
          toValue: 1,
          duration: ANIMATION_DURATION * animation.scale,
          easing: EASING,
          useNativeDriver: true
        })]).start(({
          finished
        }) => {
          if (finished) {
            this.focusFirstDOMNode(this.menu);
          }
        });
      });
    });

    _defineProperty(this, "hide", () => {
      this.removeListeners();
      const {
        animation
      } = this.props.theme;

      _reactNative.Animated.timing(this.state.opacityAnimation, {
        toValue: 0,
        duration: ANIMATION_DURATION * animation.scale,
        easing: EASING,
        useNativeDriver: true
      }).start(({
        finished
      }) => {
        if (finished) {
          this.setState({
            menuLayout: {
              width: 0,
              height: 0
            },
            rendered: false
          });
          this.state.scaleAnimation.setValue({
            x: 0,
            y: 0
          });
          this.focusFirstDOMNode(this.anchor);
        }
      });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.visible && !prevState.rendered) {
      return {
        rendered: true
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      this.updateVisibility();
    }
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  render() {
    const {
      visible,
      anchor,
      contentStyle,
      style,
      children,
      theme,
      statusBarHeight,
      onDismiss,
      overlayAccessibilityLabel
    } = this.props;
    const {
      rendered,
      menuLayout,
      anchorLayout,
      opacityAnimation,
      scaleAnimation
    } = this.state;
    let {
      left,
      top
    } = this.state; // I don't know why but on Android measure function is wrong by 24

    const additionalVerticalValue = _reactNative.Platform.select({
      android: statusBarHeight,
      default: 0
    });

    const scaleTransforms = [{
      scaleX: scaleAnimation.x.interpolate({
        inputRange: [0, menuLayout.width],
        outputRange: [0, 1]
      })
    }, {
      scaleY: scaleAnimation.y.interpolate({
        inputRange: [0, menuLayout.height],
        outputRange: [0, 1]
      })
    }];

    const windowLayout = _reactNative.Dimensions.get('window'); // We need to translate menu while animating scale to imitate transform origin for scale animation


    const positionTransforms = []; // Check if menu fits horizontally and if not align it to right.

    if (left <= windowLayout.width - menuLayout.width - SCREEN_INDENT) {
      positionTransforms.push({
        translateX: scaleAnimation.x.interpolate({
          inputRange: [0, menuLayout.width],
          outputRange: [-(menuLayout.width / 2), 0]
        })
      }); // Check if menu position has enough space from left side

      if (left < SCREEN_INDENT) {
        left = SCREEN_INDENT;
      }
    } else {
      positionTransforms.push({
        translateX: scaleAnimation.x.interpolate({
          inputRange: [0, menuLayout.width],
          outputRange: [menuLayout.width / 2, 0]
        })
      });
      left += anchorLayout.width - menuLayout.width;
      const right = left + menuLayout.width; // Check if menu position has enough space from right side

      if (right > windowLayout.width - SCREEN_INDENT) {
        left = windowLayout.width - SCREEN_INDENT - menuLayout.width;
      }
    } // If the menu is larger than available vertical space,
    // calculate the height of scrollable view


    let scrollableMenuHeight = 0; // Check if the menu should be scrollable

    if ( // Check if the menu overflows from bottom side
    top >= windowLayout.height - menuLayout.height - SCREEN_INDENT - additionalVerticalValue && // And bottom side of the screen has more space than top side
    top <= windowLayout.height - top) {
      // Scrollable menu should be below the anchor (expands downwards)
      scrollableMenuHeight = windowLayout.height - top - SCREEN_INDENT - additionalVerticalValue;
    } else if ( // Check if the menu overflows from bottom side
    top >= windowLayout.height - menuLayout.height - SCREEN_INDENT - additionalVerticalValue && // And top side of the screen has more space than bottom side
    top >= windowLayout.height - top && // And menu overflows from top side
    top <= menuLayout.height - anchorLayout.height + SCREEN_INDENT - additionalVerticalValue) {
      // Scrollable menu should be above the anchor (expands upwards)
      scrollableMenuHeight = top + anchorLayout.height - SCREEN_INDENT + additionalVerticalValue;
    } // Scrollable menu max height


    scrollableMenuHeight = scrollableMenuHeight > windowLayout.height - 2 * SCREEN_INDENT ? windowLayout.height - 2 * SCREEN_INDENT : scrollableMenuHeight; // Menu is typically positioned below the element that generates it
    // So first check if it fits below the anchor (expands downwards)

    if ( // Check if menu fits vertically
    top <= windowLayout.height - menuLayout.height - SCREEN_INDENT - additionalVerticalValue || // Or if the menu overflows from bottom side
    top >= windowLayout.height - menuLayout.height - SCREEN_INDENT - additionalVerticalValue && // And bottom side of the screen has more space than top side
    top <= windowLayout.height - top) {
      positionTransforms.push({
        translateY: scaleAnimation.y.interpolate({
          inputRange: [0, menuLayout.height],
          outputRange: [-((scrollableMenuHeight || menuLayout.height) / 2), 0]
        })
      }); // Check if menu position has enough space from top side

      if (top < SCREEN_INDENT) {
        top = SCREEN_INDENT;
      }
    } else {
      positionTransforms.push({
        translateY: scaleAnimation.y.interpolate({
          inputRange: [0, menuLayout.height],
          outputRange: [(scrollableMenuHeight || menuLayout.height) / 2, 0]
        })
      });
      top += anchorLayout.height - (scrollableMenuHeight || menuLayout.height);
      const bottom = top + (scrollableMenuHeight || menuLayout.height) + additionalVerticalValue; // Check if menu position has enough space from bottom side

      if (bottom > windowLayout.height - SCREEN_INDENT) {
        top = scrollableMenuHeight === windowLayout.height - 2 * SCREEN_INDENT ? -SCREEN_INDENT * 2 : windowLayout.height - menuLayout.height - SCREEN_INDENT - additionalVerticalValue;
      }
    }

    const shadowMenuContainerStyle = _objectSpread({
      opacity: opacityAnimation,
      transform: scaleTransforms,
      borderRadius: theme.roundness
    }, scrollableMenuHeight ? {
      height: scrollableMenuHeight
    } : {});

    const positionStyle = _objectSpread({
      top: this.isAnchorCoord() ? top : top + additionalVerticalValue
    }, _reactNative.I18nManager.isRTL ? {
      right: left
    } : {
      left
    });

    return /*#__PURE__*/React.createElement(_reactNative.View, {
      ref: _ref2 => {
        this.anchor = _ref2;
      },
      collapsable: false
    }, this.isAnchorCoord() ? null : anchor, rendered ? /*#__PURE__*/React.createElement(_Portal.default, null, /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
      accessibilityLabel: overlayAccessibilityLabel,
      accessibilityRole: "button",
      onPress: onDismiss
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: _reactNative.StyleSheet.absoluteFill
    })), /*#__PURE__*/React.createElement(_reactNative.View, {
      ref: _ref => {
        this.menu = _ref;
      },
      collapsable: false,
      accessibilityViewIsModal: visible,
      style: [styles.wrapper, positionStyle, style],
      pointerEvents: visible ? 'box-none' : 'none',
      onAccessibilityEscape: onDismiss
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: {
        transform: positionTransforms
      }
    }, /*#__PURE__*/React.createElement(_Surface.default, {
      style: [styles.shadowMenuContainer, shadowMenuContainerStyle, contentStyle]
    }, scrollableMenuHeight && /*#__PURE__*/React.createElement(_reactNative.ScrollView, null, children) || /*#__PURE__*/React.createElement(React.Fragment, null, children))))) : null);
  }

}

_defineProperty(Menu, "Item", _MenuItem2.default);

_defineProperty(Menu, "defaultProps", {
  statusBarHeight: _constants.APPROX_STATUSBAR_HEIGHT,
  overlayAccessibilityLabel: 'Close menu'
});

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    position: 'absolute'
  },
  shadowMenuContainer: {
    opacity: 0,
    paddingVertical: 8,
    elevation: 8
  }
});

var _default = (0, _theming.withTheme)(Menu);

exports.default = _default;
//# sourceMappingURL=Menu.js.map