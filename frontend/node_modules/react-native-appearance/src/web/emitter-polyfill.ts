// Copyright 2018-present 650 Industries. All rights reserved.
// Polyfill the @unimodules/react-native-adapter used for Expo web.

// @ts-ignore: react-native-web is a peer dependency
import RCTEventEmitter from 'react-native-web/dist/vendor/react-native/emitter/EventEmitter';
// @ts-ignore: react-native-web is a peer dependency
import RCTDeviceEventEmitter from 'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter';

/**
 * This emitter is used for sending synthetic native events to listeners
 * registered in the API layer with `NativeEventEmitter`.
 */
class SyntheticPlatformEmitter {
  _emitter = new RCTEventEmitter(RCTDeviceEventEmitter.sharedSubscriber);

  emit(eventName: string, props: any): void {
    this._emitter.emit(eventName, props);
  }
}

export default new SyntheticPlatformEmitter();
