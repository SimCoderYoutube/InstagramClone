"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goBack = goBack;
exports.navigate = navigate;
exports.reset = reset;
exports.setParams = setParams;

function goBack() {
  return {
    type: 'GO_BACK'
  };
}

function navigate(...args) {
  if (typeof args[0] === 'string') {
    return {
      type: 'NAVIGATE',
      payload: {
        name: args[0],
        params: args[1]
      }
    };
  } else {
    const payload = args[0] || {};

    if (!payload.hasOwnProperty('key') && !payload.hasOwnProperty('name')) {
      throw new Error('You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.');
    }

    return {
      type: 'NAVIGATE',
      payload
    };
  }
}

function reset(state) {
  return {
    type: 'RESET',
    payload: state
  };
}

function setParams(params) {
  return {
    type: 'SET_PARAMS',
    payload: {
      params
    }
  };
}
//# sourceMappingURL=CommonActions.js.map