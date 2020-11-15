"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectConfig = projectConfig;
exports.dependencyConfig = dependencyConfig;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

var _findAndroidDir = _interopRequireDefault(require("./findAndroidDir"));

var _findManifest = _interopRequireDefault(require("./findManifest"));

var _findPackageClassName = _interopRequireDefault(require("./findPackageClassName"));

var _readManifest = _interopRequireDefault(require("./readManifest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const getPackageName = manifest => manifest.attr.package;
/**
 * Gets android project config by analyzing given folder and taking some
 * defaults specified by user into consideration
 */


function projectConfig(root, userConfig = {}) {
  const src = userConfig.sourceDir || (0, _findAndroidDir.default)(root);

  if (!src) {
    return null;
  }

  const sourceDir = _path().default.join(root, src);

  const appName = getAppName(sourceDir, userConfig.appName);
  const isFlat = sourceDir.indexOf('app') === -1;
  const manifestPath = userConfig.manifestPath ? _path().default.join(sourceDir, userConfig.manifestPath) : (0, _findManifest.default)(_path().default.join(sourceDir, appName));

  if (!manifestPath) {
    return null;
  }

  const manifest = (0, _readManifest.default)(manifestPath);
  const packageName = userConfig.packageName || getPackageName(manifest);

  if (!packageName) {
    throw new Error(`Package name not found in ${manifestPath}`);
  }

  const packageFolder = userConfig.packageFolder || packageName.replace(/\./g, _path().default.sep);

  const mainFilePath = _path().default.join(sourceDir, userConfig.mainFilePath || _path().default.join(appName, `src/main/java/${packageFolder}/MainApplication.java`));

  const stringsPath = _path().default.join(sourceDir, userConfig.stringsPath || _path().default.join(appName, '/src/main/res/values/strings.xml'));

  const settingsGradlePath = _path().default.join(sourceDir, userConfig.settingsGradlePath || 'settings.gradle');

  const assetsPath = _path().default.join(sourceDir, userConfig.assetsPath || _path().default.join(appName, '/src/main/assets'));

  const buildGradlePath = _path().default.join(sourceDir, userConfig.buildGradlePath || 'build.gradle');

  return {
    sourceDir,
    isFlat,
    folder: root,
    stringsPath,
    manifestPath,
    buildGradlePath,
    settingsGradlePath,
    assetsPath,
    mainFilePath,
    packageName,
    packageFolder,
    appName
  };
}

function getAppName(sourceDir, userConfigAppName) {
  let appName = '';

  if (typeof userConfigAppName === 'string' && _fs().default.existsSync(_path().default.join(sourceDir, userConfigAppName))) {
    appName = userConfigAppName;
  } else if (_fs().default.existsSync(_path().default.join(sourceDir, 'app'))) {
    appName = 'app';
  }

  return appName;
}
/**
 * Same as projectConfigAndroid except it returns
 * different config that applies to packages only
 */


function dependencyConfig(root, userConfig = {}) {
  const src = userConfig.sourceDir || (0, _findAndroidDir.default)(root);

  if (!src) {
    return null;
  }

  const sourceDir = _path().default.join(root, src);

  const manifestPath = userConfig.manifestPath ? _path().default.join(sourceDir, userConfig.manifestPath) : (0, _findManifest.default)(sourceDir);

  if (!manifestPath) {
    return null;
  }

  const manifest = (0, _readManifest.default)(manifestPath);
  const packageName = userConfig.packageName || getPackageName(manifest);
  const packageClassName = (0, _findPackageClassName.default)(sourceDir);
  /**
   * This module has no package to export
   */

  if (!packageClassName) {
    return null;
  }

  const packageImportPath = userConfig.packageImportPath || `import ${packageName}.${packageClassName};`;
  const packageInstance = userConfig.packageInstance || `new ${packageClassName}()`;
  return {
    sourceDir,
    folder: root,
    packageImportPath,
    packageInstance
  };
}

//# sourceMappingURL=index.js.map