function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      portals: []
    });

    _defineProperty(this, "mount", (key, children) => {
      this.setState(state => ({
        portals: [...state.portals, {
          key,
          children
        }]
      }));
    });

    _defineProperty(this, "update", (key, children) => this.setState(state => ({
      portals: state.portals.map(item => {
        if (item.key === key) {
          return _objectSpread(_objectSpread({}, item), {}, {
            children
          });
        }

        return item;
      })
    })));

    _defineProperty(this, "unmount", key => this.setState(state => ({
      portals: state.portals.filter(item => item.key !== key)
    })));
  }

  render() {
    return this.state.portals.map(({
      key,
      children
    }) => /*#__PURE__*/React.createElement(View, {
      key: key,
      collapsable: false
      /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */
      ,
      pointerEvents: "box-none",
      style: StyleSheet.absoluteFill
    }, children));
  }

}
//# sourceMappingURL=PortalManager.js.map