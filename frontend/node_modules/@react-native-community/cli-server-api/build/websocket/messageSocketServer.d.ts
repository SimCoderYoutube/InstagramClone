/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
declare function parseMessage(data: string, binary: any): any;
declare type Server = HttpServer | HttpsServer;
declare function attachToServer(server: Server, path: string): {
    broadcast: (method: string, params?: Record<string, any> | undefined) => void;
};
declare const _default: {
    attachToServer: typeof attachToServer;
    parseMessage: typeof parseMessage;
};
export default _default;
//# sourceMappingURL=messageSocketServer.d.ts.map