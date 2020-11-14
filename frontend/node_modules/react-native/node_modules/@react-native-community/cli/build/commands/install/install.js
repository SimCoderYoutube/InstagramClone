"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _cliTools() {
  const data = require("@react-native-community/cli-tools");

  _cliTools = function () {
    return data;
  };

  return data;
}

var PackageManager = _interopRequireWildcard(require("../../tools/packageManager"));

var _link = _interopRequireDefault(require("../link/link"));

var _config = _interopRequireDefault(require("../../tools/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
async function install(args, ctx) {
  const name = args[0];

  _cliTools().logger.info(`Installing "${name}"...`);

  await PackageManager.install([name], {
    root: ctx.root
  }); // Reload configuration to see newly installed dependency

  const newConfig = (0, _config.default)();

  _cliTools().logger.info(`Linking "${name}"...`);

  await _link.default.func([name], newConfig, {
    platforms: undefined
  });

  _cliTools().logger.success(`Successfully installed and linked "${name}"`);
}

var _default = {
  func: install,
  description: 'install and link native dependencies',
  name: 'install <packageName>'
};
exports.default = _default;

//# sourceMappingURL=install.js.map