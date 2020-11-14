import * as React from 'react';
import { View } from 'react-native';
import { AppearancePreferences, ColorSchemeName, AppearanceListener } from './Appearance.types';

interface FakeEventSubscription {
  remove: () => void;
}

function noop() {}

export class Appearance {
  static getColorScheme(): ColorSchemeName {
    return 'no-preference';
  }

  static set(_preferences: AppearancePreferences): void {}

  static addChangeListener(_listener: AppearanceListener): FakeEventSubscription {
    return { remove: () => noop };
  }

  /**
   * Unused: some people might expect to remove the listener like this, but they shouldn't.
   */
  static removeChangeListener(_listener: AppearanceListener): void {}
}

export const AppearanceProvider = (props: any) => <View style={{ flex: 1 }} {...props} />;

export function useColorScheme(): ColorSchemeName {
  return 'no-preference';
}
