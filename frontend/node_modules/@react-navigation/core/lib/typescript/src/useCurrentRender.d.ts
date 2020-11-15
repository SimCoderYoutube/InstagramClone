import type { NavigationState, ParamListBase } from '@react-navigation/routers';
import type { Descriptor, NavigationHelpers } from './types';
declare type Options = {
    state: NavigationState;
    navigation: NavigationHelpers<ParamListBase>;
    descriptors: {
        [key: string]: Descriptor<ParamListBase, string, NavigationState, object>;
    };
};
/**
 * Write the current options, so that server renderer can get current values
 * Mutating values like this is not safe in async mode, but it doesn't apply to SSR
 */
export default function useCurrentRender({ state, navigation, descriptors, }: Options): void;
export {};
