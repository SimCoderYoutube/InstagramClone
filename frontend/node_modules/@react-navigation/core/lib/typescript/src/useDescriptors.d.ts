import type { NavigationAction, NavigationState, ParamListBase, Router } from '@react-navigation/routers';
import { AddListener, AddKeyedListener } from './NavigationBuilderContext';
import type { NavigationEventEmitter } from './useEventEmitter';
import type { Descriptor, NavigationHelpers, RouteConfig, RouteProp, EventMapBase } from './types';
declare type Options<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase> = {
    state: State;
    screens: Record<string, RouteConfig<ParamListBase, string, State, ScreenOptions, EventMap>>;
    navigation: NavigationHelpers<ParamListBase>;
    screenOptions?: ScreenOptions | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
    }) => ScreenOptions);
    onAction: (action: NavigationAction, visitedNavigators?: Set<string>) => boolean;
    getState: () => State;
    setState: (state: State) => void;
    addListener: AddListener;
    addKeyedListener: AddKeyedListener;
    onRouteFocus: (key: string) => void;
    router: Router<State, NavigationAction>;
    emitter: NavigationEventEmitter<any>;
};
/**
 * Hook to create descriptor objects for the child routes.
 *
 * A descriptor object provides 3 things:
 * - Helper method to render a screen
 * - Options specified by the screen for the navigator
 * - Navigation object intended for the route
 */
export default function useDescriptors<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase>({ state, screens, navigation, screenOptions, onAction, getState, setState, addListener, addKeyedListener, onRouteFocus, router, emitter, }: Options<State, ScreenOptions, EventMap>): Record<string, Descriptor<Record<string, object | undefined>, string, State, ScreenOptions, {}>>;
export {};
