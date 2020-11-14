import type { ParamListBase } from '@react-navigation/routers';
import type { RouteProp } from './types';
/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */
export default function useRoute<T extends RouteProp<ParamListBase, string>>(): T;
