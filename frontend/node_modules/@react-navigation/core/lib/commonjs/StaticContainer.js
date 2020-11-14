"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Component which prevents updates for children if no props changed
 */
function StaticContainer(props) {
  return props.children;
}

var _default = /*#__PURE__*/React.memo(StaticContainer, (prevProps, nextProps) => {
  const prevPropKeys = Object.keys(prevProps);
  const nextPropKeys = Object.keys(nextProps);

  if (prevPropKeys.length !== nextPropKeys.length) {
    return false;
  }

  for (const key of prevPropKeys) {
    if (key === 'children') {
      continue;
    }

    if (prevProps[key] !== nextProps[key]) {
      return false;
    }
  }

  return true;
});

exports.default = _default;
//# sourceMappingURL=StaticContainer.js.map