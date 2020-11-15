import * as React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
export declare const examples: Record<string, React.ComponentType<any> & {
    title: string;
}>;
declare type Props = {
    navigation: StackNavigationProp<{
        [key: string]: undefined;
    }>;
};
export default function ExampleList({ navigation }: Props): JSX.Element;
export {};
