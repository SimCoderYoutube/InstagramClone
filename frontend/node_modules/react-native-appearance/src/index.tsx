import React, { useMemo } from 'react';
import { NativeEventEmitter } from 'react-native';
import { EventEmitter, EventSubscription } from 'fbemitter';
import { useSubscription } from 'use-subscription';
import { AppearancePreferences, ColorSchemeName, AppearanceListener } from './Appearance.types';
export * from './Appearance.types';

// Native modules
import { NativeAppearance, NativeAppearanceProvider } from './NativeAppearance';

// Initialize the user-facing event emitter
const eventEmitter = new EventEmitter();

// Initialize preferences synchronously
let appearancePreferences: AppearancePreferences = NativeAppearance.initialPreferences;

// Initialize the native event emitter
const nativeEventEmitter = new NativeEventEmitter(NativeAppearance);
nativeEventEmitter.addListener('appearanceChanged', (newAppearance: AppearancePreferences) => {
  Appearance.set(newAppearance);
});

export class Appearance {
  /**
   * Note: Although appearance is available immediately, it may change (e.g
   * Dark Mode) so any rendering logic or styles that depend on this should try
   * to call this function on every render, rather than caching the value (for
   * example, using inline styles rather than setting a value in a
   * `StyleSheet`).
   *
   * Example: `const colorScheme = Appearance.get('colorScheme');`
   *
   * @param {string} preference Name of preference (e.g. 'colorScheme').
   * @returns {ColorSchemeName} Value for the preference.
   */
  static getColorScheme(): ColorSchemeName {
    return appearancePreferences.colorScheme;
  }

  /**
   * This should only be called from native code by sending the
   * appearanceChanged event.
   *
   * @param {object} appearancePreferences Simple string-keyed object of
   * appearance preferences to set.
   */
  static set(preferences: AppearancePreferences): void {
    let { colorScheme } = preferences;

    // Don't bother emitting if it's the same value
    if (appearancePreferences.colorScheme !== colorScheme) {
      appearancePreferences = { colorScheme };
      eventEmitter.emit('change', preferences);
    }
  }

  /**
   * Add an event handler that is fired when appearance preferences change.
   */
  static addChangeListener(listener: AppearanceListener): EventSubscription {
    return eventEmitter.addListener('change', listener);
  }
}

/**
 * Temporarily require a Provider since the upstream implementation uses root view customizations
 * to accomplish this same behavior
 */
export const AppearanceProvider = (props: { children: any }) => (
  <NativeAppearanceProvider style={{ flex: 1 }} {...props} />
);

/**
 * Subscribe to color scheme updates
 */
export function useColorScheme(): ColorSchemeName {
  const subscription = useMemo(
    () => ({
      getCurrentValue: () => Appearance.getColorScheme(),
      subscribe: (callback: AppearanceListener) => {
        let eventSubscription = Appearance.addChangeListener(callback);
        return () => eventSubscription.remove();
      },
    }),
    [],
  );

  return useSubscription<ColorSchemeName>(subscription);
}
