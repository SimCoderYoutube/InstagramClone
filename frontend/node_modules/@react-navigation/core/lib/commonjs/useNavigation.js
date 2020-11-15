"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigation;

var React = _interopRequireWildcard(require("react"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
function useNavigation() {
  const navigation = React.useContext(_NavigationContext.default);

  if (navigation === undefined) {
    throw new Error("Couldn't find a navigation object. Is your component inside a screen in a navigator?");
  }

  return navigation;
}
//# sourceMappingURL=useNavigation.js.map