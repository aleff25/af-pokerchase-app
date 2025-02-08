// src/components/Header.jsx
import { useWebSocket } from '../../contexts/WebSocketContext'
import { Link } from 'react-router-dom'

export default function Header() {
  const { account, connectWallet } = useWeb3()
  
  return (
    <header>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/lobby">Lobby</Link>
      </nav>
      {account ? (
        <div>Connected: {account.slice(0, 6)}...</div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </header>
  )
}