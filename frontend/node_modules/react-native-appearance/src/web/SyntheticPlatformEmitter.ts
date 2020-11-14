let emitters: any;
try {
  emitters = require('@unimodules/react-native-adapter').SyntheticPlatformEmitter;
} catch (_) {
  emitters = require('./emitter-polyfill').default;
}

// @ts-ignore: Don't mix import/export with require/module.exports
module.exports = emitters;
