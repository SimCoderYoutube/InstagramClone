import * as React from 'react';
import NavigationRouteContext from './NavigationRouteContext';

/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */
export default function useRoute() {
  const route = React.useContext(NavigationRouteContext);

  if (route === undefined) {
    throw new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
  }

  return route;
}
//# sourceMappingURL=useRoute.js.map