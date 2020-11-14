function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import PortalConsumer from './PortalConsumer';
import PortalHost, { PortalContext } from './PortalHost';
import { Provider as SettingsProvider, Consumer as SettingsConsumer } from '../../core/settings';
import { ThemeProvider, withTheme } from '../../core/theming';

/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Portal extends React.Component {
  // @component ./PortalHost.tsx
  render() {
    const {
      children,
      theme
    } = this.props;
    return /*#__PURE__*/React.createElement(SettingsConsumer, null, settings => /*#__PURE__*/React.createElement(PortalContext.Consumer, null, manager => /*#__PURE__*/React.createElement(PortalConsumer, {
      manager: manager
    }, /*#__PURE__*/React.createElement(SettingsProvider, {
      value: settings
    }, /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, children)))));
  }

}

_defineProperty(Portal, "Host", PortalHost);

export default withTheme(Portal);
//# sourceMappingURL=Portal.js.map