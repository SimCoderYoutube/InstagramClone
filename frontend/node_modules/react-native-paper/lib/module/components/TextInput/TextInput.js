function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, TextInput as NativeTextInput, Platform } from 'react-native';
import TextInputOutlined from './TextInputOutlined';
import TextInputFlat from './TextInputFlat';
import TextInputIcon from './Adornment/Icon';
import TextInputAffix from './Adornment/Affix';
import { withTheme } from '../../core/theming';
const BLUR_ANIMATION_DURATION = 180;
const FOCUS_ANIMATION_DURATION = 150;

/**
 * A component to allow users to input text.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.focused.png" />
 *     <figcaption>Flat (focused)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.disabled.png" />
 *     <figcaption>Flat (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outlined.focused.png" />
 *     <figcaption>Outlined (focused)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outlined.disabled.png" />
 *     <figcaption>Outlined (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Email"
 *       value={text}
 *       onChangeText={text => setText(text)}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 *
 * @extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props
 */
class TextInput extends React.Component {
  constructor(..._args) {
    super(..._args);

    _defineProperty(this, "validInputValue", this.props.value !== undefined ? this.props.value : this.props.defaultValue);

    _defineProperty(this, "state", {
      labeled: new Animated.Value(this.validInputValue ? 0 : 1),
      error: new Animated.Value(this.props.error ? 1 : 0),
      focused: false,
      placeholder: '',
      value: this.validInputValue,
      labelLayout: {
        measured: false,
        width: 0,
        height: 0
      },
      leftLayout: {
        width: null,
        height: null
      },
      rightLayout: {
        width: null,
        height: null
      }
    });

    _defineProperty(this, "ref", void 0);

    _defineProperty(this, "showPlaceholder", () => {
      if (this.timer) {
        clearTimeout(this.timer);
      } // Set the placeholder in a delay to offset the label animation
      // If we show it immediately, they'll overlap and look ugly
      // @ts-ignore


      this.timer = setTimeout(() => this.setState({
        placeholder: this.props.placeholder
      }), 50);
    });

    _defineProperty(this, "hidePlaceholder", () => this.setState({
      placeholder: ''
    }));

    _defineProperty(this, "timer", void 0);

    _defineProperty(this, "root", void 0);

    _defineProperty(this, "showError", () => {
      const {
        scale
      } = this.props.theme.animation;
      Animated.timing(this.state.error, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: Platform.select({
          ios: false,
          default: true
        })
      }).start(this.hidePlaceholder);
    });

    _defineProperty(this, "hideError", () => {
      const {
        scale
      } = this.props.theme.animation;
      Animated.timing(this.state.error, {
        toValue: 0,
        duration: BLUR_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: Platform.select({
          ios: false,
          default: true
        })
      }).start();
    });

    _defineProperty(this, "restoreLabel", () => {
      const {
        scale
      } = this.props.theme.animation;
      Animated.timing(this.state.labeled, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: Platform.select({
          ios: false,
          default: true
        })
      }).start();
    });

    _defineProperty(this, "minimizeLabel", () => {
      const {
        scale
      } = this.props.theme.animation;
      Animated.timing(this.state.labeled, {
        toValue: 0,
        duration: BLUR_ANIMATION_DURATION * scale,
        // To prevent this - https://github.com/callstack/react-native-paper/issues/941
        useNativeDriver: Platform.select({
          ios: false,
          default: true
        })
      }).start();
    });

    _defineProperty(this, "onLeftAffixLayoutChange", event => {
      this.setState({
        leftLayout: {
          height: event.nativeEvent.layout.height,
          width: event.nativeEvent.layout.width
        }
      });
    });

    _defineProperty(this, "onRightAffixLayoutChange", event => {
      this.setState({
        rightLayout: {
          width: event.nativeEvent.layout.width,
          height: event.nativeEvent.layout.height
        }
      });
    });

    _defineProperty(this, "handleFocus", args => {
      if (this.props.disabled || !this.props.editable) {
        return;
      }

      this.setState({
        focused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(args);
      }
    });

    _defineProperty(this, "handleBlur", args => {
      if (this.props.disabled || !this.props.editable) {
        return;
      }

      this.setState({
        focused: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(args);
      }
    });

    _defineProperty(this, "handleChangeText", value => {
      if (!this.props.editable) {
        return;
      }

      this.setState({
        value
      });
      this.props.onChangeText && this.props.onChangeText(value);
    });

    _defineProperty(this, "handleLayoutAnimatedText", e => {
      this.setState({
        labelLayout: {
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
          measured: true
        }
      });
    });

    _defineProperty(this, "forceFocus", () => {
      var _this$root;

      return (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.focus();
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      value: typeof nextProps.value !== 'undefined' ? nextProps.value : prevState.value
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isFocusChanged = prevState.focused !== this.state.focused;
    const isValueChanged = prevState.value !== this.state.value;
    const isLabelLayoutChanged = prevState.labelLayout !== this.state.labelLayout;
    const isLabelChanged = prevProps.label !== this.props.label;
    const isErrorChanged = prevProps.error !== this.props.error;

    if (isFocusChanged || isValueChanged || // workaround for animated regression for react native > 0.61
    // https://github.com/callstack/react-native-paper/pull/1440
    isLabelLayoutChanged) {
      // The label should be minimized if the text input is focused, or has text
      // In minimized mode, the label moves up and becomes small
      if (this.state.value || this.state.focused) {
        this.minimizeLabel();
      } else {
        this.restoreLabel();
      }
    }

    if (isFocusChanged || isLabelChanged) {
      // Show placeholder text only if the input is focused, or there's no label
      // We don't show placeholder if there's a label because the label acts as placeholder
      // When focused, the label moves up, so we can show a placeholder
      if (this.state.focused || !this.props.label) {
        this.showPlaceholder();
      } else {
        this.hidePlaceholder();
      }
    }

    if (isErrorChanged) {
      // When the input has an error, we wiggle the label and apply error styles
      if (this.props.error) {
        this.showError();
      } else {
        this.hideError();
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  /**
   * @internal
   */
  setNativeProps(args) {
    return this.root && this.root.setNativeProps(args);
  }
  /**
   * Returns `true` if the input is currently focused, `false` otherwise.
   */


  isFocused() {
    return this.root && this.root.isFocused();
  }
  /**
   * Removes all text from the TextInput.
   */


  clear() {
    return this.root && this.root.clear();
  }
  /**
   * Focuses the input.
   */


  focus() {
    return this.root && this.root.focus();
  }
  /**
   * Removes focus from the input.
   */


  blur() {
    return this.root && this.root.blur();
  }

  render() {
    const _ref = this.props,
          {
      mode
    } = _ref,
          rest = _objectWithoutProperties(_ref, ["mode"]);

    return mode === 'outlined' ? /*#__PURE__*/React.createElement(TextInputOutlined, _extends({}, rest, {
      value: this.state.value,
      parentState: this.state,
      innerRef: ref => {
        this.root = ref;
      },
      onFocus: this.handleFocus,
      forceFocus: this.forceFocus,
      onBlur: this.handleBlur,
      onChangeText: this.handleChangeText,
      onLayoutAnimatedText: this.handleLayoutAnimatedText,
      onLeftAffixLayoutChange: this.onLeftAffixLayoutChange,
      onRightAffixLayoutChange: this.onRightAffixLayoutChange
    })) : /*#__PURE__*/React.createElement(TextInputFlat, _extends({}, rest, {
      value: this.state.value,
      parentState: this.state,
      innerRef: ref => {
        this.root = ref;
      },
      onFocus: this.handleFocus,
      forceFocus: this.forceFocus,
      onBlur: this.handleBlur,
      onChangeText: this.handleChangeText,
      onLayoutAnimatedText: this.handleLayoutAnimatedText,
      onLeftAffixLayoutChange: this.onLeftAffixLayoutChange,
      onRightAffixLayoutChange: this.onRightAffixLayoutChange
    }));
  }

}

_defineProperty(TextInput, "Icon", TextInputIcon);

_defineProperty(TextInput, "Affix", TextInputAffix);

_defineProperty(TextInput, "defaultProps", {
  mode: 'flat',
  dense: false,
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: props => /*#__PURE__*/React.createElement(NativeTextInput, props)
});

export default withTheme(TextInput);
//# sourceMappingURL=TextInput.js.map