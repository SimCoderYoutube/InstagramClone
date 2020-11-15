function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import AppbarAction from './AppbarAction';
import AppbarBackIcon from './AppbarBackIcon';

/**
 * A component used to display a back button in the appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
class AppbarBackAction extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(AppbarAction, _extends({}, this.props, {
      icon: AppbarBackIcon
    }));
  }

}

_defineProperty(AppbarBackAction, "displayName", 'Appbar.BackAction');

_defineProperty(AppbarBackAction, "defaultProps", {
  accessibilityLabel: 'Back'
});

export default AppbarBackAction;
//# sourceMappingURL=AppbarBackAction.js.map