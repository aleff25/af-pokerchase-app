// src/contexts/WebSocketContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import { Client } from '@stomp/stompjs'

const WebSocketContext = createContext()

export function WebSocketProvider({ children }) {
  const [client, setClient] = useState(null)
  const [tableState, setTableState] = useState(null)

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,
      onConnect: () => {
        stompClient.subscribe('/topic/gameState', (message) => {
          setTableState(JSON.parse(message.body))
        })
      }
    })

    stompClient.activate()
    setClient(stompClient)

    return () => stompClient.deactivate()
  }, [])

  const sendAction = (action) => {
    if (client && client.connected) {
      client.publish({
        destination: '/app/gameAction',
        body: JSON.stringify(action)
      })
    }
  }

  return (
    <WebSocketContext.Provider value={{ tableState, sendAction }}>
      {children}
    </WebSocketContext.Provider>
  )
}

export function useWebSocket() {
  return useContext(WebSocketContext)
}