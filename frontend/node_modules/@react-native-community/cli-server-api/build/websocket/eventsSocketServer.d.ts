/// <reference types="node" />
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
import messageSocketModule from './messageSocketServer';
/**
 * The eventsSocket websocket listens at the 'events/` for websocket
 * connections, on which all Metro reports will be emitted.
 *
 * This is mostly useful for developer tools (clients) that wants to monitor Metro,
 * and the apps connected to Metro.
 *
 * The eventsSocket provides the following features:
 * - it reports any Metro event (that is reported through a reporter) to all clients
 * - it reports any console.log's (and friends) from the connected app to all clients
 *   (as client_log event)
 * - it allows connected clients to send commands through Metro to the connected app.
 *   This reuses the generic command mechanism.
 *   Two useful commands are 'reload' and 'devmenu'.
 */
declare type Server = HttpServer | HttpsServer;
declare type MessageSocket = ReturnType<typeof messageSocketModule.attachToServer>;
/**
 * Starts the eventsSocket at the given path
 *
 * @param server
 * @param path typically: 'events/'
 * @param messageSocket: webSocket to which all connected RN apps are listening
 */
declare function attachToServer(server: Server, path: string, messageSocket: MessageSocket): {
    reportEvent: (event: any) => void;
};
declare const _default: {
    attachToServer: typeof attachToServer;
};
export default _default;
//# sourceMappingURL=eventsSocketServer.d.ts.map