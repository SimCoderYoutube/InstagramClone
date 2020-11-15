import type { ListenerMap } from './NavigationBuilderContext';
/**
 * Hook which lets child navigators add action listeners.
 */
export default function useChildListeners(): {
    listeners: {
        action: import("./NavigationBuilderContext").ChildActionListener[];
        focus: import("./NavigationBuilderContext").FocusedNavigationListener[];
    };
    addListener: <T extends "focus" | "action">(type: T, listener: ListenerMap[T]) => () => void;
};
