import * as React from 'react';
import CurrentRenderContext from './CurrentRenderContext';

/**
 * Write the current options, so that server renderer can get current values
 * Mutating values like this is not safe in async mode, but it doesn't apply to SSR
 */
export default function useCurrentRender({
  state,
  navigation,
  descriptors
}) {
  const current = React.useContext(CurrentRenderContext);

  if (current && navigation.isFocused()) {
    current.options = descriptors[state.routes[state.index].key].options;
  }
}
//# sourceMappingURL=useCurrentRender.js.map