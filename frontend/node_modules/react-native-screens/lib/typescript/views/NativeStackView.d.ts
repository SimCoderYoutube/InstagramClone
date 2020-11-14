import { StackNavigationState } from '@react-navigation/native';
import { NativeStackDescriptorMap, NativeStackNavigationHelpers } from '../types';
declare type Props = {
    state: StackNavigationState;
    navigation: NativeStackNavigationHelpers;
    descriptors: NativeStackDescriptorMap;
};
export default function NativeStackView({ state, navigation, descriptors, }: Props): JSX.Element;
export {};
