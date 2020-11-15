import * as React from 'react';
/**
 * Context which holds the route prop for a screen.
 */
declare const NavigationContext: React.Context<Readonly<{
    key: string;
    name: string;
    params?: object | undefined;
}> | undefined>;
export default NavigationContext;
