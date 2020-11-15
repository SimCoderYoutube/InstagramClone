import type { Route, ParamListBase, NavigationState, PartialState } from '@react-navigation/routers';
import type { NavigationProp, RouteConfig, EventMapBase } from './types';
declare type Props<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase> = {
    screen: RouteConfig<ParamListBase, string, State, ScreenOptions, EventMap>;
    navigation: NavigationProp<ParamListBase, string, State, ScreenOptions>;
    route: Route<string> & {
        state?: NavigationState | PartialState<NavigationState>;
    };
    getState: () => State;
    setState: (state: State) => void;
    options: object;
};
/**
 * Component which takes care of rendering the screen for a route.
 * It provides all required contexts and applies optimizations when applicable.
 */
export default function SceneView<State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase>({ screen, route, navigation, getState, setState, options, }: Props<State, ScreenOptions, EventMap>): JSX.Element;
export {};
