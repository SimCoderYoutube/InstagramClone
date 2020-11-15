import * as React from 'react';

/**
 * Context which holds the required helpers needed to build nested navigators.
 */
const NavigationBuilderContext = React.createContext({
  onDispatchAction: () => undefined,
  onOptionsChange: () => undefined
});
export default NavigationBuilderContext;
//# sourceMappingURL=NavigationBuilderContext.js.map