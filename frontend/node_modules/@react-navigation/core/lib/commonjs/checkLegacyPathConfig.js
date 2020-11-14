"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkLegacyPathConfig;

function checkLegacyPathConfig(config) {
  let legacy = false;

  if (config) {
    // Assume legacy configuration if config has any other keys except `screens` and `initialRouteName`
    legacy = Object.keys(config).some(key => key !== 'screens' && key !== 'initialRouteName');

    if (legacy && (config.hasOwnProperty('screens') || config.hasOwnProperty('initialRouteName'))) {
      throw new Error('Found invalid keys in the configuration object. See https://reactnavigation.org/docs/configuring-links/ for more details on the shape of the configuration object.');
    }
  }

  if (legacy) {
    // @ts-expect-error: we have incorrect type for config since we don't type legacy config
    return [legacy, {
      screens: config
    }];
  }

  return [legacy, config];
}
//# sourceMappingURL=checkLegacyPathConfig.js.map