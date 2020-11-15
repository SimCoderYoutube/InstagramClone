"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useWindowDimensions;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// This is similar to the new useWindowDimensions hook in react-native
// However, we have a custom implementation to support older RN versions
function useWindowDimensions() {
  const [dimensions, setDimensions] = React.useState(() => {
    // `height` and `width` maybe undefined during SSR, so we initialize them
    const {
      height = 0,
      width = 0
    } = _reactNative.Dimensions.get('window');

    return {
      height,
      width
    };
  });
  React.useEffect(() => {
    const onChange = ({
      window
    }) => {
      const {
        width,
        height
      } = window;
      setDimensions(d => {
        if (width === d.width && height === d.height) {
          return d;
        }

        return {
          width,
          height
        };
      });
    }; // We might have missed an update before the listener was added
    // So make sure to update the dimensions


    onChange({
      window: _reactNative.Dimensions.get('window')
    });

    _reactNative.Dimensions.addEventListener('change', onChange);

    return () => _reactNative.Dimensions.addEventListener('change', onChange);
  }, []);
  return dimensions;
}
//# sourceMappingURL=useWindowDimensions.js.map