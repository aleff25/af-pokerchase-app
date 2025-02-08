// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Web3Provider } from './contexts/Web3Context'
import { WebSocketProvider } from './contexts/WebSocketContext'
import Login from './pages/Login'
import Lobby from './pages/Lobby'
import GamePage from './pages/GamePage'
import TournamentTable from './pages/TournamentTable'

function App() {
  return (
    <Web3Provider>
      <WebSocketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/table/:tableId" element={<TournamentTable />} />
          </Routes>
        </BrowserRouter>
      </WebSocketProvider>
    </Web3Provider>
  )
}

export default App;