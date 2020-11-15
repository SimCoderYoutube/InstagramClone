"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createWithTheme = function createWithTheme(ThemeProvider, ThemeContext) {
  return function withTheme(Comp) {
    var ThemedComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(ThemedComponent, _React$Component);

      function ThemedComponent() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

        _defineProperty(_assertThisInitialized(_this), "_previous", void 0);

        _defineProperty(_assertThisInitialized(_this), "_merge", function (a, b) {
          var previous = _this._previous;

          if (previous && previous.a === a && previous.b === b) {
            return previous.result;
          }

          var result = a && b && a !== b ? (0, _deepmerge.default)(a, b) : a || b;
          _this._previous = {
            a: a,
            b: b,
            result: result
          };
          return result;
        });

        return _this;
      }

      var _proto = ThemedComponent.prototype;

      _proto.render = function render() {
        var _this2 = this;

        var _this$props = this.props,
            _reactThemeProviderForwardedRef = _this$props._reactThemeProviderForwardedRef,
            rest = _objectWithoutPropertiesLoose(_this$props, ["_reactThemeProviderForwardedRef"]);

        return React.createElement(ThemeContext.Consumer, null, function (theme) {
          return React.createElement(Comp, _extends({}, rest, {
            theme: _this2._merge(theme, rest.theme),
            ref: _reactThemeProviderForwardedRef
          }));
        });
      };

      return ThemedComponent;
    }(React.Component);

    var ResultComponent = React.forwardRef(function (props, ref) {
      return React.createElement(ThemedComponent, _extends({}, props, {
        _reactThemeProviderForwardedRef: ref
      }));
    });
    ResultComponent.displayName = "withTheme(" + (Comp.displayName || Comp.name) + ")";
    (0, _hoistNonReactStatics.default)(ResultComponent, Comp);
    return ResultComponent;
  };
};

var _default = createWithTheme;
exports.default = _default;
//# sourceMappingURL=createWithTheme.js.map