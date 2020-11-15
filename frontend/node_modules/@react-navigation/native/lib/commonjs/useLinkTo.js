"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLinkTo;

var React = _interopRequireWildcard(require("react"));

var _core = require("@react-navigation/core");

var _LinkingContext = _interopRequireDefault(require("./LinkingContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useLinkTo() {
  const navigation = React.useContext(_core.NavigationContext);
  const linking = React.useContext(_LinkingContext.default);
  const linkTo = React.useCallback(path => {
    if (!path.startsWith('/')) {
      throw new Error("The path must start with '/' (".concat(path, ")."));
    }

    if (navigation === undefined) {
      throw new Error("Couldn't find a navigation object. Is your component inside a screen in a navigator?");
    }

    const {
      options
    } = linking;
    const state = (options === null || options === void 0 ? void 0 : options.getStateFromPath) ? options.getStateFromPath(path, options.config) : (0, _core.getStateFromPath)(path, options === null || options === void 0 ? void 0 : options.config);

    if (state) {
      let root = navigation;
      let current; // Traverse up to get the root navigation

      while (current = root.dangerouslyGetParent()) {
        root = current;
      }

      const action = (0, _core.getActionFromState)(state);

      if (action !== undefined) {
        root.dispatch(action);
      } else {
        root.reset(state);
      }
    } else {
      throw new Error('Failed to parse the path to a navigation state.');
    }
  }, [linking, navigation]);
  return linkTo;
}
//# sourceMappingURL=useLinkTo.js.map