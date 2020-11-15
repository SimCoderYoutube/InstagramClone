import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/core';
import type { LinkingOptions } from './types';
export default function useLinking(ref: React.RefObject<NavigationContainerRef>, { enabled, config, getStateFromPath, getPathFromState, }: LinkingOptions): {
    getInitialState: () => PromiseLike<(Partial<Pick<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "index" | "history">> & Readonly<{
        stale?: true | undefined;
        type?: string | undefined;
        routes: (Pick<Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }>, "name" | "params"> & {
            key?: string | undefined;
            state?: Readonly<Partial<Pick<Readonly<{
                key: string;
                index: number;
                routeNames: string[];
                history?: unknown[] | undefined;
                routes: (Readonly<{
                    key: string;
                    name: string;
                    params?: object | undefined;
                }> & {
                    state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
                })[];
                type: string;
                stale: false;
            }>, "type" | "key" | "routeNames" | "index" | "history">> & {
                routes: (Pick<Readonly<{
                    key: string;
                    name: string;
                    params?: object | undefined;
                }>, "name" | "params"> & {
                    state?: Readonly<Partial<Pick<Readonly<{
                        key: string;
                        index: number;
                        routeNames: string[];
                        history?: unknown[] | undefined;
                        routes: (Readonly<{
                            key: string;
                            name: string;
                            params?: object | undefined;
                        }> & {
                            state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
                        })[];
                        type: string;
                        stale: false;
                    }>, "type" | "key" | "routeNames" | "index" | "history">> & any> | undefined;
                })[];
            }> | undefined;
        })[];
    }> & {
        state?: (Partial<Pick<Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, "index" | "history">> & Readonly<{
            stale?: true | undefined;
            type?: string | undefined;
            routes: (Pick<Readonly<{
                key: string;
                name: string;
                params?: object | undefined;
            }>, "name" | "params"> & {
                key?: string | undefined;
                state?: Readonly<Partial<Pick<Readonly<{
                    key: string;
                    index: number;
                    routeNames: string[];
                    history?: unknown[] | undefined;
                    routes: (Readonly<{
                        key: string;
                        name: string;
                        params?: object | undefined;
                    }> & {
                        state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
                    })[];
                    type: string;
                    stale: false;
                }>, "type" | "key" | "routeNames" | "index" | "history">> & {
                    routes: (Pick<Readonly<{
                        key: string;
                        name: string;
                        params?: object | undefined;
                    }>, "name" | "params"> & {
                        state?: Readonly<Partial<Pick<Readonly<{
                            key: string;
                            index: number;
                            routeNames: string[];
                            history?: unknown[] | undefined;
                            routes: (Readonly<{
                                key: string;
                                name: string;
                                params?: object | undefined;
                            }> & {
                                state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
                            })[];
                            type: string;
                            stale: false;
                        }>, "type" | "key" | "routeNames" | "index" | "history">> & any> | undefined;
                    })[];
                }> | undefined;
            })[];
        }> & any) | undefined;
    }) | undefined>;
};
