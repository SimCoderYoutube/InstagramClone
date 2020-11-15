/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface Dict<V> {
    [stringKey: string]: V;
    [numberKey: number]: V;
}
export declare function contains<V>(obj: Dict<V>, key: string | number): boolean;
export declare function get<V>(obj: Dict<V>, key: string | number): V | null;
export declare function size<V>(obj: Dict<V>): number;
/** Returns the given value if it's defined or the defaultValue otherwise. */
export declare function defaulted<V>(value: V | undefined, defaultValue: V): V;
export declare function forEachNumber<V>(obj: Dict<V>, fn: (key: number, val: V) => void): void;
export declare function values<V>(obj: Dict<V>): V[];
export declare function forEach<V>(obj: Dict<V>, fn: (key: string, val: V) => void): void;
export declare function lookupOrInsert<V>(obj: Dict<V>, key: string | number, valFn: () => V): V;
export declare function isEmpty<V>(obj: Dict<V>): boolean;
export declare function shallowCopy<V>(obj: Dict<V>): Dict<V>;
