import * as React from 'react';
import NavigationContext from './NavigationContext';

/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
export default function useNavigation() {
  const navigation = React.useContext(NavigationContext);

  if (navigation === undefined) {
    throw new Error("Couldn't find a navigation object. Is your component inside a screen in a navigator?");
  }

  return navigation;
}
//# sourceMappingURL=useNavigation.js.map