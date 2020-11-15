import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
};
export declare const SingleNavigatorContext: React.Context<{
    register(key: string): void;
    unregister(key: string): void;
} | undefined>;
/**
 * Component which ensures that there's only one navigator nested under it.
 */
export default function EnsureSingleNavigator({ children }: Props): JSX.Element;
export {};
