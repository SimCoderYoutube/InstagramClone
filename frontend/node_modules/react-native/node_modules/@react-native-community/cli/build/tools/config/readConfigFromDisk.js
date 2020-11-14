"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readConfigFromDisk = readConfigFromDisk;
exports.readDependencyConfigFromDisk = readDependencyConfigFromDisk;

function _joi() {
  const data = _interopRequireDefault(require("@hapi/joi"));

  _joi = function () {
    return data;
  };

  return data;
}

function _cosmiconfig() {
  const data = _interopRequireDefault(require("cosmiconfig"));

  _cosmiconfig = function () {
    return data;
  };

  return data;
}

var _errors = require("./errors");

var schema = _interopRequireWildcard(require("./schema"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Places to look for the configuration file.
 */
const searchPlaces = ['react-native.config.js'];
/**
 * Reads a project configuration as defined by the user in the current
 * workspace.
 */

function readConfigFromDisk(rootFolder) {
  const explorer = (0, _cosmiconfig().default)('react-native', {
    searchPlaces,
    stopDir: rootFolder
  });
  const searchResult = explorer.searchSync(rootFolder);
  const config = searchResult ? searchResult.config : undefined;

  const result = _joi().default.validate(config, schema.projectConfig);

  if (result.error) {
    throw new _errors.JoiError(result.error);
  }

  return result.value;
}
/**
 * Reads a dependency configuration as defined by the developer
 * inside `node_modules`.
 */


function readDependencyConfigFromDisk(rootFolder) {
  const explorer = (0, _cosmiconfig().default)('react-native', {
    stopDir: rootFolder,
    searchPlaces
  });
  const searchResult = explorer.searchSync(rootFolder);
  const config = searchResult ? searchResult.config : emptyDependencyConfig;

  const result = _joi().default.validate(config, schema.dependencyConfig);

  if (result.error) {
    throw new _errors.JoiError(result.error);
  }

  return result.value;
}

const emptyDependencyConfig = {
  dependency: {
    platforms: {},
    assets: [],
    hooks: {},
    params: []
  },
  commands: [],
  platforms: {}
};

//# sourceMappingURL=readConfigFromDisk.js.map