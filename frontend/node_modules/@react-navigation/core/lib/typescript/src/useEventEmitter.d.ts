import type { EventEmitter, EventConsumer } from './types';
export declare type NavigationEventEmitter<T extends Record<string, any>> = EventEmitter<T> & {
    create: (target: string) => EventConsumer<T>;
};
/**
 * Hook to manage the event system used by the navigator to notify screens of various events.
 */
export default function useEventEmitter<T extends Record<string, any>>(listen?: (e: any) => void): NavigationEventEmitter<T>;
