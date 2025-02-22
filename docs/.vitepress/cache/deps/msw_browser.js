import {
  DeferredPromise,
  Interceptor,
  RequestHandler,
  SetupApi,
  createRequestId,
  devUtils,
  getTimestamp,
  handleRequest,
  invariant,
  kDispatchEvent,
  onUnhandledRequest,
  toPublicUrl
} from "./chunk-ZKOHFDJZ.js";
import { __privateAdd, __privateGet, __privateMethod, __privateSet, __publicField } from "./chunk-MTI3AIJG.js";

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/utils/toResponseInit.mjs
function toResponseInit(response) {
  return {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  };
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/utils/internal/isHandlerKind.mjs
function isHandlerKind(kind) {
  return input => {
    return input != null && typeof input === "object" && "__kind" in input && input.__kind === kind;
  };
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/utils/internal/isObject.mjs
function isObject(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/utils/internal/mergeRight.mjs
function mergeRight(left, right) {
  return Object.entries(right).reduce(
    (result, [key, rightValue]) => {
      const leftValue = result[key];
      if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
        result[key] = leftValue.concat(rightValue);
        return result;
      }
      if (isObject(leftValue) && isObject(rightValue)) {
        result[key] = mergeRight(leftValue, rightValue);
        return result;
      }
      result[key] = rightValue;
      return result;
    },
    Object.assign({}, left)
  );
}

// ../node_modules/.pnpm/@mswjs+interceptors@0.37.3/node_modules/@mswjs/interceptors/lib/browser/chunk-TX5GBTFY.mjs
function hasConfigurableGlobal(propertyName) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, propertyName);
  if (typeof descriptor === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "function" && typeof descriptor.get() === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "undefined" && descriptor.value == null) {
    return false;
  }
  if (typeof descriptor.set === "undefined" && !descriptor.configurable) {
    console.error(
      `[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`
    );
    return false;
  }
  return true;
}

// ../node_modules/.pnpm/@mswjs+interceptors@0.37.3/node_modules/@mswjs/interceptors/lib/browser/interceptors/WebSocket/index.mjs
function bindEvent(target, event) {
  Object.defineProperties(event, {
    target: {
      value: target,
      enumerable: true,
      writable: true
    },
    currentTarget: {
      value: target,
      enumerable: true,
      writable: true
    }
  });
  return event;
}
var kCancelable = Symbol("kCancelable");
var kDefaultPrevented = Symbol("kDefaultPrevented");
var CancelableMessageEvent = class extends MessageEvent {
  constructor(type, init) {
    super(type, init);
    this[kCancelable] = !!init.cancelable;
    this[kDefaultPrevented] = false;
  }
  get cancelable() {
    return this[kCancelable];
  }
  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented];
  }
  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented;
  }
  preventDefault() {
    if (this.cancelable && !this[kDefaultPrevented]) {
      this[kDefaultPrevented] = true;
    }
  }
};
var CloseEvent = class extends Event {
  constructor(type, init = {}) {
    super(type, init);
    this.code = init.code === void 0 ? 0 : init.code;
    this.reason = init.reason === void 0 ? "" : init.reason;
    this.wasClean = init.wasClean === void 0 ? false : init.wasClean;
  }
};
var CancelableCloseEvent = class extends CloseEvent {
  constructor(type, init = {}) {
    super(type, init);
    this[kCancelable] = !!init.cancelable;
    this[kDefaultPrevented] = false;
  }
  get cancelable() {
    return this[kCancelable];
  }
  set cancelable(nextCancelable) {
    this[kCancelable] = nextCancelable;
  }
  get defaultPrevented() {
    return this[kDefaultPrevented];
  }
  set defaultPrevented(nextDefaultPrevented) {
    this[kDefaultPrevented] = nextDefaultPrevented;
  }
  preventDefault() {
    if (this.cancelable && !this[kDefaultPrevented]) {
      this[kDefaultPrevented] = true;
    }
  }
};
var kEmitter = Symbol("kEmitter");
var kBoundListener = Symbol("kBoundListener");
var WebSocketClientConnection = class {
  constructor(socket, transport) {
    this.socket = socket;
    this.transport = transport;
    this.id = createRequestId();
    this.url = new URL(socket.url);
    this[kEmitter] = new EventTarget();
    this.transport.addEventListener("outgoing", event => {
      const message = bindEvent(
        this.socket,
        new CancelableMessageEvent("message", {
          data: event.data,
          origin: event.origin,
          cancelable: true
        })
      );
      this[kEmitter].dispatchEvent(message);
      if (message.defaultPrevented) {
        event.preventDefault();
      }
    });
    this.transport.addEventListener("close", event => {
      this[kEmitter].dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
    });
  }
  /**
   * Listen for the outgoing events from the connected WebSocket client.
   */
  addEventListener(type, listener, options) {
    if (!Reflect.has(listener, kBoundListener)) {
      const boundListener = listener.bind(this.socket);
      Object.defineProperty(listener, kBoundListener, {
        value: boundListener,
        enumerable: false,
        configurable: false
      });
    }
    this[kEmitter].addEventListener(type, Reflect.get(listener, kBoundListener), options);
  }
  /**
   * Removes the listener for the given event.
   */
  removeEventListener(event, listener, options) {
    this[kEmitter].removeEventListener(event, Reflect.get(listener, kBoundListener), options);
  }
  /**
   * Send data to the connected client.
   */
  send(data) {
    this.transport.send(data);
  }
  /**
   * Close the WebSocket connection.
   * @param {number} code A status code (see https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1).
   * @param {string} reason A custom connection close reason.
   */
  close(code, reason) {
    this.transport.close(code, reason);
  }
};
var WEBSOCKET_CLOSE_CODE_RANGE_ERROR = "InvalidAccessError: close code out of user configurable range";
var kPassthroughPromise = Symbol("kPassthroughPromise");
var kOnSend = Symbol("kOnSend");
var kClose = Symbol("kClose");
var WebSocketOverride = class extends EventTarget {
  constructor(url, protocols) {
    super();
    this.CONNECTING = 0;
    this.OPEN = 1;
    this.CLOSING = 2;
    this.CLOSED = 3;
    this._onopen = null;
    this._onmessage = null;
    this._onerror = null;
    this._onclose = null;
    this.url = url.toString();
    this.protocol = "";
    this.extensions = "";
    this.binaryType = "blob";
    this.readyState = this.CONNECTING;
    this.bufferedAmount = 0;
    this[kPassthroughPromise] = new DeferredPromise();
    queueMicrotask(async () => {
      if (await this[kPassthroughPromise]) {
        return;
      }
      this.protocol =
        typeof protocols === "string" ? protocols : Array.isArray(protocols) && protocols.length > 0 ? protocols[0] : "";
      if (this.readyState === this.CONNECTING) {
        this.readyState = this.OPEN;
        this.dispatchEvent(bindEvent(this, new Event("open")));
      }
    });
  }
  set onopen(listener) {
    this.removeEventListener("open", this._onopen);
    this._onopen = listener;
    if (listener !== null) {
      this.addEventListener("open", listener);
    }
  }
  get onopen() {
    return this._onopen;
  }
  set onmessage(listener) {
    this.removeEventListener("message", this._onmessage);
    this._onmessage = listener;
    if (listener !== null) {
      this.addEventListener("message", listener);
    }
  }
  get onmessage() {
    return this._onmessage;
  }
  set onerror(listener) {
    this.removeEventListener("error", this._onerror);
    this._onerror = listener;
    if (listener !== null) {
      this.addEventListener("error", listener);
    }
  }
  get onerror() {
    return this._onerror;
  }
  set onclose(listener) {
    this.removeEventListener("close", this._onclose);
    this._onclose = listener;
    if (listener !== null) {
      this.addEventListener("close", listener);
    }
  }
  get onclose() {
    return this._onclose;
  }
  /**
   * @see https://websockets.spec.whatwg.org/#ref-for-dom-websocket-send%E2%91%A0
   */
  send(data) {
    if (this.readyState === this.CONNECTING) {
      this.close();
      throw new DOMException("InvalidStateError");
    }
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
      return;
    }
    this.bufferedAmount += getDataSize(data);
    queueMicrotask(() => {
      var _a2;
      this.bufferedAmount = 0;
      (_a2 = this[kOnSend]) == null ? void 0 : _a2.call(this, data);
    });
  }
  close(code = 1e3, reason) {
    invariant(code, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
    invariant(code === 1e3 || (code >= 3e3 && code <= 4999), WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
    this[kClose](code, reason);
  }
  [(kPassthroughPromise, kOnSend, kClose)](code = 1e3, reason, wasClean = true) {
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
      return;
    }
    this.readyState = this.CLOSING;
    queueMicrotask(() => {
      this.readyState = this.CLOSED;
      this.dispatchEvent(
        bindEvent(
          this,
          new CloseEvent("close", {
            code,
            reason,
            wasClean
          })
        )
      );
      this._onopen = null;
      this._onmessage = null;
      this._onerror = null;
      this._onclose = null;
    });
  }
  addEventListener(type, listener, options) {
    return super.addEventListener(type, listener, options);
  }
  removeEventListener(type, callback, options) {
    return super.removeEventListener(type, callback, options);
  }
};
WebSocketOverride.CONNECTING = 0;
WebSocketOverride.OPEN = 1;
WebSocketOverride.CLOSING = 2;
WebSocketOverride.CLOSED = 3;
function getDataSize(data) {
  if (typeof data === "string") {
    return data.length;
  }
  if (data instanceof Blob) {
    return data.size;
  }
  return data.byteLength;
}
var kEmitter2 = Symbol("kEmitter");
var kBoundListener2 = Symbol("kBoundListener");
var kSend = Symbol("kSend");
var WebSocketServerConnection = class {
  constructor(client, transport, createConnection) {
    this.client = client;
    this.transport = transport;
    this.createConnection = createConnection;
    this[kEmitter2] = new EventTarget();
    this.mockCloseController = new AbortController();
    this.realCloseController = new AbortController();
    this.transport.addEventListener("outgoing", event => {
      if (typeof this.realWebSocket === "undefined") {
        return;
      }
      queueMicrotask(() => {
        if (!event.defaultPrevented) {
          this[kSend](event.data);
        }
      });
    });
    this.transport.addEventListener("incoming", this.handleIncomingMessage.bind(this));
  }
  /**
   * The `WebSocket` instance connected to the original server.
   * Accessing this before calling `server.connect()` will throw.
   */
  get socket() {
    invariant(
      this.realWebSocket,
      'Cannot access "socket" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?'
    );
    return this.realWebSocket;
  }
  /**
   * Open connection to the original WebSocket server.
   */
  connect() {
    invariant(
      !this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN,
      'Failed to call "connect()" on the original WebSocket instance: the connection already open'
    );
    const realWebSocket = this.createConnection();
    realWebSocket.binaryType = this.client.binaryType;
    realWebSocket.addEventListener(
      "open",
      event => {
        this[kEmitter2].dispatchEvent(bindEvent(this.realWebSocket, new Event("open", event)));
      },
      { once: true }
    );
    realWebSocket.addEventListener("message", event => {
      this.transport.dispatchEvent(
        bindEvent(
          this.realWebSocket,
          new MessageEvent("incoming", {
            data: event.data,
            origin: event.origin
          })
        )
      );
    });
    this.client.addEventListener(
      "close",
      event => {
        this.handleMockClose(event);
      },
      {
        signal: this.mockCloseController.signal
      }
    );
    realWebSocket.addEventListener(
      "close",
      event => {
        this.handleRealClose(event);
      },
      {
        signal: this.realCloseController.signal
      }
    );
    realWebSocket.addEventListener("error", () => {
      const errorEvent = bindEvent(realWebSocket, new Event("error", { cancelable: true }));
      this[kEmitter2].dispatchEvent(errorEvent);
      if (!errorEvent.defaultPrevented) {
        this.client.dispatchEvent(bindEvent(this.client, new Event("error")));
      }
    });
    this.realWebSocket = realWebSocket;
  }
  /**
   * Listen for the incoming events from the original WebSocket server.
   */
  addEventListener(event, listener, options) {
    if (!Reflect.has(listener, kBoundListener2)) {
      const boundListener = listener.bind(this.client);
      Object.defineProperty(listener, kBoundListener2, {
        value: boundListener,
        enumerable: false
      });
    }
    this[kEmitter2].addEventListener(event, Reflect.get(listener, kBoundListener2), options);
  }
  /**
   * Remove the listener for the given event.
   */
  removeEventListener(event, listener, options) {
    this[kEmitter2].removeEventListener(event, Reflect.get(listener, kBoundListener2), options);
  }
  /**
   * Send data to the original WebSocket server.
   * @example
   * server.send('hello')
   * server.send(new Blob(['hello']))
   * server.send(new TextEncoder().encode('hello'))
   */
  send(data) {
    this[kSend](data);
  }
  [(kEmitter2, kSend)](data) {
    const { realWebSocket } = this;
    invariant(
      realWebSocket,
      'Failed to call "server.send()" for "%s": the connection is not open. Did you forget to call "server.connect()"?',
      this.client.url
    );
    if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) {
      return;
    }
    if (realWebSocket.readyState === WebSocket.CONNECTING) {
      realWebSocket.addEventListener(
        "open",
        () => {
          realWebSocket.send(data);
        },
        { once: true }
      );
      return;
    }
    realWebSocket.send(data);
  }
  /**
   * Close the actual server connection.
   */
  close() {
    const { realWebSocket } = this;
    invariant(
      realWebSocket,
      'Failed to close server connection for "%s": the connection is not open. Did you forget to call "server.connect()"?',
      this.client.url
    );
    this.realCloseController.abort();
    if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) {
      return;
    }
    realWebSocket.close();
    queueMicrotask(() => {
      this[kEmitter2].dispatchEvent(
        bindEvent(
          this.realWebSocket,
          new CancelableCloseEvent("close", {
            /**
             * @note `server.close()` in the interceptor
             * always results in clean closures.
             */
            code: 1e3,
            cancelable: true
          })
        )
      );
    });
  }
  handleIncomingMessage(event) {
    const messageEvent = bindEvent(
      event.target,
      new CancelableMessageEvent("message", {
        data: event.data,
        origin: event.origin,
        cancelable: true
      })
    );
    this[kEmitter2].dispatchEvent(messageEvent);
    if (!messageEvent.defaultPrevented) {
      this.client.dispatchEvent(
        bindEvent(
          /**
           * @note Bind the forwarded original server events
           * to the mock WebSocket instance so it would
           * dispatch them straight away.
           */
          this.client,
          // Clone the message event again to prevent
          // the "already being dispatched" exception.
          new MessageEvent("message", {
            data: event.data,
            origin: event.origin
          })
        )
      );
    }
  }
  handleMockClose(_event) {
    if (this.realWebSocket) {
      this.realWebSocket.close();
    }
  }
  handleRealClose(event) {
    this.mockCloseController.abort();
    const closeEvent = bindEvent(
      this.realWebSocket,
      new CancelableCloseEvent("close", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
        cancelable: true
      })
    );
    this[kEmitter2].dispatchEvent(closeEvent);
    if (!closeEvent.defaultPrevented) {
      this.client[kClose](event.code, event.reason);
    }
  }
};
var WebSocketClassTransport = class extends EventTarget {
  constructor(socket) {
    super();
    this.socket = socket;
    this.socket.addEventListener("close", event => {
      this.dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
    });
    this.socket[kOnSend] = data => {
      this.dispatchEvent(
        bindEvent(
          this.socket,
          // Dispatch this as cancelable because "client" connection
          // re-creates this message event (cannot dispatch the same event).
          new CancelableMessageEvent("outgoing", {
            data,
            origin: this.socket.url,
            cancelable: true
          })
        )
      );
    };
  }
  addEventListener(type, callback, options) {
    return super.addEventListener(type, callback, options);
  }
  dispatchEvent(event) {
    return super.dispatchEvent(event);
  }
  send(data) {
    queueMicrotask(() => {
      if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) {
        return;
      }
      const dispatchEvent = () => {
        this.socket.dispatchEvent(
          bindEvent(
            /**
             * @note Setting this event's "target" to the
             * WebSocket override instance is important.
             * This way it can tell apart original incoming events
             * (must be forwarded to the transport) from the
             * mocked message events like the one below
             * (must be dispatched on the client instance).
             */
            this.socket,
            new MessageEvent("message", {
              data,
              origin: this.socket.url
            })
          )
        );
      };
      if (this.socket.readyState === this.socket.CONNECTING) {
        this.socket.addEventListener(
          "open",
          () => {
            dispatchEvent();
          },
          { once: true }
        );
      } else {
        dispatchEvent();
      }
    });
  }
  close(code, reason) {
    this.socket[kClose](code, reason);
  }
};
var _WebSocketInterceptor = class extends Interceptor {
  constructor() {
    super(_WebSocketInterceptor.symbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal("WebSocket");
  }
  setup() {
    const originalWebSocketDescriptor = Object.getOwnPropertyDescriptor(globalThis, "WebSocket");
    const WebSocketProxy = new Proxy(globalThis.WebSocket, {
      construct: (target, args, newTarget) => {
        const [url, protocols] = args;
        const createConnection = () => {
          return Reflect.construct(target, args, newTarget);
        };
        const socket = new WebSocketOverride(url, protocols);
        const transport = new WebSocketClassTransport(socket);
        queueMicrotask(() => {
          try {
            const server = new WebSocketServerConnection(socket, transport, createConnection);
            const hasConnectionListeners = this.emitter.emit("connection", {
              client: new WebSocketClientConnection(socket, transport),
              server,
              info: {
                protocols
              }
            });
            if (hasConnectionListeners) {
              socket[kPassthroughPromise].resolve(false);
            } else {
              socket[kPassthroughPromise].resolve(true);
              server.connect();
              server.addEventListener("open", () => {
                socket.dispatchEvent(bindEvent(socket, new Event("open")));
                if (server["realWebSocket"]) {
                  socket.protocol = server["realWebSocket"].protocol;
                }
              });
            }
          } catch (error2) {
            if (error2 instanceof Error) {
              socket.dispatchEvent(new Event("error"));
              if (socket.readyState !== WebSocket.CLOSING && socket.readyState !== WebSocket.CLOSED) {
                socket[kClose](1011, error2.message, false);
              }
              console.error(error2);
            }
          }
        });
        return socket;
      }
    });
    Object.defineProperty(globalThis, "WebSocket", {
      value: WebSocketProxy,
      configurable: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis, "WebSocket", originalWebSocketDescriptor);
    });
  }
};
var WebSocketInterceptor = _WebSocketInterceptor;
WebSocketInterceptor.symbol = Symbol("websocket");

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/ws/webSocketInterceptor.mjs
var webSocketInterceptor = new WebSocketInterceptor();

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/ws/handleWebSocketEvent.mjs
function handleWebSocketEvent(options) {
  webSocketInterceptor.on("connection", async connection => {
    const handlers = options.getHandlers();
    const connectionEvent = new MessageEvent("connection", {
      data: connection
    });
    const matchingHandlers = [];
    for (const handler of handlers) {
      if (
        isHandlerKind("EventHandler")(handler) &&
        handler.predicate({
          event: connectionEvent,
          parsedResult: handler.parse({
            event: connectionEvent
          })
        })
      ) {
        matchingHandlers.push(handler);
      }
    }
    if (matchingHandlers.length > 0) {
      options == null ? void 0 : options.onMockedConnection(connection);
      for (const handler of matchingHandlers) {
        handler[kDispatchEvent](connectionEvent);
      }
    } else {
      const request = new Request(connection.client.url, {
        headers: {
          upgrade: "websocket",
          connection: "upgrade"
        }
      });
      await onUnhandledRequest(request, options.getUnhandledRequestStrategy()).catch(error2 => {
        const errorEvent = new Event("error");
        Object.defineProperty(errorEvent, "cause", {
          enumerable: true,
          configurable: false,
          value: error2
        });
        connection.client.socket.dispatchEvent(errorEvent);
      });
      options == null ? void 0 : options.onPassthroughConnection(connection);
      connection.server.connect();
    }
  });
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/ws/utils/getMessageLength.mjs
function getMessageLength(data) {
  if (data instanceof Blob) {
    return data.size;
  }
  if (data instanceof ArrayBuffer) {
    return data.byteLength;
  }
  return new Blob([data]).size;
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/ws/utils/truncateMessage.mjs
var MAX_LENGTH = 24;
function truncateMessage(message) {
  if (message.length <= MAX_LENGTH) {
    return message;
  }
  return `${message.slice(0, MAX_LENGTH)}…`;
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/ws/utils/getPublicData.mjs
async function getPublicData(data) {
  if (data instanceof Blob) {
    const text = await data.text();
    return `Blob(${truncateMessage(text)})`;
  }
  if (typeof data === "object" && "byteLength" in data) {
    const text = new TextDecoder().decode(data);
    return `ArrayBuffer(${truncateMessage(text)})`;
  }
  return truncateMessage(data);
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/ws/utils/attachWebSocketLogger.mjs
var colors = {
  system: "#3b82f6",
  outgoing: "#22c55e",
  incoming: "#ef4444",
  mocked: "#ff6a33"
};
function attachWebSocketLogger(connection) {
  const { client, server } = connection;
  logConnectionOpen(client);
  client.addEventListener("message", event => {
    logOutgoingClientMessage(event);
  });
  client.addEventListener("close", event => {
    logConnectionClose(event);
  });
  client.socket.addEventListener("error", event => {
    logClientError(event);
  });
  client.send = new Proxy(client.send, {
    apply(target, thisArg, args) {
      const [data] = args;
      const messageEvent = new MessageEvent("message", { data });
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: client.socket
        },
        target: {
          enumerable: true,
          writable: false,
          value: client.socket
        }
      });
      queueMicrotask(() => {
        logIncomingMockedClientMessage(messageEvent);
      });
      return Reflect.apply(target, thisArg, args);
    }
  });
  server.addEventListener(
    "open",
    () => {
      server.addEventListener("message", event => {
        logIncomingServerMessage(event);
      });
    },
    { once: true }
  );
  server.send = new Proxy(server.send, {
    apply(target, thisArg, args) {
      const [data] = args;
      const messageEvent = new MessageEvent("message", { data });
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: server.socket
        },
        target: {
          enumerable: true,
          writable: false,
          value: server.socket
        }
      });
      logOutgoingMockedClientMessage(messageEvent);
      return Reflect.apply(target, thisArg, args);
    }
  });
}
function logConnectionOpen(client) {
  const publicUrl = toPublicUrl(client.url);
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp()} %c▶%c ${publicUrl}`),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log("Client:", client.socket);
  console.groupEnd();
}
function logConnectionClose(event) {
  const target = event.target;
  const publicUrl = toPublicUrl(target.url);
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp({ milliseconds: true })} %c■%c ${publicUrl}`),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log(event);
  console.groupEnd();
}
function logClientError(event) {
  const socket = event.target;
  const publicUrl = toPublicUrl(socket.url);
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp({ milliseconds: true })} %c×%c ${publicUrl}`),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logOutgoingClientMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  const arrow = event.defaultPrevented ? "⇡" : "⬆";
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`),
    `color:${colors.outgoing}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logOutgoingMockedClientMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp({ milliseconds: true })} %c⬆%c ${publicData} %c${byteLength}%c`),
    `color:${colors.mocked}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logIncomingMockedClientMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp({ milliseconds: true })} %c⬇%c ${publicData} %c${byteLength}%c`),
    `color:${colors.mocked}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logIncomingServerMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  const arrow = event.defaultPrevented ? "⇣" : "⬇";
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`),
    `color:${colors.incoming}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}

// ../node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/browser/index.mjs
var POSITIONALS_EXP = /(%?)(%([sdijo]))/g;
function serializePositional(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format(message, ...positionals) {
  if (positionals.length === 0) {
    return message;
  }
  let positionalIndex = 0;
  let formattedMessage = message.replace(POSITIONALS_EXP, (match, isEscaped, _, flag) => {
    const positional = positionals[positionalIndex];
    const value = serializePositional(positional, flag);
    if (!isEscaped) {
      positionalIndex++;
      return value;
    }
    return match;
  });
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE = 2;
function cleanErrorStack(error2) {
  if (!error2.stack) {
    return;
  }
  const nextStack = error2.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
  error2.stack = nextStack.join("\n");
}
var InvariantError = class extends Error {
  constructor(message, ...positionals) {
    super(message);
    this.message = message;
    this.name = "Invariant Violation";
    this.message = format(message, ...positionals);
    cleanErrorStack(this);
  }
};
var invariant2 = (predicate, message, ...positionals) => {
  if (!predicate) {
    throw new InvariantError(message, ...positionals);
  }
};
invariant2.as = (ErrorConstructor, predicate, message, ...positionals) => {
  if (!predicate) {
    const formatMessage = positionals.length === 0 ? message : format(message, ...positionals);
    let error2;
    try {
      error2 = Reflect.construct(ErrorConstructor, [formatMessage]);
    } catch (err) {
      error2 = ErrorConstructor(formatMessage);
    }
    throw error2;
  }
};
function isNodeProcess() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return true;
  }
  if (typeof process !== "undefined") {
    const type = process.type;
    if (type === "renderer" || type === "worker") {
      return false;
    }
    return !!(process.versions && process.versions.node);
  }
  return false;
}
var until = async promise => {
  try {
    const data = await promise().catch(error2 => {
      throw error2;
    });
    return { error: null, data };
  } catch (error2) {
    return { error: error2, data: null };
  }
};
function getAbsoluteWorkerUrl(workerUrl) {
  return new URL(workerUrl, location.href).href;
}
function getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker) {
  const allStates = [registration.active, registration.installing, registration.waiting];
  const relevantStates = allStates.filter(state => {
    return state != null;
  });
  const worker = relevantStates.find(worker2 => {
    return findWorker(worker2.scriptURL, absoluteWorkerUrl);
  });
  return worker || null;
}
var getWorkerInstance = async (url, options = {}, findWorker) => {
  const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
  const mockRegistrations = await navigator.serviceWorker
    .getRegistrations()
    .then(registrations =>
      registrations.filter(registration => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker))
    );
  if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
    location.reload();
  }
  const [existingRegistration] = mockRegistrations;
  if (existingRegistration) {
    existingRegistration.update();
    return [getWorkerByRegistration(existingRegistration, absoluteWorkerUrl, findWorker), existingRegistration];
  }
  const registrationResult = await until(async () => {
    const registration = await navigator.serviceWorker.register(url, options);
    return [
      // Compare existing worker registration by its worker URL,
      // to prevent irrelevant workers to resolve here (such as Codesandbox worker).
      getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
      registration
    ];
  });
  if (registrationResult.error) {
    const isWorkerMissing = registrationResult.error.message.includes("(404)");
    if (isWorkerMissing) {
      const scopeUrl = new URL((options == null ? void 0 : options.scope) || "/", location.href);
      throw new Error(
        devUtils.formatMessage(`Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(devUtils.formatMessage("Failed to register the Service Worker:\n\n%s", registrationResult.error.message));
  }
  return registrationResult.data;
};
function printStartMessage(args = {}) {
  if (args.quiet) {
    return;
  }
  const message = args.message || "Mocking enabled.";
  console.groupCollapsed(`%c${devUtils.formatMessage(message)}`, "color:orangered;font-weight:bold;");
  console.log("%cDocumentation: %chttps://mswjs.io/docs", "font-weight:bold", "font-weight:normal");
  console.log("Found an issue? https://github.com/mswjs/msw/issues");
  if (args.workerUrl) {
    console.log("Worker script URL:", args.workerUrl);
  }
  if (args.workerScope) {
    console.log("Worker scope:", args.workerScope);
  }
  if (args.client) {
    console.log("Client ID: %s (%s)", args.client.id, args.client.frameType);
  }
  console.groupEnd();
}
async function enableMocking(context, options) {
  var _a2, _b;
  context.workerChannel.send("MOCK_ACTIVATE");
  const { payload } = await context.events.once("MOCKING_ENABLED");
  if (context.isMockingEnabled) {
    devUtils.warn(
      `Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.`
    );
    return;
  }
  context.isMockingEnabled = true;
  printStartMessage({
    quiet: options.quiet,
    workerScope: (_a2 = context.registration) == null ? void 0 : _a2.scope,
    workerUrl: (_b = context.worker) == null ? void 0 : _b.scriptURL,
    client: payload.client
  });
}
var WorkerChannel = class {
  constructor(port) {
    this.port = port;
  }
  postMessage(event, ...rest) {
    const [data, transfer] = rest;
    this.port.postMessage({ type: event, data }, { transfer });
  }
};
function pruneGetRequestBody(request) {
  if (["HEAD", "GET"].includes(request.method)) {
    return void 0;
  }
  return request.body;
}
function parseWorkerRequest(incomingRequest) {
  return new Request(incomingRequest.url, {
    ...incomingRequest,
    body: pruneGetRequestBody(incomingRequest)
  });
}
var createRequestListener = (context, options) => {
  return async (event, message) => {
    const messageChannel = new WorkerChannel(event.ports[0]);
    const requestId = message.payload.id;
    const request = parseWorkerRequest(message.payload);
    const requestCloneForLogs = request.clone();
    const requestClone = request.clone();
    RequestHandler.cache.set(request, requestClone);
    context.requests.set(requestId, requestClone);
    try {
      await handleRequest(
        request,
        requestId,
        context.getRequestHandlers().filter(isHandlerKind("RequestHandler")),
        options,
        context.emitter,
        {
          onPassthroughResponse() {
            messageChannel.postMessage("PASSTHROUGH");
          },
          async onMockedResponse(response, { handler, parsedResult }) {
            const responseClone = response.clone();
            const responseCloneForLogs = response.clone();
            const responseInit = toResponseInit(response);
            if (context.supports.readableStreamTransfer) {
              const responseStreamOrNull = response.body;
              messageChannel.postMessage(
                "MOCK_RESPONSE",
                {
                  ...responseInit,
                  body: responseStreamOrNull
                },
                responseStreamOrNull ? [responseStreamOrNull] : void 0
              );
            } else {
              const responseBufferOrNull = response.body === null ? null : await responseClone.arrayBuffer();
              messageChannel.postMessage("MOCK_RESPONSE", {
                ...responseInit,
                body: responseBufferOrNull
              });
            }
            if (!options.quiet) {
              context.emitter.once("response:mocked", () => {
                handler.log({
                  request: requestCloneForLogs,
                  response: responseCloneForLogs,
                  parsedResult
                });
              });
            }
          }
        }
      );
    } catch (error2) {
      if (error2 instanceof Error) {
        devUtils.error(
          `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
          request.method,
          request.url,
          error2.stack ?? error2
        );
        messageChannel.postMessage("MOCK_RESPONSE", {
          status: 500,
          statusText: "Request Handler Error",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: error2.name,
            message: error2.message,
            stack: error2.stack
          })
        });
      }
    }
  };
};
async function checkWorkerIntegrity(context) {
  context.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload } = await context.events.once("INTEGRITY_CHECK_RESPONSE");
  if (payload.checksum !== "00729d72e3b82faf54ca8b9621dbb96f") {
    devUtils.warn(
      `The currently registered Service Worker has been generated by a different version of MSW (${payload.packageVersion}) and may not be fully compatible with the installed version.

It's recommended you update your worker script by running this command:

  • npx msw init <PUBLIC_DIR>

You can also automate this process and make the worker script update automatically upon the library installations. Read more: https://mswjs.io/docs/cli/init.`
    );
  }
}
var encoder = new TextEncoder();
function encodeBuffer(text) {
  return encoder.encode(text);
}
function decodeBuffer(buffer, encoding) {
  const decoder = new TextDecoder(encoding);
  return decoder.decode(buffer);
}
function toArrayBuffer(array) {
  return array.buffer.slice(array.byteOffset, array.byteOffset + array.byteLength);
}
var IS_PATCHED_MODULE = Symbol("isPatchedModule");
var _FetchResponse = class extends Response {
  static isConfigurableStatusCode(status) {
    return status >= 200 && status <= 599;
  }
  static isRedirectResponse(status) {
    return _FetchResponse.STATUS_CODES_WITH_REDIRECT.includes(status);
  }
  /**
   * Returns a boolean indicating whether the given response status
   * code represents a response that can have a body.
   */
  static isResponseWithBody(status) {
    return !_FetchResponse.STATUS_CODES_WITHOUT_BODY.includes(status);
  }
  static setUrl(url, response) {
    if (!url) {
      return;
    }
    if (response.url != "") {
      return;
    }
    Object.defineProperty(response, "url", {
      value: url,
      enumerable: true,
      configurable: true,
      writable: false
    });
  }
  constructor(body, init = {}) {
    var _a2;
    const status = (_a2 = init.status) != null ? _a2 : 200;
    const safeStatus = _FetchResponse.isConfigurableStatusCode(status) ? status : 200;
    const finalBody = _FetchResponse.isResponseWithBody(status) ? body : null;
    super(finalBody, {
      ...init,
      status: safeStatus
    });
    if (status !== safeStatus) {
      const stateSymbol = Object.getOwnPropertySymbols(this).find(symbol => symbol.description === "state");
      if (stateSymbol) {
        const state = Reflect.get(this, stateSymbol);
        Reflect.set(state, "status", status);
      } else {
        Object.defineProperty(this, "status", {
          value: status,
          enumerable: true,
          configurable: true,
          writable: false
        });
      }
    }
    _FetchResponse.setUrl(init.url, this);
  }
};
var FetchResponse = _FetchResponse;
FetchResponse.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
FetchResponse.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var colors_exports = {};
__export(colors_exports, {
  blue: () => blue,
  gray: () => gray,
  green: () => green,
  red: () => red,
  yellow: () => yellow
});
function yellow(text) {
  return `\x1B[33m${text}\x1B[0m`;
}
function blue(text) {
  return `\x1B[34m${text}\x1B[0m`;
}
function gray(text) {
  return `\x1B[90m${text}\x1B[0m`;
}
function red(text) {
  return `\x1B[31m${text}\x1B[0m`;
}
function green(text) {
  return `\x1B[32m${text}\x1B[0m`;
}
var IS_NODE = isNodeProcess();
var Logger = class {
  constructor(name) {
    __publicField(this, "prefix");
    this.name = name;
    this.prefix = `[${this.name}]`;
    const LOGGER_NAME = getVariable("DEBUG");
    const LOGGER_LEVEL = getVariable("LOG_LEVEL");
    const isLoggingEnabled =
      LOGGER_NAME === "1" || LOGGER_NAME === "true" || (typeof LOGGER_NAME !== "undefined" && this.name.startsWith(LOGGER_NAME));
    if (isLoggingEnabled) {
      this.debug = isDefinedAndNotEquals(LOGGER_LEVEL, "debug") ? noop : this.debug;
      this.info = isDefinedAndNotEquals(LOGGER_LEVEL, "info") ? noop : this.info;
      this.success = isDefinedAndNotEquals(LOGGER_LEVEL, "success") ? noop : this.success;
      this.warning = isDefinedAndNotEquals(LOGGER_LEVEL, "warning") ? noop : this.warning;
      this.error = isDefinedAndNotEquals(LOGGER_LEVEL, "error") ? noop : this.error;
    } else {
      this.info = noop;
      this.success = noop;
      this.warning = noop;
      this.error = noop;
      this.only = noop;
    }
  }
  extend(domain) {
    return new Logger(`${this.name}:${domain}`);
  }
  /**
   * Print a debug message.
   * @example
   * logger.debug('no duplicates found, creating a document...')
   */
  debug(message, ...positionals) {
    this.logEntry({
      level: "debug",
      message: gray(message),
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "gray"
      }
    });
  }
  /**
   * Print an info message.
   * @example
   * logger.info('start parsing...')
   */
  info(message, ...positionals) {
    this.logEntry({
      level: "info",
      message,
      positionals,
      prefix: this.prefix,
      colors: {
        prefix: "blue"
      }
    });
    const performance2 = new PerformanceEntry();
    return (message2, ...positionals2) => {
      performance2.measure();
      this.logEntry({
        level: "info",
        message: `${message2} ${gray(`${performance2.deltaTime}ms`)}`,
        positionals: positionals2,
        prefix: this.prefix,
        colors: {
          prefix: "blue"
        }
      });
    };
  }
  /**
   * Print a success message.
   * @example
   * logger.success('successfully created document')
   */
  success(message, ...positionals) {
    this.logEntry({
      level: "info",
      message,
      positionals,
      prefix: `✔ ${this.prefix}`,
      colors: {
        timestamp: "green",
        prefix: "green"
      }
    });
  }
  /**
   * Print a warning.
   * @example
   * logger.warning('found legacy document format')
   */
  warning(message, ...positionals) {
    this.logEntry({
      level: "warning",
      message,
      positionals,
      prefix: `⚠ ${this.prefix}`,
      colors: {
        timestamp: "yellow",
        prefix: "yellow"
      }
    });
  }
  /**
   * Print an error message.
   * @example
   * logger.error('something went wrong')
   */
  error(message, ...positionals) {
    this.logEntry({
      level: "error",
      message,
      positionals,
      prefix: `✖ ${this.prefix}`,
      colors: {
        timestamp: "red",
        prefix: "red"
      }
    });
  }
  /**
   * Execute the given callback only when the logging is enabled.
   * This is skipped in its entirety and has no runtime cost otherwise.
   * This executes regardless of the log level.
   * @example
   * logger.only(() => {
   *   logger.info('additional info')
   * })
   */
  only(callback) {
    callback();
  }
  createEntry(level, message) {
    return {
      timestamp: /* @__PURE__ */ new Date(),
      level,
      message
    };
  }
  logEntry(args) {
    const { level, message, prefix, colors: customColors, positionals = [] } = args;
    const entry = this.createEntry(level, message);
    const timestampColor = (customColors == null ? void 0 : customColors.timestamp) || "gray";
    const prefixColor = (customColors == null ? void 0 : customColors.prefix) || "gray";
    const colorize = {
      timestamp: colors_exports[timestampColor],
      prefix: colors_exports[prefixColor]
    };
    const write = this.getWriter(level);
    write(
      [colorize.timestamp(this.formatTimestamp(entry.timestamp))]
        .concat(prefix != null ? colorize.prefix(prefix) : [])
        .concat(serializeInput(message))
        .join(" "),
      ...positionals.map(serializeInput)
    );
  }
  formatTimestamp(timestamp) {
    return `${timestamp.toLocaleTimeString("en-GB")}:${timestamp.getMilliseconds()}`;
  }
  getWriter(level) {
    switch (level) {
      case "debug":
      case "success":
      case "info": {
        return log;
      }
      case "warning": {
        return warn;
      }
      case "error": {
        return error;
      }
    }
  }
};
var PerformanceEntry = class {
  constructor() {
    __publicField(this, "startTime");
    __publicField(this, "endTime");
    __publicField(this, "deltaTime");
    this.startTime = performance.now();
  }
  measure() {
    this.endTime = performance.now();
    const deltaTime = this.endTime - this.startTime;
    this.deltaTime = deltaTime.toFixed(2);
  }
};
var noop = () => void 0;
function log(message, ...positionals) {
  if (IS_NODE) {
    process.stdout.write(format(message, ...positionals) + "\n");
    return;
  }
  console.log(message, ...positionals);
}
function warn(message, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message, ...positionals) + "\n");
    return;
  }
  console.warn(message, ...positionals);
}
function error(message, ...positionals) {
  if (IS_NODE) {
    process.stderr.write(format(message, ...positionals) + "\n");
    return;
  }
  console.error(message, ...positionals);
}
function getVariable(variableName) {
  var _a2;
  if (IS_NODE) {
    return process.env[variableName];
  }
  return (_a2 = globalThis[variableName]) == null ? void 0 : _a2.toString();
}
function isDefinedAndNotEquals(value, expected) {
  return value !== void 0 && value !== expected;
}
function serializeInput(message) {
  if (typeof message === "undefined") {
    return "undefined";
  }
  if (message === null) {
    return "null";
  }
  if (typeof message === "string") {
    return message;
  }
  if (typeof message === "object") {
    return JSON.stringify(message);
  }
  return message.toString();
}
var MemoryLeakError = class extends Error {
  constructor(emitter, type, count) {
    super(
      `Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    this.emitter = emitter;
    this.type = type;
    this.count = count;
    this.name = "MaxListenersExceededWarning";
  }
};
var _Emitter = class {
  static listenerCount(emitter, eventName) {
    return emitter.listenerCount(eventName);
  }
  constructor() {
    this.events = /* @__PURE__ */ new Map();
    this.maxListeners = _Emitter.defaultMaxListeners;
    this.hasWarnedAboutPotentialMemoryLeak = false;
  }
  _emitInternalEvent(internalEventName, eventName, listener) {
    this.emit(internalEventName, ...[eventName, listener]);
  }
  _getListeners(eventName) {
    return Array.prototype.concat.apply([], this.events.get(eventName)) || [];
  }
  _removeListener(listeners, listener) {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
    return [];
  }
  _wrapOnceListener(eventName, listener) {
    const onceListener = (...data) => {
      this.removeListener(eventName, onceListener);
      return listener.apply(this, data);
    };
    Object.defineProperty(onceListener, "name", { value: listener.name });
    return onceListener;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  /**
   * Returns the current max listener value for the `Emitter` which is
   * either set by `emitter.setMaxListeners(n)` or defaults to
   * `Emitter.defaultMaxListeners`.
   */
  getMaxListeners() {
    return this.maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners.
   * The values in the array will be strings or Symbols.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns `true` if the event has listeners, `false` otherwise.
   *
   * @example
   * const emitter = new Emitter<{ hello: [string] }>()
   * emitter.emit('hello', 'John')
   */
  emit(eventName, ...data) {
    const listeners = this._getListeners(eventName);
    listeners.forEach(listener => {
      listener.apply(this, data);
    });
    return listeners.length > 0;
  }
  addListener(eventName, listener) {
    this._emitInternalEvent("newListener", eventName, listener);
    const nextListeners = this._getListeners(eventName).concat(listener);
    this.events.set(eventName, nextListeners);
    if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
      this.hasWarnedAboutPotentialMemoryLeak = true;
      const memoryLeakWarning = new MemoryLeakError(this, eventName, this.listenerCount(eventName));
      console.warn(memoryLeakWarning);
    }
    return this;
  }
  on(eventName, listener) {
    return this.addListener(eventName, listener);
  }
  once(eventName, listener) {
    return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
  }
  prependListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      const nextListeners = [listener].concat(listeners);
      this.events.set(eventName, nextListeners);
    } else {
      this.events.set(eventName, listeners.concat(listener));
    }
    return this;
  }
  prependOnceListener(eventName, listener) {
    return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
  }
  removeListener(eventName, listener) {
    const listeners = this._getListeners(eventName);
    if (listeners.length > 0) {
      this._removeListener(listeners, listener);
      this.events.set(eventName, listeners);
      this._emitInternalEvent("removeListener", eventName, listener);
    }
    return this;
  }
  /**
   * Alias for `emitter.removeListener()`.
   *
   * @example
   * emitter.off('hello', listener)
   */
  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }
  removeAllListeners(eventName) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
    return this;
  }
  /**
   * Returns a copy of the array of listeners for the event named `eventName`.
   */
  listeners(eventName) {
    return Array.from(this._getListeners(eventName));
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   */
  listenerCount(eventName) {
    return this._getListeners(eventName).length;
  }
  rawListeners(eventName) {
    return this.listeners(eventName);
  }
};
var Emitter = _Emitter;
Emitter.defaultMaxListeners = 10;
var INTERNAL_REQUEST_ID_HEADER_NAME = "x-interceptors-internal-request-id";
function getGlobalSymbol(symbol) {
  return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || void 0
  );
}
function setGlobalSymbol(symbol, value) {
  globalThis[symbol] = value;
}
function deleteGlobalSymbol(symbol) {
  delete globalThis[symbol];
}
var Interceptor2 = class {
  constructor(symbol) {
    this.symbol = symbol;
    this.readyState = "INACTIVE";
    this.emitter = new Emitter();
    this.subscriptions = [];
    this.logger = new Logger(symbol.description);
    this.emitter.setMaxListeners(0);
    this.logger.info("constructing the interceptor...");
  }
  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  checkEnvironment() {
    return true;
  }
  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  apply() {
    const logger = this.logger.extend("apply");
    logger.info("applying the interceptor...");
    if (this.readyState === "APPLIED") {
      logger.info("intercepted already applied!");
      return;
    }
    const shouldApply = this.checkEnvironment();
    if (!shouldApply) {
      logger.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = "APPLYING";
    const runningInstance = this.getInstance();
    if (runningInstance) {
      logger.info("found a running instance, reusing...");
      this.on = (event, listener) => {
        logger.info('proxying the "%s" listener', event);
        runningInstance.emitter.addListener(event, listener);
        this.subscriptions.push(() => {
          runningInstance.emitter.removeListener(event, listener);
          logger.info('removed proxied "%s" listener!', event);
        });
        return this;
      };
      this.readyState = "APPLIED";
      return;
    }
    logger.info("no running instance found, setting up a new instance...");
    this.setup();
    this.setInstance();
    this.readyState = "APPLIED";
  }
  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  setup() {}
  /**
   * Listen to the interceptor's public events.
   */
  on(event, listener) {
    const logger = this.logger.extend("on");
    if (this.readyState === "DISPOSING" || this.readyState === "DISPOSED") {
      logger.info("cannot listen to events, already disposed!");
      return this;
    }
    logger.info('adding "%s" event listener:', event, listener);
    this.emitter.on(event, listener);
    return this;
  }
  once(event, listener) {
    this.emitter.once(event, listener);
    return this;
  }
  off(event, listener) {
    this.emitter.off(event, listener);
    return this;
  }
  removeAllListeners(event) {
    this.emitter.removeAllListeners(event);
    return this;
  }
  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  dispose() {
    const logger = this.logger.extend("dispose");
    if (this.readyState === "DISPOSED") {
      logger.info("cannot dispose, already disposed!");
      return;
    }
    logger.info("disposing the interceptor...");
    this.readyState = "DISPOSING";
    if (!this.getInstance()) {
      logger.info("no interceptors running, skipping dispose...");
      return;
    }
    this.clearInstance();
    logger.info("global symbol deleted:", getGlobalSymbol(this.symbol));
    if (this.subscriptions.length > 0) {
      logger.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const dispose of this.subscriptions) {
        dispose();
      }
      this.subscriptions = [];
      logger.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners();
    logger.info("destroyed the listener!");
    this.readyState = "DISPOSED";
  }
  getInstance() {
    var _a2;
    const instance = getGlobalSymbol(this.symbol);
    this.logger.info(
      "retrieved global instance:",
      (_a2 = instance == null ? void 0 : instance.constructor) == null ? void 0 : _a2.name
    );
    return instance;
  }
  setInstance() {
    setGlobalSymbol(this.symbol, this);
    this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    deleteGlobalSymbol(this.symbol);
    this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function createRequestId2() {
  return Math.random().toString(16).slice(2);
}
var BatchInterceptor = class extends Interceptor2 {
  constructor(options) {
    BatchInterceptor.symbol = Symbol(options.name);
    super(BatchInterceptor.symbol);
    this.interceptors = options.interceptors;
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info("applying all %d interceptors...", this.interceptors.length);
    for (const interceptor of this.interceptors) {
      logger.info('applying "%s" interceptor...', interceptor.constructor.name);
      interceptor.apply();
      logger.info("adding interceptor dispose subscription");
      this.subscriptions.push(() => interceptor.dispose());
    }
  }
  on(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.on(event, listener);
    }
    return this;
  }
  once(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.once(event, listener);
    }
    return this;
  }
  off(event, listener) {
    for (const interceptor of this.interceptors) {
      interceptor.off(event, listener);
    }
    return this;
  }
  removeAllListeners(event) {
    for (const interceptors of this.interceptors) {
      interceptors.removeAllListeners(event);
    }
    return this;
  }
};
function createResponseListener(context) {
  return (_, message) => {
    var _a2;
    const { payload: responseJson } = message;
    const { requestId } = responseJson;
    const request = context.requests.get(requestId);
    context.requests.delete(requestId);
    if ((_a2 = responseJson.type) == null ? void 0 : _a2.includes("opaque")) {
      return;
    }
    const response =
      responseJson.status === 0
        ? Response.error()
        : new FetchResponse(
            /**
             * Responses may be streams here, but when we create a response object
             * with null-body status codes, like 204, 205, 304 Response will
             * throw when passed a non-null body, so ensure it's null here
             * for those codes
             */
            FetchResponse.isResponseWithBody(responseJson.status) ? responseJson.body : null,
            {
              ...responseJson,
              /**
               * Set response URL if it's not set already.
               * @see https://github.com/mswjs/msw/issues/2030
               * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/url
               */
              url: request.url
            }
          );
    context.emitter.emit(responseJson.isMockedResponse ? "response:mocked" : "response:bypass", {
      response,
      request,
      requestId: responseJson.requestId
    });
  };
}
function validateWorkerScope(registration, options) {
  if (!(options == null ? void 0 : options.quiet) && !location.href.startsWith(registration.scope)) {
    devUtils.warn(
      `Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`
    );
  }
}
var createStartHandler = context => {
  return function start(options, customOptions) {
    const startWorkerInstance = async () => {
      context.events.removeAllListeners();
      context.workerChannel.on("REQUEST", createRequestListener(context, options));
      context.workerChannel.on("RESPONSE", createResponseListener(context));
      const instance = await getWorkerInstance(options.serviceWorker.url, options.serviceWorker.options, options.findWorker);
      const [worker, registration] = instance;
      if (!worker) {
        const missingWorkerMessage = (customOptions == null ? void 0 : customOptions.findWorker)
          ? devUtils.formatMessage(
              `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
              options.serviceWorker.url
            )
          : devUtils.formatMessage(
              `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
              options.serviceWorker.url,
              location.host
            );
        throw new Error(missingWorkerMessage);
      }
      context.worker = worker;
      context.registration = registration;
      context.events.addListener(window, "beforeunload", () => {
        if (worker.state !== "redundant") {
          context.workerChannel.send("CLIENT_CLOSED");
        }
        window.clearInterval(context.keepAliveInterval);
        window.postMessage({ type: "msw/worker:stop" });
      });
      await checkWorkerIntegrity(context).catch(error2 => {
        devUtils.error(
          "Error while checking the worker script integrity. Please report this on GitHub (https://github.com/mswjs/msw/issues), including the original error below."
        );
        console.error(error2);
      });
      context.keepAliveInterval = window.setInterval(() => context.workerChannel.send("KEEPALIVE_REQUEST"), 5e3);
      validateWorkerScope(registration, context.startOptions);
      return registration;
    };
    const workerRegistration = startWorkerInstance().then(async registration => {
      const pendingInstance = registration.installing || registration.waiting;
      if (pendingInstance) {
        await new Promise(resolve => {
          pendingInstance.addEventListener("statechange", () => {
            if (pendingInstance.state === "activated") {
              return resolve();
            }
          });
        });
      }
      await enableMocking(context, options).catch(error2 => {
        throw new Error(`Failed to enable mocking: ${error2 == null ? void 0 : error2.message}`);
      });
      return registration;
    });
    return workerRegistration;
  };
};
function printStopMessage(args = {}) {
  if (args.quiet) {
    return;
  }
  console.log(`%c${devUtils.formatMessage("Mocking disabled.")}`, "color:orangered;font-weight:bold;");
}
var createStop = context => {
  return function stop() {
    var _a2;
    if (!context.isMockingEnabled) {
      devUtils.warn(
        'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
      );
      return;
    }
    context.workerChannel.send("MOCK_DEACTIVATE");
    context.isMockingEnabled = false;
    window.clearInterval(context.keepAliveInterval);
    window.postMessage({ type: "msw/worker:stop" });
    printStopMessage({ quiet: (_a2 = context.startOptions) == null ? void 0 : _a2.quiet });
  };
};
var DEFAULT_START_OPTIONS = {
  serviceWorker: {
    url: "/mockServiceWorker.js",
    options: null
  },
  quiet: false,
  waitUntilReady: true,
  onUnhandledRequest: "warn",
  findWorker(scriptURL, mockServiceWorkerUrl) {
    return scriptURL === mockServiceWorkerUrl;
  }
};
function createDeferredExecutor() {
  const executor = (resolve, reject) => {
    executor.state = "pending";
    executor.resolve = data => {
      if (executor.state !== "pending") {
        return;
      }
      executor.result = data;
      const onFulfilled = value => {
        executor.state = "fulfilled";
        return value;
      };
      return resolve(data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled));
    };
    executor.reject = reason => {
      if (executor.state !== "pending") {
        return;
      }
      queueMicrotask(() => {
        executor.state = "rejected";
      });
      return reject((executor.rejectionReason = reason));
    };
  };
  return executor;
}
var _executor, _DeferredPromise_instances, decorate_fn, _a;
var DeferredPromise2 =
  ((_a = class extends Promise {
    constructor(executor = null) {
      const deferredExecutor = createDeferredExecutor();
      super((originalResolve, originalReject) => {
        deferredExecutor(originalResolve, originalReject);
        executor == null ? void 0 : executor(deferredExecutor.resolve, deferredExecutor.reject);
      });
      __privateAdd(this, _DeferredPromise_instances);
      __privateAdd(this, _executor);
      __publicField(this, "resolve");
      __publicField(this, "reject");
      __privateSet(this, _executor, deferredExecutor);
      this.resolve = __privateGet(this, _executor).resolve;
      this.reject = __privateGet(this, _executor).reject;
    }
    get state() {
      return __privateGet(this, _executor).state;
    }
    get rejectionReason() {
      return __privateGet(this, _executor).rejectionReason;
    }
    then(onFulfilled, onRejected) {
      return __privateMethod(this, _DeferredPromise_instances, decorate_fn).call(this, super.then(onFulfilled, onRejected));
    }
    catch(onRejected) {
      return __privateMethod(this, _DeferredPromise_instances, decorate_fn).call(this, super.catch(onRejected));
    }
    finally(onfinally) {
      return __privateMethod(this, _DeferredPromise_instances, decorate_fn).call(this, super.finally(onfinally));
    }
  }),
  (_executor = new WeakMap()),
  (_DeferredPromise_instances = new WeakSet()),
  (decorate_fn = function (promise) {
    return Object.defineProperties(promise, {
      resolve: { configurable: true, value: this.resolve },
      reject: { configurable: true, value: this.reject }
    });
  }),
  _a);
var InterceptorError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "InterceptorError";
    Object.setPrototypeOf(this, InterceptorError.prototype);
  }
};
var kRequestHandled = Symbol("kRequestHandled");
var kResponsePromise = Symbol("kResponsePromise");
var RequestController = class {
  constructor(request) {
    this.request = request;
    this[kRequestHandled] = false;
    this[kResponsePromise] = new DeferredPromise2();
  }
  /**
   * Respond to this request with the given `Response` instance.
   * @example
   * controller.respondWith(new Response())
   * controller.respondWith(Response.json({ id }))
   * controller.respondWith(Response.error())
   */
  respondWith(response) {
    invariant2.as(
      InterceptorError,
      !this[kRequestHandled],
      'Failed to respond to the "%s %s" request: the "request" event has already been handled.',
      this.request.method,
      this.request.url
    );
    this[kRequestHandled] = true;
    this[kResponsePromise].resolve(response);
  }
  /**
   * Error this request with the given error.
   * @example
   * controller.errorWith()
   * controller.errorWith(new Error('Oops!'))
   */
  errorWith(error2) {
    invariant2.as(
      InterceptorError,
      !this[kRequestHandled],
      'Failed to error the "%s %s" request: the "request" event has already been handled.',
      this.request.method,
      this.request.url
    );
    this[kRequestHandled] = true;
    this[kResponsePromise].resolve(error2);
  }
};
async function emitAsync(emitter, eventName, ...data) {
  const listners = emitter.listeners(eventName);
  if (listners.length === 0) {
    return;
  }
  for (const listener of listners) {
    await listener.apply(emitter, data);
  }
}
function isPropertyAccessible(obj, key) {
  try {
    obj[key];
    return true;
  } catch (e) {
    return false;
  }
}
function createServerErrorResponse(body) {
  return new Response(
    JSON.stringify(
      body instanceof Error
        ? {
            name: body.name,
            message: body.message,
            stack: body.stack
          }
        : body
    ),
    {
      status: 500,
      statusText: "Unhandled Exception",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
function isResponseError(response) {
  return isPropertyAccessible(response, "type") && response.type === "error";
}
function isNodeLikeError(error2) {
  if (error2 == null) {
    return false;
  }
  if (!(error2 instanceof Error)) {
    return false;
  }
  return "code" in error2 && "errno" in error2;
}
async function handleRequest2(options) {
  const handleResponse = async response => {
    if (response instanceof Error) {
      options.onError(response);
    } else if (isResponseError(response)) {
      options.onRequestError(response);
    } else {
      await options.onResponse(response);
    }
    return true;
  };
  const handleResponseError = async error2 => {
    if (error2 instanceof InterceptorError) {
      throw result.error;
    }
    if (isNodeLikeError(error2)) {
      options.onError(error2);
      return true;
    }
    if (error2 instanceof Response) {
      return await handleResponse(error2);
    }
    return false;
  };
  options.emitter.once("request", ({ requestId: pendingRequestId }) => {
    if (pendingRequestId !== options.requestId) {
      return;
    }
    if (options.controller[kResponsePromise].state === "pending") {
      options.controller[kResponsePromise].resolve(void 0);
    }
  });
  const requestAbortPromise = new DeferredPromise2();
  if (options.request.signal) {
    if (options.request.signal.aborted) {
      requestAbortPromise.reject(options.request.signal.reason);
    } else {
      options.request.signal.addEventListener(
        "abort",
        () => {
          requestAbortPromise.reject(options.request.signal.reason);
        },
        { once: true }
      );
    }
  }
  const result = await until(async () => {
    const requestListtenersPromise = emitAsync(options.emitter, "request", {
      requestId: options.requestId,
      request: options.request,
      controller: options.controller
    });
    await Promise.race([
      // Short-circuit the request handling promise if the request gets aborted.
      requestAbortPromise,
      requestListtenersPromise,
      options.controller[kResponsePromise]
    ]);
    const mockedResponse = await options.controller[kResponsePromise];
    return mockedResponse;
  });
  if (requestAbortPromise.state === "rejected") {
    options.onError(requestAbortPromise.rejectionReason);
    return true;
  }
  if (result.error) {
    if (await handleResponseError(result.error)) {
      return true;
    }
    if (options.emitter.listenerCount("unhandledException") > 0) {
      const unhandledExceptionController = new RequestController(options.request);
      await emitAsync(options.emitter, "unhandledException", {
        error: result.error,
        request: options.request,
        requestId: options.requestId,
        controller: unhandledExceptionController
      }).then(() => {
        if (unhandledExceptionController[kResponsePromise].state === "pending") {
          unhandledExceptionController[kResponsePromise].resolve(void 0);
        }
      });
      const nextResult = await until(() => unhandledExceptionController[kResponsePromise]);
      if (nextResult.error) {
        return handleResponseError(nextResult.error);
      }
      if (nextResult.data) {
        return handleResponse(nextResult.data);
      }
    }
    options.onResponse(createServerErrorResponse(result.error));
    return true;
  }
  if (result.data) {
    return handleResponse(result.data);
  }
  return false;
}
function hasConfigurableGlobal2(propertyName) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, propertyName);
  if (typeof descriptor === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "function" && typeof descriptor.get() === "undefined") {
    return false;
  }
  if (typeof descriptor.get === "undefined" && descriptor.value == null) {
    return false;
  }
  if (typeof descriptor.set === "undefined" && !descriptor.configurable) {
    console.error(
      `[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`
    );
    return false;
  }
  return true;
}
function canParseUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_error) {
    return false;
  }
}
function createNetworkError(cause) {
  return Object.assign(new TypeError("Failed to fetch"), {
    cause
  });
}
var REQUEST_BODY_HEADERS = ["content-encoding", "content-language", "content-location", "content-type", "content-length"];
var kRedirectCount = Symbol("kRedirectCount");
async function followFetchRedirect(request, response) {
  if (response.status !== 303 && request.body != null) {
    return Promise.reject(createNetworkError());
  }
  const requestUrl = new URL(request.url);
  let locationUrl;
  try {
    locationUrl = new URL(response.headers.get("location"), request.url);
  } catch (error2) {
    return Promise.reject(createNetworkError(error2));
  }
  if (!(locationUrl.protocol === "http:" || locationUrl.protocol === "https:")) {
    return Promise.reject(createNetworkError("URL scheme must be a HTTP(S) scheme"));
  }
  if (Reflect.get(request, kRedirectCount) > 20) {
    return Promise.reject(createNetworkError("redirect count exceeded"));
  }
  Object.defineProperty(request, kRedirectCount, {
    value: (Reflect.get(request, kRedirectCount) || 0) + 1
  });
  if (request.mode === "cors" && (locationUrl.username || locationUrl.password) && !sameOrigin(requestUrl, locationUrl)) {
    return Promise.reject(createNetworkError('cross origin not allowed for request mode "cors"'));
  }
  const requestInit = {};
  if (
    ([301, 302].includes(response.status) && request.method === "POST") ||
    (response.status === 303 && !["HEAD", "GET"].includes(request.method))
  ) {
    requestInit.method = "GET";
    requestInit.body = null;
    REQUEST_BODY_HEADERS.forEach(headerName => {
      request.headers.delete(headerName);
    });
  }
  if (!sameOrigin(requestUrl, locationUrl)) {
    request.headers.delete("authorization");
    request.headers.delete("proxy-authorization");
    request.headers.delete("cookie");
    request.headers.delete("host");
  }
  requestInit.headers = request.headers;
  return fetch(new Request(locationUrl, requestInit));
}
function sameOrigin(left, right) {
  if (left.origin === right.origin && left.origin === "null") {
    return true;
  }
  if (left.protocol === right.protocol && left.hostname === right.hostname && left.port === right.port) {
    return true;
  }
  return false;
}
var BrotliDecompressionStream = class extends TransformStream {
  constructor() {
    console.warn("[Interceptors]: Brotli decompression of response streams is not supported in the browser");
    super({
      transform(chunk, controller) {
        controller.enqueue(chunk);
      }
    });
  }
};
var PipelineStream = class extends TransformStream {
  constructor(transformStreams, ...strategies) {
    super({}, ...strategies);
    const readable = [super.readable, ...transformStreams].reduce((readable2, transform) => readable2.pipeThrough(transform));
    Object.defineProperty(this, "readable", {
      get() {
        return readable;
      }
    });
  }
};
function parseContentEncoding(contentEncoding) {
  return contentEncoding
    .toLowerCase()
    .split(",")
    .map(coding => coding.trim());
}
function createDecompressionStream(contentEncoding) {
  if (contentEncoding === "") {
    return null;
  }
  const codings = parseContentEncoding(contentEncoding);
  if (codings.length === 0) {
    return null;
  }
  const transformers = codings.reduceRight((transformers2, coding) => {
    if (coding === "gzip" || coding === "x-gzip") {
      return transformers2.concat(new DecompressionStream("gzip"));
    } else if (coding === "deflate") {
      return transformers2.concat(new DecompressionStream("deflate"));
    } else if (coding === "br") {
      return transformers2.concat(new BrotliDecompressionStream());
    } else {
      transformers2.length = 0;
    }
    return transformers2;
  }, []);
  return new PipelineStream(transformers);
}
function decompressResponse(response) {
  if (response.body === null) {
    return null;
  }
  const decompressionStream = createDecompressionStream(response.headers.get("content-encoding") || "");
  if (!decompressionStream) {
    return null;
  }
  response.body.pipeTo(decompressionStream.writable);
  return decompressionStream.readable;
}
var _FetchInterceptor = class extends Interceptor2 {
  constructor() {
    super(_FetchInterceptor.symbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal2("fetch");
  }
  async setup() {
    const pureFetch = globalThis.fetch;
    invariant2(!pureFetch[IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.');
    globalThis.fetch = async (input, init) => {
      const requestId = createRequestId2();
      const resolvedInput =
        typeof input === "string" && typeof location !== "undefined" && !canParseUrl(input)
          ? new URL(input, location.origin)
          : input;
      const request = new Request(resolvedInput, init);
      const responsePromise = new DeferredPromise2();
      const controller = new RequestController(request);
      this.logger.info("[%s] %s", request.method, request.url);
      this.logger.info("awaiting for the mocked response...");
      this.logger.info('emitting the "request" event for %s listener(s)...', this.emitter.listenerCount("request"));
      const isRequestHandled = await handleRequest2({
        request,
        requestId,
        emitter: this.emitter,
        controller,
        onResponse: async rawResponse => {
          this.logger.info("received mocked response!", {
            rawResponse
          });
          const decompressedStream = decompressResponse(rawResponse);
          const response = decompressedStream === null ? rawResponse : new FetchResponse(decompressedStream, rawResponse);
          FetchResponse.setUrl(request.url, response);
          if (FetchResponse.isRedirectResponse(response.status)) {
            if (request.redirect === "error") {
              responsePromise.reject(createNetworkError("unexpected redirect"));
              return;
            }
            if (request.redirect === "follow") {
              followFetchRedirect(request, response).then(
                response2 => {
                  responsePromise.resolve(response2);
                },
                reason => {
                  responsePromise.reject(reason);
                }
              );
              return;
            }
          }
          if (this.emitter.listenerCount("response") > 0) {
            this.logger.info('emitting the "response" event...');
            await emitAsync(this.emitter, "response", {
              // Clone the mocked response for the "response" event listener.
              // This way, the listener can read the response and not lock its body
              // for the actual fetch consumer.
              response: response.clone(),
              isMockedResponse: true,
              request,
              requestId
            });
          }
          responsePromise.resolve(response);
        },
        onRequestError: response => {
          this.logger.info("request has errored!", { response });
          responsePromise.reject(createNetworkError(response));
        },
        onError: error2 => {
          this.logger.info("request has been aborted!", { error: error2 });
          responsePromise.reject(error2);
        }
      });
      if (isRequestHandled) {
        this.logger.info("request has been handled, returning mock promise...");
        return responsePromise;
      }
      this.logger.info("no mocked response received, performing request as-is...");
      return pureFetch(request).then(async response => {
        this.logger.info("original fetch performed", response);
        if (this.emitter.listenerCount("response") > 0) {
          this.logger.info('emitting the "response" event...');
          const responseClone = response.clone();
          await emitAsync(this.emitter, "response", {
            response: responseClone,
            isMockedResponse: false,
            request,
            requestId
          });
        }
        return response;
      });
    };
    Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.fetch, IS_PATCHED_MODULE, {
        value: void 0
      });
      globalThis.fetch = pureFetch;
      this.logger.info('restored native "globalThis.fetch"!', globalThis.fetch.name);
    });
  }
};
var FetchInterceptor = _FetchInterceptor;
FetchInterceptor.symbol = Symbol("fetch");
function concatArrayBuffer(left, right) {
  const result = new Uint8Array(left.byteLength + right.byteLength);
  result.set(left, 0);
  result.set(right, left.byteLength);
  return result;
}
var EventPolyfill = class {
  constructor(type, options) {
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.type = "";
    this.srcElement = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.isTrusted = true;
    this.composed = false;
    this.cancelable = true;
    this.defaultPrevented = false;
    this.bubbles = true;
    this.lengthComputable = true;
    this.loaded = 0;
    this.total = 0;
    this.cancelBubble = false;
    this.returnValue = true;
    this.type = type;
    this.target = (options == null ? void 0 : options.target) || null;
    this.currentTarget = (options == null ? void 0 : options.currentTarget) || null;
    this.timeStamp = Date.now();
  }
  composedPath() {
    return [];
  }
  initEvent(type, bubbles, cancelable) {
    this.type = type;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {}
  stopImmediatePropagation() {}
};
var ProgressEventPolyfill = class extends EventPolyfill {
  constructor(type, init) {
    super(type);
    this.lengthComputable = (init == null ? void 0 : init.lengthComputable) || false;
    this.composed = (init == null ? void 0 : init.composed) || false;
    this.loaded = (init == null ? void 0 : init.loaded) || 0;
    this.total = (init == null ? void 0 : init.total) || 0;
  }
};
var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
function createEvent(target, type, init) {
  const progressEvents = ["error", "progress", "loadstart", "loadend", "load", "timeout", "abort"];
  const ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill;
  const event = progressEvents.includes(type)
    ? new ProgressEventClass(type, {
        lengthComputable: true,
        loaded: (init == null ? void 0 : init.loaded) || 0,
        total: (init == null ? void 0 : init.total) || 0
      })
    : new EventPolyfill(type, {
        target,
        currentTarget: target
      });
  return event;
}
function findPropertySource(target, propertyName) {
  if (!(propertyName in target)) {
    return null;
  }
  const hasProperty = Object.prototype.hasOwnProperty.call(target, propertyName);
  if (hasProperty) {
    return target;
  }
  const prototype = Reflect.getPrototypeOf(target);
  return prototype ? findPropertySource(prototype, propertyName) : null;
}
function createProxy(target, options) {
  const proxy = new Proxy(target, optionsToProxyHandler(options));
  return proxy;
}
function optionsToProxyHandler(options) {
  const { constructorCall, methodCall, getProperty, setProperty } = options;
  const handler = {};
  if (typeof constructorCall !== "undefined") {
    handler.construct = function (target, args, newTarget) {
      const next = Reflect.construct.bind(null, target, args, newTarget);
      return constructorCall.call(newTarget, args, next);
    };
  }
  handler.set = function (target, propertyName, nextValue) {
    const next = () => {
      const propertySource = findPropertySource(target, propertyName) || target;
      const ownDescriptors = Reflect.getOwnPropertyDescriptor(propertySource, propertyName);
      if (typeof (ownDescriptors == null ? void 0 : ownDescriptors.set) !== "undefined") {
        ownDescriptors.set.apply(target, [nextValue]);
        return true;
      }
      return Reflect.defineProperty(propertySource, propertyName, {
        writable: true,
        enumerable: true,
        configurable: true,
        value: nextValue
      });
    };
    if (typeof setProperty !== "undefined") {
      return setProperty.call(target, [propertyName, nextValue], next);
    }
    return next();
  };
  handler.get = function (target, propertyName, receiver) {
    const next = () => target[propertyName];
    const value = typeof getProperty !== "undefined" ? getProperty.call(target, [propertyName, receiver], next) : next();
    if (typeof value === "function") {
      return (...args) => {
        const next2 = value.bind(target, ...args);
        if (typeof methodCall !== "undefined") {
          return methodCall.call(target, [propertyName, args], next2);
        }
        return next2();
      };
    }
    return value;
  };
  return handler;
}
function isDomParserSupportedType(type) {
  const supportedTypes = ["application/xhtml+xml", "application/xml", "image/svg+xml", "text/html", "text/xml"];
  return supportedTypes.some(supportedType => {
    return type.startsWith(supportedType);
  });
}
function parseJson(data) {
  try {
    const json = JSON.parse(data);
    return json;
  } catch (_) {
    return null;
  }
}
function createResponse(request, body) {
  const responseBodyOrNull = FetchResponse.isResponseWithBody(request.status) ? body : null;
  return new FetchResponse(responseBodyOrNull, {
    url: request.responseURL,
    status: request.status,
    statusText: request.statusText,
    headers: createHeadersFromXMLHttpReqestHeaders(request.getAllResponseHeaders())
  });
}
function createHeadersFromXMLHttpReqestHeaders(headersString) {
  const headers = new Headers();
  const lines = headersString.split(/[\r\n]+/);
  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }
    const [name, ...parts] = line.split(": ");
    const value = parts.join(": ");
    headers.append(name, value);
  }
  return headers;
}
async function getBodyByteLength(input) {
  const explicitContentLength = input.headers.get("content-length");
  if (explicitContentLength != null && explicitContentLength !== "") {
    return Number(explicitContentLength);
  }
  const buffer = await input.arrayBuffer();
  return buffer.byteLength;
}
var kIsRequestHandled = Symbol("kIsRequestHandled");
var IS_NODE2 = isNodeProcess();
var kFetchRequest = Symbol("kFetchRequest");
var XMLHttpRequestController = class {
  constructor(initialRequest, logger) {
    this.initialRequest = initialRequest;
    this.logger = logger;
    this.method = "GET";
    this.url = null;
    this[kIsRequestHandled] = false;
    this.events = /* @__PURE__ */ new Map();
    this.uploadEvents = /* @__PURE__ */ new Map();
    this.requestId = createRequestId2();
    this.requestHeaders = new Headers();
    this.responseBuffer = new Uint8Array();
    this.request = createProxy(initialRequest, {
      setProperty: ([propertyName, nextValue], invoke) => {
        switch (propertyName) {
          case "ontimeout": {
            const eventName = propertyName.slice(2);
            this.request.addEventListener(eventName, nextValue);
            return invoke();
          }
          default: {
            return invoke();
          }
        }
      },
      methodCall: ([methodName, args], invoke) => {
        var _a2;
        switch (methodName) {
          case "open": {
            const [method, url] = args;
            if (typeof url === "undefined") {
              this.method = "GET";
              this.url = toAbsoluteUrl(method);
            } else {
              this.method = method;
              this.url = toAbsoluteUrl(url);
            }
            this.logger = this.logger.extend(`${this.method} ${this.url.href}`);
            this.logger.info("open", this.method, this.url.href);
            return invoke();
          }
          case "addEventListener": {
            const [eventName, listener] = args;
            this.registerEvent(eventName, listener);
            this.logger.info("addEventListener", eventName, listener);
            return invoke();
          }
          case "setRequestHeader": {
            const [name, value] = args;
            this.requestHeaders.set(name, value);
            this.logger.info("setRequestHeader", name, value);
            return invoke();
          }
          case "send": {
            const [body] = args;
            this.request.addEventListener("load", () => {
              if (typeof this.onResponse !== "undefined") {
                const fetchResponse = createResponse(
                  this.request,
                  /**
                   * The `response` property is the right way to read
                   * the ambiguous response body, as the request's "responseType" may differ.
                   * @see https://xhr.spec.whatwg.org/#the-response-attribute
                   */
                  this.request.response
                );
                this.onResponse.call(this, {
                  response: fetchResponse,
                  isMockedResponse: this[kIsRequestHandled],
                  request: fetchRequest,
                  requestId: this.requestId
                });
              }
            });
            const requestBody = typeof body === "string" ? encodeBuffer(body) : body;
            const fetchRequest = this.toFetchApiRequest(requestBody);
            this[kFetchRequest] = fetchRequest.clone();
            const onceRequestSettled =
              ((_a2 = this.onRequest) == null
                ? void 0
                : _a2.call(this, {
                    request: fetchRequest,
                    requestId: this.requestId
                  })) || Promise.resolve();
            onceRequestSettled.finally(() => {
              if (!this[kIsRequestHandled]) {
                this.logger.info(
                  "request callback settled but request has not been handled (readystate %d), performing as-is...",
                  this.request.readyState
                );
                if (IS_NODE2) {
                  this.request.setRequestHeader(INTERNAL_REQUEST_ID_HEADER_NAME, this.requestId);
                }
                return invoke();
              }
            });
            break;
          }
          default: {
            return invoke();
          }
        }
      }
    });
    define(
      this.request,
      "upload",
      createProxy(this.request.upload, {
        setProperty: ([propertyName, nextValue], invoke) => {
          switch (propertyName) {
            case "onloadstart":
            case "onprogress":
            case "onaboart":
            case "onerror":
            case "onload":
            case "ontimeout":
            case "onloadend": {
              const eventName = propertyName.slice(2);
              this.registerUploadEvent(eventName, nextValue);
            }
          }
          return invoke();
        },
        methodCall: ([methodName, args], invoke) => {
          switch (methodName) {
            case "addEventListener": {
              const [eventName, listener] = args;
              this.registerUploadEvent(eventName, listener);
              this.logger.info("upload.addEventListener", eventName, listener);
              return invoke();
            }
          }
        }
      })
    );
  }
  registerEvent(eventName, listener) {
    const prevEvents = this.events.get(eventName) || [];
    const nextEvents = prevEvents.concat(listener);
    this.events.set(eventName, nextEvents);
    this.logger.info('registered event "%s"', eventName, listener);
  }
  registerUploadEvent(eventName, listener) {
    const prevEvents = this.uploadEvents.get(eventName) || [];
    const nextEvents = prevEvents.concat(listener);
    this.uploadEvents.set(eventName, nextEvents);
    this.logger.info('registered upload event "%s"', eventName, listener);
  }
  /**
   * Responds to the current request with the given
   * Fetch API `Response` instance.
   */
  async respondWith(response) {
    this[kIsRequestHandled] = true;
    if (this[kFetchRequest]) {
      const totalRequestBodyLength = await getBodyByteLength(this[kFetchRequest]);
      this.trigger("loadstart", this.request.upload, {
        loaded: 0,
        total: totalRequestBodyLength
      });
      this.trigger("progress", this.request.upload, {
        loaded: totalRequestBodyLength,
        total: totalRequestBodyLength
      });
      this.trigger("load", this.request.upload, {
        loaded: totalRequestBodyLength,
        total: totalRequestBodyLength
      });
      this.trigger("loadend", this.request.upload, {
        loaded: totalRequestBodyLength,
        total: totalRequestBodyLength
      });
    }
    this.logger.info("responding with a mocked response: %d %s", response.status, response.statusText);
    define(this.request, "status", response.status);
    define(this.request, "statusText", response.statusText);
    define(this.request, "responseURL", this.url.href);
    this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, {
      apply: (_, __, args) => {
        this.logger.info("getResponseHeader", args[0]);
        if (this.request.readyState < this.request.HEADERS_RECEIVED) {
          this.logger.info("headers not received yet, returning null");
          return null;
        }
        const headerValue = response.headers.get(args[0]);
        this.logger.info('resolved response header "%s" to', args[0], headerValue);
        return headerValue;
      }
    });
    this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, {
      apply: () => {
        this.logger.info("getAllResponseHeaders");
        if (this.request.readyState < this.request.HEADERS_RECEIVED) {
          this.logger.info("headers not received yet, returning empty string");
          return "";
        }
        const headersList = Array.from(response.headers.entries());
        const allHeaders = headersList
          .map(([headerName, headerValue]) => {
            return `${headerName}: ${headerValue}`;
          })
          .join("\r\n");
        this.logger.info("resolved all response headers to", allHeaders);
        return allHeaders;
      }
    });
    Object.defineProperties(this.request, {
      response: {
        enumerable: true,
        configurable: false,
        get: () => this.response
      },
      responseText: {
        enumerable: true,
        configurable: false,
        get: () => this.responseText
      },
      responseXML: {
        enumerable: true,
        configurable: false,
        get: () => this.responseXML
      }
    });
    const totalResponseBodyLength = await getBodyByteLength(response.clone());
    this.logger.info("calculated response body length", totalResponseBodyLength);
    this.trigger("loadstart", this.request, {
      loaded: 0,
      total: totalResponseBodyLength
    });
    this.setReadyState(this.request.HEADERS_RECEIVED);
    this.setReadyState(this.request.LOADING);
    const finalizeResponse = () => {
      this.logger.info("finalizing the mocked response...");
      this.setReadyState(this.request.DONE);
      this.trigger("load", this.request, {
        loaded: this.responseBuffer.byteLength,
        total: totalResponseBodyLength
      });
      this.trigger("loadend", this.request, {
        loaded: this.responseBuffer.byteLength,
        total: totalResponseBodyLength
      });
    };
    if (response.body) {
      this.logger.info("mocked response has body, streaming...");
      const reader = response.body.getReader();
      const readNextResponseBodyChunk = async () => {
        const { value, done } = await reader.read();
        if (done) {
          this.logger.info("response body stream done!");
          finalizeResponse();
          return;
        }
        if (value) {
          this.logger.info("read response body chunk:", value);
          this.responseBuffer = concatArrayBuffer(this.responseBuffer, value);
          this.trigger("progress", this.request, {
            loaded: this.responseBuffer.byteLength,
            total: totalResponseBodyLength
          });
        }
        readNextResponseBodyChunk();
      };
      readNextResponseBodyChunk();
    } else {
      finalizeResponse();
    }
  }
  responseBufferToText() {
    return decodeBuffer(this.responseBuffer);
  }
  get response() {
    this.logger.info("getResponse (responseType: %s)", this.request.responseType);
    if (this.request.readyState !== this.request.DONE) {
      return null;
    }
    switch (this.request.responseType) {
      case "json": {
        const responseJson = parseJson(this.responseBufferToText());
        this.logger.info("resolved response JSON", responseJson);
        return responseJson;
      }
      case "arraybuffer": {
        const arrayBuffer = toArrayBuffer(this.responseBuffer);
        this.logger.info("resolved response ArrayBuffer", arrayBuffer);
        return arrayBuffer;
      }
      case "blob": {
        const mimeType = this.request.getResponseHeader("Content-Type") || "text/plain";
        const responseBlob = new Blob([this.responseBufferToText()], {
          type: mimeType
        });
        this.logger.info("resolved response Blob (mime type: %s)", responseBlob, mimeType);
        return responseBlob;
      }
      default: {
        const responseText = this.responseBufferToText();
        this.logger.info('resolving "%s" response type as text', this.request.responseType, responseText);
        return responseText;
      }
    }
  }
  get responseText() {
    invariant2(
      this.request.responseType === "" || this.request.responseType === "text",
      "InvalidStateError: The object is in invalid state."
    );
    if (this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE) {
      return "";
    }
    const responseText = this.responseBufferToText();
    this.logger.info('getResponseText: "%s"', responseText);
    return responseText;
  }
  get responseXML() {
    invariant2(
      this.request.responseType === "" || this.request.responseType === "document",
      "InvalidStateError: The object is in invalid state."
    );
    if (this.request.readyState !== this.request.DONE) {
      return null;
    }
    const contentType = this.request.getResponseHeader("Content-Type") || "";
    if (typeof DOMParser === "undefined") {
      console.warn(
        "Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."
      );
      return null;
    }
    if (isDomParserSupportedType(contentType)) {
      return new DOMParser().parseFromString(this.responseBufferToText(), contentType);
    }
    return null;
  }
  errorWith(error2) {
    this[kIsRequestHandled] = true;
    this.logger.info("responding with an error");
    this.setReadyState(this.request.DONE);
    this.trigger("error", this.request);
    this.trigger("loadend", this.request);
  }
  /**
   * Transitions this request's `readyState` to the given one.
   */
  setReadyState(nextReadyState) {
    this.logger.info("setReadyState: %d -> %d", this.request.readyState, nextReadyState);
    if (this.request.readyState === nextReadyState) {
      this.logger.info("ready state identical, skipping transition...");
      return;
    }
    define(this.request, "readyState", nextReadyState);
    this.logger.info("set readyState to: %d", nextReadyState);
    if (nextReadyState !== this.request.UNSENT) {
      this.logger.info('triggerring "readystatechange" event...');
      this.trigger("readystatechange", this.request);
    }
  }
  /**
   * Triggers given event on the `XMLHttpRequest` instance.
   */
  trigger(eventName, target, options) {
    const callback = target[`on${eventName}`];
    const event = createEvent(target, eventName, options);
    this.logger.info('trigger "%s"', eventName, options || "");
    if (typeof callback === "function") {
      this.logger.info('found a direct "%s" callback, calling...', eventName);
      callback.call(target, event);
    }
    const events = target instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
    for (const [registeredEventName, listeners] of events) {
      if (registeredEventName === eventName) {
        this.logger.info('found %d listener(s) for "%s" event, calling...', listeners.length, eventName);
        listeners.forEach(listener => listener.call(target, event));
      }
    }
  }
  /**
   * Converts this `XMLHttpRequest` instance into a Fetch API `Request` instance.
   */
  toFetchApiRequest(body) {
    this.logger.info("converting request to a Fetch API Request...");
    const resolvedBody = body instanceof Document ? body.documentElement.innerText : body;
    const fetchRequest = new Request(this.url.href, {
      method: this.method,
      headers: this.requestHeaders,
      /**
       * @see https://xhr.spec.whatwg.org/#cross-origin-credentials
       */
      credentials: this.request.withCredentials ? "include" : "same-origin",
      body: ["GET", "HEAD"].includes(this.method.toUpperCase()) ? null : resolvedBody
    });
    const proxyHeaders = createProxy(fetchRequest.headers, {
      methodCall: ([methodName, args], invoke) => {
        switch (methodName) {
          case "append":
          case "set": {
            const [headerName, headerValue] = args;
            this.request.setRequestHeader(headerName, headerValue);
            break;
          }
          case "delete": {
            const [headerName] = args;
            console.warn(
              `XMLHttpRequest: Cannot remove a "${headerName}" header from the Fetch API representation of the "${fetchRequest.method} ${fetchRequest.url}" request. XMLHttpRequest headers cannot be removed.`
            );
            break;
          }
        }
        return invoke();
      }
    });
    define(fetchRequest, "headers", proxyHeaders);
    this.logger.info("converted request to a Fetch API Request!", fetchRequest);
    return fetchRequest;
  }
};
function toAbsoluteUrl(url) {
  if (typeof location === "undefined") {
    return new URL(url);
  }
  return new URL(url.toString(), location.href);
}
function define(target, property, value) {
  Reflect.defineProperty(target, property, {
    // Ensure writable properties to allow redefining readonly properties.
    writable: true,
    enumerable: true,
    value
  });
}
function createXMLHttpRequestProxy({ emitter, logger }) {
  const XMLHttpRequestProxy = new Proxy(globalThis.XMLHttpRequest, {
    construct(target, args, newTarget) {
      logger.info("constructed new XMLHttpRequest");
      const originalRequest = Reflect.construct(target, args, newTarget);
      const prototypeDescriptors = Object.getOwnPropertyDescriptors(target.prototype);
      for (const propertyName in prototypeDescriptors) {
        Reflect.defineProperty(originalRequest, propertyName, prototypeDescriptors[propertyName]);
      }
      const xhrRequestController = new XMLHttpRequestController(originalRequest, logger);
      xhrRequestController.onRequest = async function ({ request, requestId }) {
        const controller = new RequestController(request);
        this.logger.info("awaiting mocked response...");
        this.logger.info('emitting the "request" event for %s listener(s)...', emitter.listenerCount("request"));
        const isRequestHandled = await handleRequest2({
          request,
          requestId,
          controller,
          emitter,
          onResponse: async response => {
            await this.respondWith(response);
          },
          onRequestError: () => {
            this.errorWith(new TypeError("Network error"));
          },
          onError: error2 => {
            this.logger.info("request errored!", { error: error2 });
            if (error2 instanceof Error) {
              this.errorWith(error2);
            }
          }
        });
        if (!isRequestHandled) {
          this.logger.info("no mocked response received, performing request as-is...");
        }
      };
      xhrRequestController.onResponse = async function ({ response, isMockedResponse, request, requestId }) {
        this.logger.info('emitting the "response" event for %s listener(s)...', emitter.listenerCount("response"));
        emitter.emit("response", {
          response,
          isMockedResponse,
          request,
          requestId
        });
      };
      return xhrRequestController.request;
    }
  });
  return XMLHttpRequestProxy;
}
var _XMLHttpRequestInterceptor = class extends Interceptor2 {
  constructor() {
    super(_XMLHttpRequestInterceptor.interceptorSymbol);
  }
  checkEnvironment() {
    return hasConfigurableGlobal2("XMLHttpRequest");
  }
  setup() {
    const logger = this.logger.extend("setup");
    logger.info('patching "XMLHttpRequest" module...');
    const PureXMLHttpRequest = globalThis.XMLHttpRequest;
    invariant2(!PureXMLHttpRequest[IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.');
    globalThis.XMLHttpRequest = createXMLHttpRequestProxy({
      emitter: this.emitter,
      logger: this.logger
    });
    logger.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name);
    Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
      enumerable: true,
      configurable: true,
      value: true
    });
    this.subscriptions.push(() => {
      Object.defineProperty(globalThis.XMLHttpRequest, IS_PATCHED_MODULE, {
        value: void 0
      });
      globalThis.XMLHttpRequest = PureXMLHttpRequest;
      logger.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name);
    });
  }
};
var XMLHttpRequestInterceptor = _XMLHttpRequestInterceptor;
XMLHttpRequestInterceptor.interceptorSymbol = Symbol("xhr");
function createFallbackRequestListener(context, options) {
  const interceptor = new BatchInterceptor({
    name: "fallback",
    interceptors: [new FetchInterceptor(), new XMLHttpRequestInterceptor()]
  });
  interceptor.on("request", async ({ request, requestId, controller }) => {
    const requestCloneForLogs = request.clone();
    const response = await handleRequest(
      request,
      requestId,
      context.getRequestHandlers().filter(isHandlerKind("RequestHandler")),
      options,
      context.emitter,
      {
        onMockedResponse(_, { handler, parsedResult }) {
          if (!options.quiet) {
            context.emitter.once("response:mocked", ({ response: response2 }) => {
              handler.log({
                request: requestCloneForLogs,
                response: response2,
                parsedResult
              });
            });
          }
        }
      }
    );
    if (response) {
      controller.respondWith(response);
    }
  });
  interceptor.on("response", ({ response, isMockedResponse, request, requestId }) => {
    context.emitter.emit(isMockedResponse ? "response:mocked" : "response:bypass", {
      response,
      request,
      requestId
    });
  });
  interceptor.apply();
  return interceptor;
}
function createFallbackStart(context) {
  return async function start(options) {
    context.fallbackInterceptor = createFallbackRequestListener(context, options);
    printStartMessage({
      message: "Mocking enabled (fallback mode).",
      quiet: options.quiet
    });
    return void 0;
  };
}
function createFallbackStop(context) {
  return function stop() {
    var _a2, _b;
    (_a2 = context.fallbackInterceptor) == null ? void 0 : _a2.dispose();
    printStopMessage({ quiet: (_b = context.startOptions) == null ? void 0 : _b.quiet });
  };
}
function supportsReadableStreamTransfer() {
  try {
    const stream = new ReadableStream({
      start: controller => controller.close()
    });
    const message = new MessageChannel();
    message.port1.postMessage(stream, [stream]);
    return true;
  } catch {
    return false;
  }
}
var SetupWorkerApi = class extends SetupApi {
  constructor(...handlers) {
    super(...handlers);
    __publicField(this, "context");
    __publicField(this, "startHandler", null);
    __publicField(this, "stopHandler", null);
    __publicField(this, "listeners");
    invariant2(
      !isNodeProcess(),
      devUtils.formatMessage(
        "Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."
      )
    );
    this.listeners = [];
    this.context = this.createWorkerContext();
  }
  createWorkerContext() {
    const context = {
      // Mocking is not considered enabled until the worker
      // signals back the successful activation event.
      isMockingEnabled: false,
      startOptions: null,
      worker: null,
      getRequestHandlers: () => {
        return this.handlersController.currentHandlers();
      },
      registration: null,
      requests: /* @__PURE__ */ new Map(),
      emitter: this.emitter,
      workerChannel: {
        on: (eventType, callback) => {
          this.context.events.addListener(navigator.serviceWorker, "message", event => {
            if (event.source !== this.context.worker) {
              return;
            }
            const message = event.data;
            if (!message) {
              return;
            }
            if (message.type === eventType) {
              callback(event, message);
            }
          });
        },
        send: type => {
          var _a2;
          (_a2 = this.context.worker) == null ? void 0 : _a2.postMessage(type);
        }
      },
      events: {
        addListener: (target, eventType, callback) => {
          target.addEventListener(eventType, callback);
          this.listeners.push({
            eventType,
            target,
            callback
          });
          return () => {
            target.removeEventListener(eventType, callback);
          };
        },
        removeAllListeners: () => {
          for (const { target, eventType, callback } of this.listeners) {
            target.removeEventListener(eventType, callback);
          }
          this.listeners = [];
        },
        once: eventType => {
          const bindings = [];
          return new Promise((resolve, reject) => {
            const handleIncomingMessage = event => {
              try {
                const message = event.data;
                if (message.type === eventType) {
                  resolve(message);
                }
              } catch (error2) {
                reject(error2);
              }
            };
            bindings.push(
              this.context.events.addListener(navigator.serviceWorker, "message", handleIncomingMessage),
              this.context.events.addListener(navigator.serviceWorker, "messageerror", reject)
            );
          }).finally(() => {
            bindings.forEach(unbind => unbind());
          });
        }
      },
      supports: {
        serviceWorkerApi: !("serviceWorker" in navigator) || location.protocol === "file:",
        readableStreamTransfer: supportsReadableStreamTransfer()
      }
    };
    this.startHandler = context.supports.serviceWorkerApi ? createFallbackStart(context) : createStartHandler(context);
    this.stopHandler = context.supports.serviceWorkerApi ? createFallbackStop(context) : createStop(context);
    return context;
  }
  async start(options = {}) {
    if (options.waitUntilReady === true) {
      devUtils.warn(
        'The "waitUntilReady" option has been deprecated. Please remove it from this "worker.start()" call. Follow the recommended Browser integration (https://mswjs.io/docs/integrations/browser) to eliminate any race conditions between the Service Worker registration and any requests made by your application on initial render.'
      );
    }
    this.context.startOptions = mergeRight(DEFAULT_START_OPTIONS, options);
    handleWebSocketEvent({
      getUnhandledRequestStrategy: () => {
        return this.context.startOptions.onUnhandledRequest;
      },
      getHandlers: () => {
        return this.handlersController.currentHandlers();
      },
      onMockedConnection: connection => {
        if (!this.context.startOptions.quiet) {
          attachWebSocketLogger(connection);
        }
      },
      onPassthroughConnection() {}
    });
    webSocketInterceptor.apply();
    this.subscriptions.push(() => {
      webSocketInterceptor.dispose();
    });
    return await this.startHandler(this.context.startOptions, options);
  }
  stop() {
    super.dispose();
    this.context.events.removeAllListeners();
    this.context.emitter.removeAllListeners();
    this.stopHandler();
  }
};
function setupWorker(...handlers) {
  return new SetupWorkerApi(...handlers);
}
export { SetupWorkerApi, setupWorker };
//# sourceMappingURL=msw_browser.js.map
