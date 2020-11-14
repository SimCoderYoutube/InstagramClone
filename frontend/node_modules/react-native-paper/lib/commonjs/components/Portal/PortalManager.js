"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Portal host is the component which actually renders all Portals.
 */
class PortalManager extends React.PureComponent {
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
    }) => /*#__PURE__*/React.createElement(_reactNative.View, {
      key: key,
      collapsable: false
      /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */
      ,
      pointerEvents: "box-none",
      style: _reactNative.StyleSheet.absoluteFill
    }, children));
  }

}

exports.default = PortalManager;
//# sourceMappingURL=PortalManager.js.map