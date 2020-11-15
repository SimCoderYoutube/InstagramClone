"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _core = require("@react-navigation/core");

var _ServerContext = _interopRequireDefault(require("./ServerContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Container component for server rendering.
 *
 * @param props.location Location object to base the initial URL for SSR.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which contains helper methods.
 */
var _default = /*#__PURE__*/React.forwardRef(function ServerContainer({
  children,
  location
}, ref) {
  React.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  const current = {};

  if (ref) {
    const value = {
      getCurrentOptions() {
        return current.options;
      }

    }; // We write to the `ref` during render instead of `React.useImperativeHandle`
    // This is because `useImperativeHandle` will update the ref after 'commit',
    // and there's no 'commit' phase during SSR.
    // Mutating ref during render is unsafe in concurrent mode, but we don't care about it for SSR.

    if (typeof ref === 'function') {
      ref(value);
    } else {
      // @ts-expect-error: the TS types are incorrect and say that ref.current is readonly
      ref.current = value;
    }
  }

  return /*#__PURE__*/React.createElement(_ServerContext.default.Provider, {
    value: {
      location
    }
  }, /*#__PURE__*/React.createElement(_core.CurrentRenderContext.Provider, {
    value: current
  }, children));
});

exports.default = _default;
//# sourceMappingURL=ServerContainer.js.map