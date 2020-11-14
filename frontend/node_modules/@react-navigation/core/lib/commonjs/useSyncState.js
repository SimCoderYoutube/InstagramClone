"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSyncState;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const UNINTIALIZED_STATE = {};
/**
 * This is definitely not compatible with concurrent mode, but we don't have a solution for sync state yet.
 */

function useSyncState(initialState) {
  const stateRef = React.useRef(UNINTIALIZED_STATE);
  const isSchedulingRef = React.useRef(false);
  const isMountedRef = React.useRef(true);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (stateRef.current === UNINTIALIZED_STATE) {
    stateRef.current = // @ts-expect-error: initialState is a function, but TypeScript doesn't think so
    typeof initialState === 'function' ? initialState() : initialState;
  }

  const [trackingState, setTrackingState] = React.useState(stateRef.current);
  const getState = React.useCallback(() => stateRef.current, []);
  const setState = React.useCallback(state => {
    if (state === stateRef.current || !isMountedRef.current) {
      return;
    }

    stateRef.current = state;

    if (!isSchedulingRef.current) {
      setTrackingState(state);
    }
  }, []);
  const scheduleUpdate = React.useCallback(callback => {
    isSchedulingRef.current = true;

    try {
      callback();
    } finally {
      isSchedulingRef.current = false;
    }
  }, []);
  const flushUpdates = React.useCallback(() => {
    if (!isMountedRef.current) {
      return;
    } // Make sure that the tracking state is up-to-date.
    // We call it unconditionally, but React should skip the update if state is unchanged.


    setTrackingState(stateRef.current);
  }, []); // If we're rendering and the tracking state is out of date, update it immediately
  // This will make sure that our updates are applied as early as possible.

  if (trackingState !== stateRef.current) {
    setTrackingState(stateRef.current);
  }

  const state = stateRef.current;
  return [state, getState, setState, scheduleUpdate, flushUpdates];
}
//# sourceMappingURL=useSyncState.js.map