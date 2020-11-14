import * as React from 'react';
import ThemeContext from './ThemeContext';
export default function ThemeProvider({
  value,
  children
}) {
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
}
//# sourceMappingURL=ThemeProvider.js.map