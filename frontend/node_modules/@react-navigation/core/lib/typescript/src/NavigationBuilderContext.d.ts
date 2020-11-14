import * as React from 'react';
import type { NavigationAction, NavigationState, ParamListBase } from '@react-navigation/routers';
import type { NavigationHelpers } from './types';
export declare type ListenerMap = {
    action: ChildActionListener;
    focus: FocusedNavigationListener;
};
export declare type KeyedListenerMap = {
    getState: GetStateListener;
    beforeRemove: ChildBeforeRemoveListener;
};
export declare type AddListener = <T extends keyof ListenerMap>(type: T, listener: ListenerMap[T]) => void;
export declare type AddKeyedListener = <T extends keyof KeyedListenerMap>(type: T, key: string, listener: KeyedListenerMap[T]) => void;
export declare type ChildActionListener = (action: NavigationAction, visitedNavigators?: Set<string>) => boolean;
export declare type FocusedNavigationCallback<T> = (navigation: NavigationHelpers<ParamListBase>) => T;
export declare type FocusedNavigationListener = <T>(callback: FocusedNavigationCallback<T>) => {
    handled: boolean;
    result: T;
};
export declare type GetStateListener = () => NavigationState;
export declare type ChildBeforeRemoveListener = (action: NavigationAction) => boolean;
/**
 * Context which holds the required helpers needed to build nested navigators.
 */
declare const NavigationBuilderContext: React.Context<{
    onAction?: ((action: NavigationAction, visitedNavigators?: Set<string> | undefined) => boolean) | undefined;
    addListener?: AddListener | undefined;
    addKeyedListener?: AddKeyedListener | undefined;
    onRouteFocus?: ((key: string) => void) | undefined;
    onDispatchAction: (action: NavigationAction, noop: boolean) => void;
    onOptionsChange: (options: object) => void;
}>;
export default NavigationBuilderContext;
