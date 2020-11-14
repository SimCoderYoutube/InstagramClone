import * as React from 'react';

/**
 * Hook which lets child navigators add action listeners.
 */
export default function useChildListeners() {
  const {
    current: listeners
  } = React.useRef({
    action: [],
    focus: []
  });
  const addListener = React.useCallback((type, listener) => {
    // @ts-expect-error: listener should be correct type according to `type`
    listeners[type].push(listener);
    return () => {
      // @ts-expect-error: listener should be correct type according to `type`
      const index = listeners[type].indexOf(listener);
      listeners[type].splice(index, 1);
    };
  }, [listeners]);
  return {
    listeners,
    addListener
  };
}
//# sourceMappingURL=useChildListeners.js.map