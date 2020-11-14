/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
/// <reference types="node" />
import ws from 'ws';
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
declare type Server = HttpServer | HttpsServer;
declare function attachToServer(server: Server, path: string): {
    server: ws.Server;
    isDebuggerConnected(): boolean;
};
declare const _default: {
    attachToServer: typeof attachToServer;
};
export default _default;
//# sourceMappingURL=debuggerProxyServer.d.ts.map