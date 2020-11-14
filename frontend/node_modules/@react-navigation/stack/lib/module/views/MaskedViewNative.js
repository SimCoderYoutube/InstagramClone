function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * The native MaskedView that we explicitly re-export for supported platforms: Android, iOS.
 */
import * as React from 'react';
import { UIManager } from 'react-native';
let RNCMaskedView;

try {
  // Add try/catch to support usage even if it's not installed, since it's optional.
  // Newer versions of Metro will handle it properly.
  RNCMaskedView = require('@react-native-community/masked-view').default;
} catch (e) {// Ignore
}

const isMaskedViewAvailable = UIManager.getViewManagerConfig('RNCMaskedView') != null;
export default function MaskedView(_ref) {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  if (isMaskedViewAvailable && RNCMaskedView) {
    return /*#__PURE__*/React.createElement(RNCMaskedView, rest, children);
  }

  return children;
}
//# sourceMappingURL=MaskedViewNative.js.map