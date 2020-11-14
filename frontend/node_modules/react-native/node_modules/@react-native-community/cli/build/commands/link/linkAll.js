"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _lodash() {
  const data = require("lodash");

  _lodash = function () {
    return data;
  };

  return data;
}

function path() {
  const data = _interopRequireWildcard(require("path"));

  path = function () {
    return data;
  };

  return data;
}

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

var _linkAssets = _interopRequireDefault(require("./linkAssets"));

var _linkDependency = _interopRequireDefault(require("./linkDependency"));

var _makeHook = _interopRequireDefault(require("./makeHook"));

var _printDeprecationWarning = _interopRequireDefault(require("./printDeprecationWarning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const dedupeAssets = assets => (0, _lodash().uniqBy)(assets, asset => path().basename(asset));

async function linkAll(config, options) {
  if (options.linkDeps) {
    (0, _printDeprecationWarning.default)('react-native link --all');

    _cliTools().logger.debug('Linking all dependencies');

    for (let key in config.dependencies) {
      const dependency = config.dependencies[key];

      try {
        if (dependency.hooks.prelink) {
          await (0, _makeHook.default)(dependency.hooks.prelink)();
        }

        await (0, _linkDependency.default)(config.platforms, config.project, dependency);

        if (dependency.hooks.postlink) {
          await (0, _makeHook.default)(dependency.hooks.postlink)();
        }
      } catch (error) {
        throw new (_cliTools().CLIError)(`Linking "${_chalk().default.bold(dependency.name)}" failed.`, error);
      }
    }
  }

  if (options.linkAssets) {
    _cliTools().logger.debug('Linking all assets');

    const projectAssets = config.assets;
    const assets = dedupeAssets(Object.keys(config.dependencies).reduce((acc, dependency) => acc.concat(config.dependencies[dependency].assets), projectAssets));

    try {
      (0, _linkAssets.default)(config.platforms, config.project, assets);
    } catch (error) {
      throw new (_cliTools().CLIError)('Linking assets failed.', error);
    }
  }
}

var _default = linkAll;
exports.default = _default;

//# sourceMappingURL=linkAll.js.map