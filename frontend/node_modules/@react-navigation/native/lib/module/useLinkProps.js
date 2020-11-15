import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/core';
import useLinkTo from './useLinkTo';

/**
 * Hook to get props for an anchor tag so it can work with in page navigation.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 */
export default function useLinkProps({
  to,
  action
}) {
  const navigation = React.useContext(NavigationHelpersContext);
  const linkTo = useLinkTo();

  const onPress = e => {
    var _e$currentTarget;

    let shouldHandle = false;

    if (Platform.OS !== 'web' || !e) {
      shouldHandle = e ? !e.defaultPrevented : true;
    } else if (!e.defaultPrevented && // onPress prevented default
    // @ts-expect-error: these properties exist on web, but not in React Native
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && ( // ignore clicks with modifier keys
    // @ts-expect-error: these properties exist on web, but not in React Native
    e.button == null || e.button === 0) && // ignore everything but left clicks
    // @ts-expect-error: these properties exist on web, but not in React Native
    [undefined, null, '', 'self'].includes((_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.target) // let browser handle "target=_blank" etc.
    ) {
        e.preventDefault();
        shouldHandle = true;
      }

    if (shouldHandle) {
      if (action) {
        if (navigation) {
          navigation.dispatch(action);
        } else {
          throw new Error("Couldn't find a navigation object.");
        }
      } else {
        if (typeof to !== 'string') {
          throw new Error("To 'to' option is invalid (found '".concat(String(to), "'. It must be a valid string for navigation."));
        }

        linkTo(to);
      }
    }
  };

  return {
    href: to,
    accessibilityRole: 'link',
    onPress
  };
}
//# sourceMappingURL=useLinkProps.js.map