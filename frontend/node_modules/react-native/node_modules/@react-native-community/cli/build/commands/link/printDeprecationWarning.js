"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printDeprecationWarning;

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _cliTools() {
  const data = require("@react-native-community/cli-tools");

  _cliTools = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function printDeprecationWarning(command) {
  _cliTools().logger.warn(`Calling ${_chalk().default.bold(command)} is deprecated in favor of autolinking. It will be removed in the next major release.\nAutolinking documentation: ${_chalk().default.dim.underline('https://github.com/react-native-community/cli/blob/master/docs/autolinking.md')}`);
}

//# sourceMappingURL=printDeprecationWarning.js.map