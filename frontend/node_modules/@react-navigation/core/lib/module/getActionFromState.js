function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default function getActionFromState(state) {
  if (state.routes.length === 0) {
    return undefined;
  } // Try to construct payload for a `NAVIGATE` action from the state
  // This lets us preserve the navigation state and not lose it


  let route = state.routes[state.routes.length - 1];
  let payload = {
    name: route.name,
    params: _objectSpread({}, route.params)
  };
  let current = route.state;
  let params = payload.params;

  while (current) {
    if (current.routes.length === 0) {
      return undefined;
    }

    route = current.routes[current.routes.length - 1];
    params.initial = current.routes.length === 1;
    params.screen = route.name;

    if (route.state) {
      params.params = _objectSpread({}, route.params);
      params = params.params;
    } else {
      params.params = route.params;
    }

    current = route.state;
  }

  return {
    type: 'NAVIGATE',
    payload
  };
}
//# sourceMappingURL=getActionFromState.js.map