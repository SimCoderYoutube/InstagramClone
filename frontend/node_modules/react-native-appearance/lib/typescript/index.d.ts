/// <reference types="react" />
import { EventSubscription } from 'fbemitter';
import { AppearancePreferences, ColorSchemeName, AppearanceListener } from './Appearance.types';
export * from './Appearance.types';
export declare class Appearance {
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
    static getColorScheme(): ColorSchemeName;
    /**
     * This should only be called from native code by sending the
     * appearanceChanged event.
     *
     * @param {object} appearancePreferences Simple string-keyed object of
     * appearance preferences to set.
     */
    static set(preferences: AppearancePreferences): void;
    /**
     * Add an event handler that is fired when appearance preferences change.
     */
    static addChangeListener(listener: AppearanceListener): EventSubscription;
}
/**
 * Temporarily require a Provider since the upstream implementation uses root view customizations
 * to accomplish this same behavior
 */
export declare const AppearanceProvider: (props: {
    children: any;
}) => JSX.Element;
/**
 * Subscribe to color scheme updates
 */
export declare function useColorScheme(): ColorSchemeName;
