import * as React from 'react';
export declare const ScheduleUpdateContext: React.Context<{
    scheduleUpdate: (callback: () => void) => void;
    flushUpdates: () => void;
}>;
/**
 * When screen config changes, we want to update the navigator in the same update phase.
 * However, navigation state is in the root component and React won't let us update it from a child.
 * This is a workaround for that, the scheduled update is stored in the ref without actually calling setState.
 * It lets all subsequent updates access the latest state so it stays correct.
 * Then we call setState during after the component updates.
 */
export default function useScheduleUpdate(callback: () => void): void;
