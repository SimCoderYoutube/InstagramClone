"use strict";

exports.__esModule = true;
exports.default = createTheming;

var React = _interopRequireWildcard(require("react"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _createThemeProvider = _interopRequireDefault(require("./createThemeProvider"));

var _createWithTheme = _interopRequireDefault(require("./createWithTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createTheming(defaultTheme) {
  var ThemeContext = React.createContext(defaultTheme);
  var ThemeProvider = (0, _createThemeProvider.default)(defaultTheme, ThemeContext);
  var withTheme = (0, _createWithTheme.default)(ThemeProvider, ThemeContext);

  var useTheme = function useTheme(overrides) {
    var theme = React.useContext(ThemeContext);
    var result = React.useMemo(function () {
      return theme && overrides ? (0, _deepmerge.default)(theme, overrides) : theme || overrides;
    }, [theme, overrides]);
    return result;
  };

  return {
    ThemeContext: ThemeContext,
    ThemeProvider: ThemeProvider,
    withTheme: withTheme,
    useTheme: useTheme
  };
}
//# sourceMappingURL=createTheming.js.map