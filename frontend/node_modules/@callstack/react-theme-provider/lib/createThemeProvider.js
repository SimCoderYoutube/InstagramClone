"use strict";

exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createThemeProvider(defaultTheme, ThemeContext) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ThemeProvider, _React$Component);

    function ThemeProvider() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = ThemeProvider.prototype;

    _proto.render = function render() {
      return React.createElement(ThemeContext.Provider, {
        value: this.props.theme
      }, this.props.children);
    };

    return ThemeProvider;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    theme: defaultTheme
  }), _temp;
}

var _default = createThemeProvider;
exports.default = _default;
//# sourceMappingURL=createThemeProvider.js.map