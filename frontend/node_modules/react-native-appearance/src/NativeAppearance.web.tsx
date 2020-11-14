import * as React from 'react';
import { View } from 'react-native';

import { AppearancePreferences } from './Appearance.types';
// @ts-ignore
import SyntheticPlatformEmitter from './web/SyntheticPlatformEmitter';

function getQuery(): MediaQueryList | null {
  if (typeof window === 'undefined' || !window.matchMedia) return null;
  return window.matchMedia('(prefers-color-scheme: dark)');
}

function isMediaQueryList(query: any): query is MediaQueryList {
  return query && query.addListener && query.removeListener && typeof query.matches === 'boolean';
}

export const NativeAppearance = {
  get name(): string {
    return 'NativeAppearance';
  },
  get initialPreferences(): AppearancePreferences {
    const query = getQuery();
    if (isMediaQueryList(query)) {
      return { colorScheme: query.matches ? 'dark' : 'light' }
    }
    return { colorScheme: 'no-preference' };
  },
};

export function NativeAppearanceProvider(props: any) {
  React.useEffect(() => {
    const query = getQuery();

    function listener({ matches }: MediaQueryListEvent) {
      const colorScheme = matches ? 'dark' : 'light';
      SyntheticPlatformEmitter.emit('appearanceChanged', {
        colorScheme,
      });
    }

    if (query)
      query.addListener(listener);

    return () => {
      if (query) {
        query.removeListener(listener)
      }
    }
  }, []);

  return <View style={{ flex: 1 }} {...props} />
};
