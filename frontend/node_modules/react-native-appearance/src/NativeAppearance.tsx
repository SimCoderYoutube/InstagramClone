import * as React from 'react';
import { NativeModules, Platform, View, requireNativeComponent } from 'react-native';

let FallbackAppearanceProvider = (props: any) => <View style={{ flex: 1 }} {...props} />;

// Native modules
export const NativeAppearance = NativeModules.RNCAppearance;
export const NativeAppearanceProvider =
  Platform.OS === 'android'
    ? FallbackAppearanceProvider
    : requireNativeComponent('RNCAppearanceProvider');
