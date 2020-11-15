/// <reference types="node" />
/// <reference types="ws" />
import http from 'http';
import { Server as HttpsServer } from 'https';
import devToolsMiddleware from './devToolsMiddleware';
import indexPageMiddleware from './indexPageMiddleware';
import openStackFrameInEditorMiddleware from './openStackFrameInEditorMiddleware';
import openURLMiddleware from './openURLMiddleware';
import rawBodyMiddleware from './rawBodyMiddleware';
import securityHeadersMiddleware from './securityHeadersMiddleware';
import statusPageMiddleware from './statusPageMiddleware';
import systraceProfileMiddleware from './systraceProfileMiddleware';
import debuggerProxyServer from './websocket/debuggerProxyServer';
import eventsSocketServer from './websocket/eventsSocketServer';
import messageSocketServer from './websocket/messageSocketServer';
export { devToolsMiddleware };
export { indexPageMiddleware };
export { openStackFrameInEditorMiddleware };
export { openURLMiddleware };
export { rawBodyMiddleware };
export { securityHeadersMiddleware };
export { statusPageMiddleware };
export { systraceProfileMiddleware };
export { debuggerProxyServer };
export { eventsSocketServer };
export { messageSocketServer };
declare type MiddlewareOptions = {
    host?: string;
    watchFolders: ReadonlyArray<string>;
    port: number;
};
export declare function createDevServerMiddleware(options: MiddlewareOptions): {
    attachToServer(server: http.Server | HttpsServer): {
        debuggerProxy: {
            server: import("ws").Server;
            isDebuggerConnected(): boolean;
        };
        eventsSocket: {
            reportEvent: (event: any) => void;
        };
        messageSocket: {
            broadcast: (method: string, params?: Record<string, any> | undefined) => void;
        };
    };
    middleware: any;
};
//# sourceMappingURL=index.d.ts.map