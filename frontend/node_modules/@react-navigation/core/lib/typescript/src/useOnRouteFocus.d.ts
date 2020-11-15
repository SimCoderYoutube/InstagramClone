import type { NavigationAction, NavigationState, Router } from '@react-navigation/routers';
declare type Options<Action extends NavigationAction> = {
    router: Router<NavigationState, Action>;
    getState: () => NavigationState;
    setState: (state: NavigationState) => void;
    key?: string;
};
/**
 * Hook to handle focus actions for a route.
 * Focus action needs to be treated specially, coz when a nested route is focused,
 * the parent navigators also needs to be focused.
 */
export default function useOnRouteFocus<Action extends NavigationAction>({ router, getState, key: sourceRouteKey, setState, }: Options<Action>): (key: string) => void;
export {};
