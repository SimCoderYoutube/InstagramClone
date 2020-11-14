import type { ParamListBase, NavigationState } from '@react-navigation/routers';
import type { NavigationProp } from './types';
declare type Options = {
    key?: string;
    navigation?: NavigationProp<ParamListBase, string, NavigationState, object>;
    options?: object | undefined;
};
export default function useOptionsGetters({ key, options, navigation, }: Options): {
    addOptionsGetter: (key: string, getter: () => object | undefined | null) => () => void;
    getCurrentOptions: () => object | null | undefined;
};
export {};
