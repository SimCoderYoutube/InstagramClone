"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useScheduleUpdate;
exports.ScheduleUpdateContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MISSING_CONTEXT_ERROR = "Couldn't find a schedule context.";
const ScheduleUpdateContext = React.createContext({
  scheduleUpdate() {
    throw new Error(MISSING_CONTEXT_ERROR);
  },

  flushUpdates() {
    throw new Error(MISSING_CONTEXT_ERROR);
  }

});
/**
 * When screen config changes, we want to update the navigator in the same update phase.
 * However, navigation state is in the root component and React won't let us update it from a child.
 * This is a workaround for that, the scheduled update is stored in the ref without actually calling setState.
 * It lets all subsequent updates access the latest state so it stays correct.
 * Then we call setState during after the component updates.
 */

exports.ScheduleUpdateContext = ScheduleUpdateContext;

function useScheduleUpdate(callback) {
  const {
    scheduleUpdate,
    flushUpdates
  } = React.useContext(ScheduleUpdateContext);
  scheduleUpdate(callback);
  React.useEffect(flushUpdates);
}
//# sourceMappingURL=useScheduleUpdate.js.map