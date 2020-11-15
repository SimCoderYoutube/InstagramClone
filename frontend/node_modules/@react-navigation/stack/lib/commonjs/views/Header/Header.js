"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = require("@react-navigation/native");

var _HeaderSegment = _interopRequireDefault(require("./HeaderSegment"));

var _HeaderTitle = _interopRequireDefault(require("./HeaderTitle"));

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/React.memo(function Header(props) {
  const {
    scene,
    previous,
    layout,
    insets,
    navigation,
    styleInterpolator
  } = props;
  const {
    options
  } = scene.descriptor;
  const title = typeof options.headerTitle !== 'function' && options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
  let leftLabel; // The label for the left back button shows the title of the previous screen
  // If a custom label is specified, we use it, otherwise use previous screen's title

  if (options.headerBackTitle !== undefined) {
    leftLabel = options.headerBackTitle;
  } else if (previous) {
    const o = previous.descriptor.options;
    leftLabel = typeof o.headerTitle !== 'function' && o.headerTitle !== undefined ? o.headerTitle : o.title !== undefined ? o.title : previous.route.name;
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  const goBack = React.useCallback((0, _debounce.default)(() => {
    if (navigation.isFocused() && navigation.canGoBack()) {
      navigation.dispatch(_objectSpread(_objectSpread({}, _native.StackActions.pop()), {}, {
        source: scene.route.key
      }));
    }
  }, 50), [navigation, scene.route.key]);
  return /*#__PURE__*/React.createElement(_HeaderSegment.default, _extends({}, options, {
    insets: insets,
    layout: layout,
    scene: scene,
    title: title,
    leftLabel: leftLabel,
    headerTitle: typeof options.headerTitle !== 'function' ? props => /*#__PURE__*/React.createElement(_HeaderTitle.default, props) : options.headerTitle,
    onGoBack: previous ? goBack : undefined,
    styleInterpolator: styleInterpolator
  }));
});

exports.default = _default;
//# sourceMappingURL=Header.js.map