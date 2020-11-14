"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PortalConsumer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "key", void 0);
  }

  async componentDidMount() {
    this.checkManager(); // Delay updating to prevent React from going to infinite loop

    await Promise.resolve();
    this.key = this.props.manager.mount(this.props.children);
  }

  componentDidUpdate() {
    this.checkManager();
    this.props.manager.update(this.key, this.props.children);
  }

  componentWillUnmount() {
    this.checkManager();
    this.props.manager.unmount(this.key);
  }

  checkManager() {
    if (!this.props.manager) {
      throw new Error('Looks like you forgot to wrap your root component with `Provider` component from `react-native-paper`.\n\n' + "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" + 'https://callstack.github.io/react-native-paper/getting-started.html');
    }
  }

  render() {
    return null;
  }

}

exports.default = PortalConsumer;
//# sourceMappingURL=PortalConsumer.js.map