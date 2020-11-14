import type { PartialState, NavigationState } from '@react-navigation/routers';
declare type NavigateParams = {
    screen?: string;
    params?: NavigateParams;
    initial?: boolean;
};
declare type NavigateAction = {
    type: 'NAVIGATE';
    payload: {
        name: string;
        params: NavigateParams;
    };
};
export default function getActionFromState(state: PartialState<NavigationState>): NavigateAction | undefined;
export {};
