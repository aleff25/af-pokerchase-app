import { io } from 'socket.io-client'

const socket = io('http://localhost:3001', {
  autoConnect: false,
  reconnectionAttempts: 5,
  transports: ['websocket']
})

export const connectSocket = (token) => {
  socket.auth = { token }
  socket.connect()
}

export const subscribeToGameUpdates = (callback) => {
  socket.on('game-state', callback)
}

export const sendPlayerAction = (action) => {
  socket.emit('player-action', action)
}

export const disconnectSocket = () => {
  socket.disconnect()
}