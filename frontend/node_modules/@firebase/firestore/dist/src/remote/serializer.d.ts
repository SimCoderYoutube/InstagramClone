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
import { DatabaseId } from '../core/database_info';
import { Direction, FieldFilter, Filter, Operator, OrderBy } from '../core/query';
import { SnapshotVersion } from '../core/snapshot_version';
import { Target } from '../core/target';
import { TargetData } from '../local/target_data';
import { Document, MaybeDocument } from '../model/document';
import { DocumentKey } from '../model/document_key';
import * as fieldValue from '../model/field_value';
import { FieldMask, Mutation, MutationResult } from '../model/mutation';
import { FieldPath, ResourcePath } from '../model/path';
import * as api from '../protos/firestore_proto_api';
import { FirestoreError } from '../util/error';
import { WatchChange, WatchTargetChangeState } from './watch_change';
export interface SerializerOptions {
    /**
     * The serializer supports both Protobuf.js and Proto3 JSON formats. By
     * setting this flag to true, the serializer will use the Proto3 JSON format.
     *
     * For a description of the Proto3 JSON format check
     * https://developers.google.com/protocol-buffers/docs/proto3#json
     */
    useProto3Json: boolean;
}
/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
export declare class JsonProtoSerializer {
    private databaseId;
    private options;
    constructor(databaseId: DatabaseId, options: SerializerOptions);
    private emptyByteString;
    private unsafeCastProtoByteString;
    fromRpcStatus(status: api.Status): FirestoreError;
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    private toInt32Value;
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as accepting "number" because that's what
     * our generated proto interfaces say Int32Value must be, but it actually
     * accepts { value: number } to match our serialization in toInt32Value().
     */
    private fromInt32Value;
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say dates must be. But it's easier and safer
     * to actually return a Timestamp proto.
     */
    private toTimestamp;
    private fromTimestamp;
    private fromIso8601String;
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say bytes must be. But it should return
     * an Uint8Array in Node.
     */
    private toBytes;
    /**
     * Parse the blob from the protos into the internal Blob class. Note that the
     * typings assume all blobs are strings, but they are actually Uint8Arrays
     * on Node.
     */
    private fromBlob;
    toVersion(version: SnapshotVersion): string;
    fromVersion(version: string): SnapshotVersion;
    toResourceName(databaseId: DatabaseId, path: ResourcePath): string;
    fromResourceName(name: string): ResourcePath;
    toName(key: DocumentKey): string;
    fromName(name: string): DocumentKey;
    toQueryPath(path: ResourcePath): string;
    fromQueryPath(name: string): ResourcePath;
    get encodedDatabaseId(): string;
    private fullyQualifiedPrefixPath;
    private extractLocalPathFromResourceName;
    private isValidResourceName;
    toValue(val: fieldValue.FieldValue): api.Value;
    fromValue(obj: api.Value): fieldValue.FieldValue;
    /** Creates an api.Document from key and fields (but no create/update time) */
    toMutationDocument(key: DocumentKey, fields: fieldValue.ObjectValue): api.Document;
    toDocument(document: Document): api.Document;
    fromDocument(document: api.Document, hasCommittedMutations?: boolean): Document;
    toFields(fields: fieldValue.ObjectValue): {
        [key: string]: api.Value;
    };
    fromFields(object: {}): fieldValue.ObjectValue;
    toMapValue(map: fieldValue.ObjectValue): api.MapValue;
    toArrayValue(array: fieldValue.ArrayValue): api.ArrayValue;
    private fromFound;
    private fromMissing;
    fromMaybeDocument(result: api.BatchGetDocumentsResponse): MaybeDocument;
    private toWatchTargetChangeState;
    toTestWatchChange(watchChange: WatchChange): api.ListenResponse;
    fromWatchChange(change: api.ListenResponse): WatchChange;
    fromWatchTargetChangeState(state: api.TargetChangeTargetChangeType): WatchTargetChangeState;
    versionFromListenResponse(change: api.ListenResponse): SnapshotVersion;
    toMutation(mutation: Mutation): api.Write;
    fromMutation(proto: api.Write): Mutation;
    private toPrecondition;
    private fromPrecondition;
    private fromWriteResult;
    fromWriteResults(protos: api.WriteResult[] | undefined, commitTime?: string): MutationResult[];
    private toFieldTransform;
    private fromFieldTransform;
    toDocumentsTarget(target: Target): api.DocumentsTarget;
    fromDocumentsTarget(documentsTarget: api.DocumentsTarget): Target;
    toQueryTarget(target: Target): api.QueryTarget;
    fromQueryTarget(target: api.QueryTarget): Target;
    toListenRequestLabels(targetData: TargetData): api.ApiClientObjectMap<string> | null;
    private toLabel;
    toTarget(targetData: TargetData): api.Target;
    private toFilter;
    private fromFilter;
    private toOrder;
    private fromOrder;
    private toCursor;
    private fromCursor;
    toDirection(dir: Direction): api.OrderDirection;
    fromDirection(dir: api.OrderDirection | undefined): Direction | undefined;
    toOperatorName(op: Operator): api.FieldFilterOp;
    fromOperatorName(op: api.FieldFilterOp): Operator;
    toFieldPathReference(path: FieldPath): api.FieldReference;
    fromFieldPathReference(fieldReference: api.FieldReference): FieldPath;
    toPropertyOrder(orderBy: OrderBy): api.Order;
    fromPropertyOrder(orderBy: api.Order): OrderBy;
    fromFieldFilter(filter: api.Filter): Filter;
    toUnaryOrFieldFilter(filter: FieldFilter): api.Filter;
    fromUnaryFilter(filter: api.Filter): Filter;
    toDocumentMask(fieldMask: FieldMask): api.DocumentMask;
    fromDocumentMask(proto: api.DocumentMask): FieldMask;
}
