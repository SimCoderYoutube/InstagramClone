// Type definitions for @callstack/react-theme-provider 1.0.2
// TypeScript version 3.0.3

import * as React from 'react';
import hoistNonReactStatics = require('./hoist-non-react-statics');

type $Without<T, K> = Pick<T, Exclude<keyof T, K>>;
type $DeepPartial<T> = { [P in keyof T]?: $DeepPartial<T[P]> };

export type ThemingType<Theme> = {
  ThemeProvider: React.ComponentType<{ theme?: Theme }>;
  withTheme: <Props extends { theme: Theme }, C>(
    WrappedComponent: React.ComponentType<Props> & C
  ) => React.ComponentType<
    $Without<Props, 'theme'> & { theme?: $DeepPartial<Theme> }
  > &
    hoistNonReactStatics.NonReactStatics<typeof WrappedComponent>;
  useTheme(overrides?: $DeepPartial<Theme>): Theme;
};

export const createTheming: <Theme>(defaultTheme: Theme) => ThemingType<Theme>;
