"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createStackNavigator", {
  enumerable: true,
  get: function get() {
    return _createStackNavigator.default;
  }
});
Object.defineProperty(exports, "StackView", {
  enumerable: true,
  get: function get() {
    return _StackView.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});
Object.defineProperty(exports, "HeaderTitle", {
  enumerable: true,
  get: function get() {
    return _HeaderTitle.default;
  }
});
Object.defineProperty(exports, "HeaderBackButton", {
  enumerable: true,
  get: function get() {
    return _HeaderBackButton.default;
  }
});
Object.defineProperty(exports, "HeaderBackground", {
  enumerable: true,
  get: function get() {
    return _HeaderBackground.default;
  }
});
Object.defineProperty(exports, "CardAnimationContext", {
  enumerable: true,
  get: function get() {
    return _CardAnimationContext.default;
  }
});
Object.defineProperty(exports, "HeaderHeightContext", {
  enumerable: true,
  get: function get() {
    return _HeaderHeightContext.default;
  }
});
Object.defineProperty(exports, "GestureHandlerRefContext", {
  enumerable: true,
  get: function get() {
    return _GestureHandlerRefContext.default;
  }
});
Object.defineProperty(exports, "useCardAnimation", {
  enumerable: true,
  get: function get() {
    return _useCardAnimation.default;
  }
});
Object.defineProperty(exports, "useHeaderHeight", {
  enumerable: true,
  get: function get() {
    return _useHeaderHeight.default;
  }
});
Object.defineProperty(exports, "useGestureHandlerRef", {
  enumerable: true,
  get: function get() {
    return _useGestureHandlerRef.default;
  }
});
exports.TransitionPresets = exports.TransitionSpecs = exports.HeaderStyleInterpolators = exports.CardStyleInterpolators = exports.Assets = void 0;

var CardStyleInterpolators = _interopRequireWildcard(require("./TransitionConfigs/CardStyleInterpolators"));

exports.CardStyleInterpolators = CardStyleInterpolators;

var HeaderStyleInterpolators = _interopRequireWildcard(require("./TransitionConfigs/HeaderStyleInterpolators"));

exports.HeaderStyleInterpolators = HeaderStyleInterpolators;

var TransitionSpecs = _interopRequireWildcard(require("./TransitionConfigs/TransitionSpecs"));

exports.TransitionSpecs = TransitionSpecs;

var TransitionPresets = _interopRequireWildcard(require("./TransitionConfigs/TransitionPresets"));

exports.TransitionPresets = TransitionPresets;

var _createStackNavigator = _interopRequireDefault(require("./navigators/createStackNavigator"));

var _StackView = _interopRequireDefault(require("./views/Stack/StackView"));

var _Header = _interopRequireDefault(require("./views/Header/Header"));

var _HeaderTitle = _interopRequireDefault(require("./views/Header/HeaderTitle"));

var _HeaderBackButton = _interopRequireDefault(require("./views/Header/HeaderBackButton"));

var _HeaderBackground = _interopRequireDefault(require("./views/Header/HeaderBackground"));

var _CardAnimationContext = _interopRequireDefault(require("./utils/CardAnimationContext"));

var _HeaderHeightContext = _interopRequireDefault(require("./utils/HeaderHeightContext"));

var _GestureHandlerRefContext = _interopRequireDefault(require("./utils/GestureHandlerRefContext"));

var _useCardAnimation = _interopRequireDefault(require("./utils/useCardAnimation"));

var _useHeaderHeight = _interopRequireDefault(require("./utils/useHeaderHeight"));

var _useGestureHandlerRef = _interopRequireDefault(require("./utils/useGestureHandlerRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Navigators
 */
const Assets = [// eslint-disable-next-line import/no-commonjs
require('./views/assets/back-icon.png'), // eslint-disable-next-line import/no-commonjs
require('./views/assets/back-icon-mask.png')];
/**
 * Views
 */

/**
 * Types
 */

exports.Assets = Assets;
//# sourceMappingURL=index.js.map