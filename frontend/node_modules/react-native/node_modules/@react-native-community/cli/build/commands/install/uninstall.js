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

var _unlink = _interopRequireDefault(require("../link/unlink"));

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
async function uninstall(args, ctx) {
  const name = args[0];

  _cliTools().logger.info(`Unlinking "${name}"...`);

  await _unlink.default.func([name], ctx, {});

  _cliTools().logger.info(`Uninstalling "${name}"...`);

  await PackageManager.uninstall([name], {
    root: ctx.root
  });

  _cliTools().logger.success(`Successfully uninstalled and unlinked "${name}"`);
}

var _default = {
  func: uninstall,
  description: 'uninstall and unlink native dependencies',
  name: 'uninstall <packageName>'
};
exports.default = _default;

//# sourceMappingURL=uninstall.js.map