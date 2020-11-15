import type { StackScreenProps } from '@react-navigation/stack';
export declare type Routes = {
    Home: undefined;
    Details: undefined;
    ModalDetails: undefined;
    Settings: undefined;
};
export declare type ScreenProps<T extends keyof Routes> = StackScreenProps<Routes, T>;
