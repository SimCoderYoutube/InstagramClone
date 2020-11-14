import type { NavigationState } from '@react-navigation/routers';
import type { NavigationEventEmitter } from './useEventEmitter';
import type { EventMapCore } from './types';
declare type Options<State extends NavigationState> = {
    state: State;
    emitter: NavigationEventEmitter<EventMapCore<State>>;
};
/**
 * Hook to take care of emitting `focus` and `blur` events.
 */
export default function useFocusEvents<State extends NavigationState>({ state, emitter, }: Options<State>): void;
export {};
