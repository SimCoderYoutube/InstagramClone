/**
 * This is definitely not compatible with concurrent mode, but we don't have a solution for sync state yet.
 */
export default function useSyncState<T>(initialState?: (() => T) | T): readonly [T, () => T, (state: T) => void, (callback: () => void) => void, () => void];
