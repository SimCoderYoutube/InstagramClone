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
import { Document } from '../model/document';
import { ArrayValue, FieldValue } from '../model/field_value';
import { FieldPath, ResourcePath } from '../model/path';
import { Target } from './target';
export declare enum LimitType {
    First = "F",
    Last = "L"
}
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 */
export declare class Query {
    readonly path: ResourcePath;
    readonly collectionGroup: string | null;
    readonly explicitOrderBy: OrderBy[];
    readonly filters: Filter[];
    readonly limit: number | null;
    readonly limitType: LimitType;
    readonly startAt: Bound | null;
    readonly endAt: Bound | null;
    static atPath(path: ResourcePath): Query;
    private memoizedOrderBy;
    private memoizedTarget;
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(path: ResourcePath, collectionGroup?: string | null, explicitOrderBy?: OrderBy[], filters?: Filter[], limit?: number | null, limitType?: LimitType, startAt?: Bound | null, endAt?: Bound | null);
    get orderBy(): OrderBy[];
    addFilter(filter: Filter): Query;
    addOrderBy(orderBy: OrderBy): Query;
    withLimitToFirst(limit: number | null): Query;
    withLimitToLast(limit: number | null): Query;
    withStartAt(bound: Bound): Query;
    withEndAt(bound: Bound): Query;
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    asCollectionQueryAtPath(path: ResourcePath): Query;
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    matchesAllDocuments(): boolean;
    canonicalId(): string;
    toString(): string;
    isEqual(other: Query): boolean;
    docComparator(d1: Document, d2: Document): number;
    matches(doc: Document): boolean;
    hasLimitToFirst(): boolean;
    hasLimitToLast(): boolean;
    getFirstOrderByField(): FieldPath | null;
    getInequalityFilterField(): FieldPath | null;
    findFilterOperator(operators: Operator[]): Operator | null;
    isDocumentQuery(): boolean;
    isCollectionGroupQuery(): boolean;
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    toTarget(): Target;
    private matchesPathAndCollectionGroup;
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    private matchesOrderBy;
    private matchesFilters;
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    private matchesBounds;
    private assertValidBound;
}
export declare abstract class Filter {
    abstract matches(doc: Document): boolean;
    abstract canonicalId(): string;
    abstract isEqual(filter: Filter): boolean;
}
export declare class Operator {
    name: string;
    static LESS_THAN: Operator;
    static LESS_THAN_OR_EQUAL: Operator;
    static EQUAL: Operator;
    static GREATER_THAN: Operator;
    static GREATER_THAN_OR_EQUAL: Operator;
    static ARRAY_CONTAINS: Operator;
    static IN: Operator;
    static ARRAY_CONTAINS_ANY: Operator;
    static fromString(op: string): Operator;
    constructor(name: string);
    toString(): string;
    isEqual(other: Operator): boolean;
}
export declare class FieldFilter extends Filter {
    field: FieldPath;
    op: Operator;
    value: FieldValue;
    protected constructor(field: FieldPath, op: Operator, value: FieldValue);
    /**
     * Creates a filter based on the provided arguments.
     */
    static create(field: FieldPath, op: Operator, value: FieldValue): FieldFilter;
    matches(doc: Document): boolean;
    protected matchesComparison(comparison: number): boolean;
    isInequality(): boolean;
    canonicalId(): string;
    isEqual(other: Filter): boolean;
    toString(): string;
}
/** Filter that matches on key fields (i.e. '__name__'). */
export declare class KeyFieldFilter extends FieldFilter {
    matches(doc: Document): boolean;
}
/** Filter that matches on key fields within an array. */
export declare class KeyFieldInFilter extends FieldFilter {
    value: ArrayValue;
    constructor(field: FieldPath, value: ArrayValue);
    matches(doc: Document): boolean;
}
/** A Filter that implements the array-contains operator. */
export declare class ArrayContainsFilter extends FieldFilter {
    constructor(field: FieldPath, value: FieldValue);
    matches(doc: Document): boolean;
}
/** A Filter that implements the IN operator. */
export declare class InFilter extends FieldFilter {
    value: ArrayValue;
    constructor(field: FieldPath, value: ArrayValue);
    matches(doc: Document): boolean;
}
/** A Filter that implements the array-contains-any operator. */
export declare class ArrayContainsAnyFilter extends FieldFilter {
    value: ArrayValue;
    constructor(field: FieldPath, value: ArrayValue);
    matches(doc: Document): boolean;
}
/**
 * The direction of sorting in an order by.
 */
export declare class Direction {
    name: string;
    static ASCENDING: Direction;
    static DESCENDING: Direction;
    private constructor();
    toString(): string;
}
/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */
export declare class Bound {
    readonly position: FieldValue[];
    readonly before: boolean;
    constructor(position: FieldValue[], before: boolean);
    canonicalId(): string;
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    sortsBeforeDocument(orderBy: OrderBy[], doc: Document): boolean;
    isEqual(other: Bound | null): boolean;
}
/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */
export declare class OrderBy {
    readonly field: FieldPath;
    readonly dir: Direction;
    private readonly isKeyOrderBy;
    constructor(field: FieldPath, dir?: Direction);
    compare(d1: Document, d2: Document): number;
    canonicalId(): string;
    toString(): string;
    isEqual(other: OrderBy): boolean;
}
