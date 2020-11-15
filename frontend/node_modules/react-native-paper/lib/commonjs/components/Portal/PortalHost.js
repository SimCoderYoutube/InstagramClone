"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PortalContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _PortalManager = _interopRequireDefault(require("./PortalManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PortalContext = /*#__PURE__*/React.createContext(null);
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal.Host>
 *     <Text>Content of the app</Text>
 *   </Portal.Host>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */

exports.PortalContext = PortalContext;

class PortalHost extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setManager", manager => {
      this.manager = manager;
    });

    _defineProperty(this, "mount", children => {
      const key = this.nextKey++;

      if (this.manager) {
        this.manager.mount(key, children);
      } else {
        this.queue.push({
          type: 'mount',
          key,
          children
        });
      }

      return key;
    });

    _defineProperty(this, "update", (key, children) => {
      if (this.manager) {
        this.manager.update(key, children);
      } else {
        const op = {
          type: 'mount',
          key,
          children
        };
        const index = this.queue.findIndex(o => o.type === 'mount' || o.type === 'update' && o.key === key);

        if (index > -1) {
          // @ts-ignore
          this.queue[index] = op;
        } else {
          this.queue.push(op);
        }
      }
    });

    _defineProperty(this, "unmount", key => {
      if (this.manager) {
        this.manager.unmount(key);
      } else {
        this.queue.push({
          type: 'unmount',
          key
        });
      }
    });

    _defineProperty(this, "nextKey", 0);

    _defineProperty(this, "queue", []);

    _defineProperty(this, "manager", void 0);
  }

  componentDidMount() {
    const manager = this.manager;
    const queue = this.queue;

    while (queue.length && manager) {
      const action = queue.pop();

      if (action) {
        // eslint-disable-next-line default-case
        switch (action.type) {
          case 'mount':
            manager.mount(action.key, action.children);
            break;

          case 'update':
            manager.update(action.key, action.children);
            break;

          case 'unmount':
            manager.unmount(action.key);
            break;
        }
      }
    }
  }

  render() {
    return /*#__PURE__*/React.createElement(PortalContext.Provider, {
      value: {
        mount: this.mount,
        update: this.update,
        unmount: this.unmount
      }
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: styles.container,
      collapsable: false,
      pointerEvents: "box-none"
    }, this.props.children), /*#__PURE__*/React.createElement(_PortalManager.default, {
      ref: this.setManager
    }));
  }

}

exports.default = PortalHost;

_defineProperty(PortalHost, "displayName", 'Portal.Host');

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=PortalHost.js.map