"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLinkBuilder;

var React = _interopRequireWildcard(require("react"));

var _core = require("@react-navigation/core");

var _LinkingContext = _interopRequireDefault(require("./LinkingContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getRootStateForNavigate = (navigation, state) => {
  const parent = navigation.dangerouslyGetParent();

  if (parent) {
    const parentState = parent.dangerouslyGetState();
    return getRootStateForNavigate(parent, {
      index: 0,
      routes: [_objectSpread(_objectSpread({}, parentState.routes[parentState.index]), {}, {
        state: state
      })]
    });
  }

  return state;
};
/**
 * Build destination link for a navigate action.
 * Useful for showing anchor tags on the web for buttons that perform navigation.
 */


function useLinkBuilder() {
  const navigation = React.useContext(_core.NavigationHelpersContext);
  const linking = React.useContext(_LinkingContext.default);
  const buildLink = React.useCallback((name, params) => {
    const {
      options
    } = linking;

    if ((options === null || options === void 0 ? void 0 : options.enabled) === false) {
      return undefined;
    }

    const state = navigation ? getRootStateForNavigate(navigation, {
      index: 0,
      routes: [{
        name,
        params
      }]
    }) : // If we couldn't find a navigation object in context, we're at root
    // So we'll construct a basic state object to use
    {
      index: 0,
      routes: [{
        name,
        params
      }]
    };
    const path = (options === null || options === void 0 ? void 0 : options.getPathFromState) ? options.getPathFromState(state, options === null || options === void 0 ? void 0 : options.config) : (0, _core.getPathFromState)(state, options === null || options === void 0 ? void 0 : options.config);
    return path;
  }, [linking, navigation]);
  return buildLink;
}
//# sourceMappingURL=useLinkBuilder.js.map