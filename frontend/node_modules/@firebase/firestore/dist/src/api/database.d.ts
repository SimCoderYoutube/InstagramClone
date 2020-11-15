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
import * as firestore from '@firebase/firestore-types';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseService } from '@firebase/app-types/private';
import { DatabaseId } from '../core/database_info';
import { FirestoreClient } from '../core/firestore_client';
import { Query as InternalQuery } from '../core/query';
import { Transaction as InternalTransaction } from '../core/transaction';
import { ViewSnapshot } from '../core/view_snapshot';
import { Document } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { ResourcePath } from '../model/path';
import { AsyncQueue } from '../util/async_queue';
import { FieldPath as ExternalFieldPath } from './field_path';
import { CompleteFn, ErrorFn, NextFn, PartialObserver, Unsubscribe } from './observer';
import { UserDataConverter } from './user_data_converter';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { Provider } from '@firebase/component';
/**
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * `Firestore` instance.
 */
export declare const CACHE_SIZE_UNLIMITED = -1;
/**
 * Options that can be provided in the Firestore constructor when not using
 * Firebase (aka standalone mode).
 */
export interface FirestoreDatabase {
    projectId: string;
    database?: string;
}
/**
 * The root reference to the database.
 */
export declare class Firestore implements firestore.FirebaseFirestore, FirebaseService {
    readonly _databaseId: DatabaseId;
    private readonly _persistenceKey;
    private _credentials;
    private readonly _firebaseApp;
    private _settings;
    private _firestoreClient;
    readonly _queue: AsyncQueue;
    readonly _dataConverter: UserDataConverter;
    constructor(databaseIdOrApp: FirestoreDatabase | FirebaseApp, authProvider: Provider<FirebaseAuthInternalName>);
    settings(settingsLiteral: firestore.Settings): void;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    enablePersistence(settings?: firestore.PersistenceSettings): Promise<void>;
    clearPersistence(): Promise<void>;
    terminate(): Promise<void>;
    get _isTerminated(): boolean;
    waitForPendingWrites(): Promise<void>;
    onSnapshotsInSync(observer: PartialObserver<void>): Unsubscribe;
    onSnapshotsInSync(onSync: () => void): Unsubscribe;
    private onSnapshotsInSyncInternal;
    ensureClientConfigured(): FirestoreClient;
    private makeDatabaseInfo;
    private configureClient;
    private createDataConverter;
    private static databaseIdFromApp;
    get app(): FirebaseApp;
    INTERNAL: {
        delete: () => Promise<void>;
    };
    collection(pathString: string): firestore.CollectionReference;
    doc(pathString: string): firestore.DocumentReference;
    collectionGroup(collectionId: string): firestore.Query;
    runTransaction<T>(updateFunction: (transaction: firestore.Transaction) => Promise<T>): Promise<T>;
    batch(): firestore.WriteBatch;
    static get logLevel(): firestore.LogLevel;
    static setLogLevel(level: firestore.LogLevel): void;
    _areTimestampsInSnapshotsEnabled(): boolean;
}
/**
 * A reference to a transaction.
 */
export declare class Transaction implements firestore.Transaction {
    private _firestore;
    private _transaction;
    constructor(_firestore: Firestore, _transaction: InternalTransaction);
    get<T>(documentRef: firestore.DocumentReference<T>): Promise<firestore.DocumentSnapshot<T>>;
    set<T>(documentRef: firestore.DocumentReference<T>, value: T, options?: firestore.SetOptions): Transaction;
    update(documentRef: firestore.DocumentReference<unknown>, value: firestore.UpdateData): Transaction;
    update(documentRef: firestore.DocumentReference<unknown>, field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Transaction;
    delete(documentRef: firestore.DocumentReference<unknown>): Transaction;
}
export declare class WriteBatch implements firestore.WriteBatch {
    private _firestore;
    private _mutations;
    private _committed;
    constructor(_firestore: Firestore);
    set<T>(documentRef: firestore.DocumentReference<T>, value: T, options?: firestore.SetOptions): WriteBatch;
    update(documentRef: firestore.DocumentReference<unknown>, value: firestore.UpdateData): WriteBatch;
    update(documentRef: firestore.DocumentReference<unknown>, field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): WriteBatch;
    delete(documentRef: firestore.DocumentReference<unknown>): WriteBatch;
    commit(): Promise<void>;
    private verifyNotCommitted;
}
/**
 * A reference to a particular document in a collection in the database.
 */
export declare class DocumentReference<T = firestore.DocumentData> implements firestore.DocumentReference<T> {
    _key: DocumentKey;
    readonly firestore: Firestore;
    readonly _converter?: firestore.FirestoreDataConverter<T> | undefined;
    private _firestoreClient;
    constructor(_key: DocumentKey, firestore: Firestore, _converter?: firestore.FirestoreDataConverter<T> | undefined);
    static forPath<U>(path: ResourcePath, firestore: Firestore, converter?: firestore.FirestoreDataConverter<U>): DocumentReference<U>;
    get id(): string;
    get parent(): firestore.CollectionReference<T>;
    get path(): string;
    collection(pathString: string): firestore.CollectionReference<firestore.DocumentData>;
    isEqual(other: firestore.DocumentReference<T>): boolean;
    set(value: firestore.DocumentData, options?: firestore.SetOptions): Promise<void>;
    update(value: firestore.UpdateData): Promise<void>;
    update(field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Promise<void>;
    delete(): Promise<void>;
    onSnapshot(observer: PartialObserver<firestore.DocumentSnapshot<T>>): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, observer: PartialObserver<firestore.DocumentSnapshot<T>>): Unsubscribe;
    onSnapshot(onNext: NextFn<firestore.DocumentSnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, onNext: NextFn<firestore.DocumentSnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    private onSnapshotInternal;
    get(options?: firestore.GetOptions): Promise<firestore.DocumentSnapshot<T>>;
    private getViaSnapshotListener;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.DocumentReference<U>;
}
/**
 * Options interface that can be provided to configure the deserialization of
 * DocumentSnapshots.
 */
export interface SnapshotOptions extends firestore.SnapshotOptions {
}
export declare class DocumentSnapshot<T = firestore.DocumentData> implements firestore.DocumentSnapshot<T> {
    private _firestore;
    private _key;
    _document: Document | null;
    private _fromCache;
    private _hasPendingWrites;
    private readonly _converter?;
    constructor(_firestore: Firestore, _key: DocumentKey, _document: Document | null, _fromCache: boolean, _hasPendingWrites: boolean, _converter?: firestore.FirestoreDataConverter<T> | undefined);
    data(options?: firestore.SnapshotOptions): T | undefined;
    get(fieldPath: string | ExternalFieldPath, options?: firestore.SnapshotOptions): unknown;
    get id(): string;
    get ref(): firestore.DocumentReference<T>;
    get exists(): boolean;
    get metadata(): firestore.SnapshotMetadata;
    isEqual(other: firestore.DocumentSnapshot<T>): boolean;
    private toJSObject;
    private toJSValue;
    private toJSArray;
}
export declare class QueryDocumentSnapshot<T = firestore.DocumentData> extends DocumentSnapshot<T> implements firestore.QueryDocumentSnapshot<T> {
    data(options?: SnapshotOptions): T;
}
export declare class Query<T = firestore.DocumentData> implements firestore.Query<T> {
    _query: InternalQuery;
    readonly firestore: Firestore;
    protected readonly _converter?: firestore.FirestoreDataConverter<T> | undefined;
    constructor(_query: InternalQuery, firestore: Firestore, _converter?: firestore.FirestoreDataConverter<T> | undefined);
    where(field: string | ExternalFieldPath, opStr: firestore.WhereFilterOp, value: unknown): firestore.Query<T>;
    orderBy(field: string | ExternalFieldPath, directionStr?: firestore.OrderByDirection): firestore.Query<T>;
    limit(n: number): firestore.Query<T>;
    limitToLast(n: number): firestore.Query<T>;
    startAt(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    startAfter(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    endBefore(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    endAt(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    isEqual(other: firestore.Query<T>): boolean;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.Query<U>;
    /** Helper function to create a bound from a document or fields */
    private boundFromDocOrFields;
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    private boundFromDocument;
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    private boundFromFields;
    onSnapshot(observer: PartialObserver<firestore.QuerySnapshot<T>>): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, observer: PartialObserver<firestore.QuerySnapshot<T>>): Unsubscribe;
    onSnapshot(onNext: NextFn<firestore.QuerySnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, onNext: NextFn<firestore.QuerySnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    private onSnapshotInternal;
    private validateHasExplicitOrderByForLimitToLast;
    get(options?: firestore.GetOptions): Promise<firestore.QuerySnapshot<T>>;
    private getViaSnapshotListener;
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    private parseDocumentIdValue;
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    private validateDisjunctiveFilterElements;
    private validateNewFilter;
    private validateNewOrderBy;
    private validateOrderByAndInequalityMatch;
}
export declare class QuerySnapshot<T = firestore.DocumentData> implements firestore.QuerySnapshot<T> {
    private readonly _firestore;
    private readonly _originalQuery;
    private readonly _snapshot;
    private readonly _converter?;
    private _cachedChanges;
    private _cachedChangesIncludeMetadataChanges;
    readonly metadata: firestore.SnapshotMetadata;
    constructor(_firestore: Firestore, _originalQuery: InternalQuery, _snapshot: ViewSnapshot, _converter?: firestore.FirestoreDataConverter<T> | undefined);
    get docs(): Array<firestore.QueryDocumentSnapshot<T>>;
    get empty(): boolean;
    get size(): number;
    forEach(callback: (result: firestore.QueryDocumentSnapshot<T>) => void, thisArg?: unknown): void;
    get query(): firestore.Query<T>;
    docChanges(options?: firestore.SnapshotListenOptions): Array<firestore.DocumentChange<T>>;
    /** Check the equality. The call can be very expensive. */
    isEqual(other: firestore.QuerySnapshot<T>): boolean;
    private convertToDocumentImpl;
}
export declare class CollectionReference<T = firestore.DocumentData> extends Query<T> implements firestore.CollectionReference<T> {
    readonly _path: ResourcePath;
    constructor(_path: ResourcePath, firestore: Firestore, _converter?: firestore.FirestoreDataConverter<T>);
    get id(): string;
    get parent(): firestore.DocumentReference<firestore.DocumentData> | null;
    get path(): string;
    doc(pathString?: string): firestore.DocumentReference<T>;
    add(value: T): Promise<firestore.DocumentReference<T>>;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.CollectionReference<U>;
}
/**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 */
export declare function changesFromSnapshot<T>(firestore: Firestore, includeMetadataChanges: boolean, snapshot: ViewSnapshot, converter?: firestore.FirestoreDataConverter<T>): Array<firestore.DocumentChange<T>>;
export declare const PublicFirestore: typeof Firestore;
export declare const PublicTransaction: typeof Transaction;
export declare const PublicWriteBatch: typeof WriteBatch;
export declare const PublicDocumentReference: typeof DocumentReference;
export declare const PublicDocumentSnapshot: typeof DocumentSnapshot;
export declare const PublicQueryDocumentSnapshot: typeof QueryDocumentSnapshot;
export declare const PublicQuery: typeof Query;
export declare const PublicQuerySnapshot: typeof QuerySnapshot;
export declare const PublicCollectionReference: typeof CollectionReference;
