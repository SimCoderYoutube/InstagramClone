import type { PathConfigMap } from './types';
declare type Options = {
    initialRouteName?: string;
    screens: PathConfigMap;
};
export default function checkLegacyPathConfig(config?: Options): [boolean, Options | undefined];
export {};
