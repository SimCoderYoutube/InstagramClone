/**
 * Hook to get the current focus state of the screen. Returns a `true` if screen is focused, otherwise `false`.
 * This can be used if a component needs to render something based on the focus state.
 * It uses `use-subscription` under the hood for safer use in concurrent mode.
 */
export default function useIsFocused(): boolean;
