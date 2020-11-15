import * as React from 'react';
import { getStateFromPath, getActionFromState, NavigationContext } from '@react-navigation/core';
import LinkingContext from './LinkingContext';
export default function useLinkTo() {
  const navigation = React.useContext(NavigationContext);
  const linking = React.useContext(LinkingContext);
  const linkTo = React.useCallback(path => {
    if (!path.startsWith('/')) {
      throw new Error("The path must start with '/' (".concat(path, ")."));
    }

    if (navigation === undefined) {
      throw new Error("Couldn't find a navigation object. Is your component inside a screen in a navigator?");
    }

    const {
      options
    } = linking;
    const state = (options === null || options === void 0 ? void 0 : options.getStateFromPath) ? options.getStateFromPath(path, options.config) : getStateFromPath(path, options === null || options === void 0 ? void 0 : options.config);

    if (state) {
      let root = navigation;
      let current; // Traverse up to get the root navigation

      while (current = root.dangerouslyGetParent()) {
        root = current;
      }

      const action = getActionFromState(state);

      if (action !== undefined) {
        root.dispatch(action);
      } else {
        root.reset(state);
      }
    } else {
      throw new Error('Failed to parse the path to a navigation state.');
    }
  }, [linking, navigation]);
  return linkTo;
}
//# sourceMappingURL=useLinkTo.js.map