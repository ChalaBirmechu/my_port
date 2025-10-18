// ...existing code...
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
let socketInstance = null;

export function initSocket(token) {
  if (socketInstance) return socketInstance;
  socketInstance = io(SOCKET_URL, {
    transports: ['websocket'],
    auth: token ? { token } : undefined,
    reconnectionAttempts: 5,
    timeout: 20000
  });
  return socketInstance;
}

export function getSocket() {
  return socketInstance;
}

/**
 * React hook to subscribe to socket events.
 * Usage: const socket = useSocket({ new_message: onNewMessage });
 */
export function useSocket(handlers = {}, token) {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = initSocket(token);

    // attach handlers
    Object.entries(handlers).forEach(([event, fn]) => {
      if (typeof fn === 'function') socketRef.current.on(event, fn);
    });

    return () => {
      if (!socketRef.current) return;
      // detach handlers
      Object.entries(handlers).forEach(([event, fn]) => {
        if (typeof fn === 'function') socketRef.current.off(event, fn);
      });
      // NOTE: do not disconnect global socket here if shared across app
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(Object.keys(handlers)), token]);

  return socketRef.current;
}
// ...existing code...