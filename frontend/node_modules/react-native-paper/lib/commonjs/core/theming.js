"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.withTheme = exports.ThemeProvider = void 0;

var _reactThemeProvider = require("@callstack/react-theme-provider");

var _DefaultTheme = _interopRequireDefault(require("../styles/DefaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  ThemeProvider,
  withTheme,
  useTheme
} = (0, _reactThemeProvider.createTheming)(_DefaultTheme.default);
exports.useTheme = useTheme;
exports.withTheme = withTheme;
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=theming.js.map