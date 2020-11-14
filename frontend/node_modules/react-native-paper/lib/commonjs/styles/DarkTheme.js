"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var _DefaultTheme = _interopRequireDefault(require("./DefaultTheme"));

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DarkTheme = _objectSpread(_objectSpread({}, _DefaultTheme.default), {}, {
  dark: true,
  mode: 'adaptive',
  colors: _objectSpread(_objectSpread({}, _DefaultTheme.default.colors), {}, {
    primary: '#BB86FC',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    text: _colors.white,
    disabled: (0, _color.default)(_colors.white).alpha(0.38).rgb().string(),
    placeholder: (0, _color.default)(_colors.white).alpha(0.54).rgb().string(),
    backdrop: (0, _color.default)(_colors.black).alpha(0.5).rgb().string(),
    notification: _colors.pinkA100
  })
});

var _default = DarkTheme;
exports.default = _default;
//# sourceMappingURL=DarkTheme.js.map