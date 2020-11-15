"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDocumentTitle;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Set the document title for the active screen
 */
function useDocumentTitle(ref, {
  enabled = true,
  formatter = (options, route) => {
    var _options$title;

    return (_options$title = options === null || options === void 0 ? void 0 : options.title) !== null && _options$title !== void 0 ? _options$title : route === null || route === void 0 ? void 0 : route.name;
  }
} = {}) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const navigation = ref.current;

    if (navigation) {
      const title = formatter(navigation.getCurrentOptions(), navigation.getCurrentRoute());
      document.title = title;
    }

    return navigation === null || navigation === void 0 ? void 0 : navigation.addListener('options', e => {
      const title = formatter(e.data.options, navigation === null || navigation === void 0 ? void 0 : navigation.getCurrentRoute());
      document.title = title;
    });
  });
}
//# sourceMappingURL=useDocumentTitle.js.map