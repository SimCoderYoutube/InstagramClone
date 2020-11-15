import * as React from 'react';
import type { Scene } from '../types';
declare const PreviousSceneContext: React.Context<Scene<Readonly<{
    key: string;
    name: string;
    params?: object | undefined;
}>> | undefined>;
export default PreviousSceneContext;
