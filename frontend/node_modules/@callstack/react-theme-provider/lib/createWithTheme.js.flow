/* @flow */

import * as React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';

import type { ThemeProviderType } from './createThemeProvider';
import type { $DeepShape } from './types';

export type WithThemeType<T> = <P, C: React.ComponentType<P>>(
  Comp: C
) => C &
  React.ComponentType<
    $Diff<React.ElementConfig<C>, { theme: T }> & { theme?: $DeepShape<T> }
  >;

const createWithTheme = <T: Object, S: $DeepShape<T>>(
  ThemeProvider: ThemeProviderType<T>,
  ThemeContext: React.Context<T>
) =>
  function withTheme(Comp: *) {
    class ThemedComponent extends React.Component<*> {
      _previous: ?{ a: T, b: ?S, result: T };

      _merge = (a: T, b: ?S) => {
        const previous = this._previous;

        if (previous && previous.a === a && previous.b === b) {
          return previous.result;
        }

        const result = a && b && a !== b ? deepmerge(a, b) : a || b;

        this._previous = { a, b, result };

        return result;
      };

      render() {
        const { _reactThemeProviderForwardedRef, ...rest } = this.props;

        return (
          <ThemeContext.Consumer>
            {theme => (
              <Comp
                {...rest}
                theme={this._merge(theme, rest.theme)}
                ref={_reactThemeProviderForwardedRef}
              />
            )}
          </ThemeContext.Consumer>
        );
      }
    }

    const ResultComponent = React.forwardRef((props, ref) => (
      <ThemedComponent {...props} _reactThemeProviderForwardedRef={ref} />
    ));

    ResultComponent.displayName = `withTheme(${Comp.displayName || Comp.name})`;

    hoistNonReactStatics(ResultComponent, Comp);

    return (ResultComponent: any);
  };

export default createWithTheme;
