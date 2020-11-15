"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
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

var _findDependencies = _interopRequireDefault(require("./findDependencies"));

var _findProjectRoot = _interopRequireDefault(require("./findProjectRoot"));

var _resolveReactNativePath = _interopRequireDefault(require("./resolveReactNativePath"));

var _findAssets = _interopRequireDefault(require("./findAssets"));

var _readConfigFromDisk = require("./readConfigFromDisk");

var _assign = _interopRequireDefault(require("../assign"));

var _merge = _interopRequireDefault(require("../merge"));

var _resolveNodeModuleDir = _interopRequireDefault(require("./resolveNodeModuleDir"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDependencyConfig(root, dependencyName, finalConfig, config, userConfig, isPlatform) {
  return (0, _merge.default)({
    root,
    name: dependencyName,
    platforms: Object.keys(finalConfig.platforms).reduce((dependency, platform) => {
      const platformConfig = finalConfig.platforms[platform];
      dependency[platform] = // Linking platforms is not supported
      isPlatform || !platformConfig ? null : platformConfig.dependencyConfig(root, config.dependency.platforms[platform]);
      return dependency;
    }, {}),
    assets: (0, _findAssets.default)(root, config.dependency.assets),
    hooks: config.dependency.hooks,
    params: config.dependency.params
  }, userConfig.dependencies[dependencyName] || {});
}
/**
 * Loads CLI configuration
 */


function loadConfig(projectRoot = (0, _findProjectRoot.default)()) {
  let lazyProject;
  const userConfig = (0, _readConfigFromDisk.readConfigFromDisk)(projectRoot);
  const initialConfig = {
    root: projectRoot,

    get reactNativePath() {
      return userConfig.reactNativePath ? _path().default.resolve(projectRoot, userConfig.reactNativePath) : (0, _resolveReactNativePath.default)(projectRoot);
    },

    dependencies: userConfig.dependencies,
    commands: userConfig.commands,

    get assets() {
      return (0, _findAssets.default)(projectRoot, userConfig.assets);
    },

    platforms: userConfig.platforms,

    get project() {
      if (lazyProject) {
        return lazyProject;
      }

      lazyProject = {};

      for (const platform in finalConfig.platforms) {
        const platformConfig = finalConfig.platforms[platform];

        if (platformConfig) {
          lazyProject[platform] = platformConfig.projectConfig(projectRoot, userConfig.project[platform] || {});
        }
      }

      return lazyProject;
    }

  };
  const finalConfig = Array.from(new Set([...Object.keys(userConfig.dependencies), ...(0, _findDependencies.default)(projectRoot)])).reduce((acc, dependencyName) => {
    const localDependencyRoot = userConfig.dependencies[dependencyName] && userConfig.dependencies[dependencyName].root;
    let root;
    let config;

    try {
      root = localDependencyRoot || (0, _resolveNodeModuleDir.default)(projectRoot, dependencyName);
      config = (0, _readConfigFromDisk.readDependencyConfigFromDisk)(root);
    } catch (error) {
      _cliTools().logger.warn((0, _cliTools().inlineString)(`
          Package ${_chalk().default.bold(dependencyName)} has been ignored because it contains invalid configuration.

          Reason: ${_chalk().default.dim(error.message)}`));

      return acc;
    }

    const isPlatform = Object.keys(config.platforms).length > 0;
    return (0, _assign.default)({}, acc, {
      dependencies: (0, _assign.default)({}, acc.dependencies, {
        get [dependencyName]() {
          return getDependencyConfig(root, dependencyName, finalConfig, config, userConfig, isPlatform);
        }

      }),
      commands: [...acc.commands, ...config.commands],
      platforms: { ...acc.platforms,
        ...config.platforms
      }
    });
  }, initialConfig);
  return finalConfig;
}

var _default = loadConfig;
exports.default = _default;

//# sourceMappingURL=index.js.map