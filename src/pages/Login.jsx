import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeb3 } from '../contexts/Web3Context'
import Loader from '../components/Shared/Loader'

import './Login.css'

export default function Login() {
  const { account, connectWallet } = useWeb3()
  const navigate = useNavigate()

  useEffect(() => {
    if (account) {
      navigate('/lobby')
    }
  }, [account, navigate])

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>PokerChase Login</h1>
        <button 
          onClick={connectWallet}
          className="connect-wallet-button"
        >
          Conectar Wallet
        </button>
        
        {!account && (
          <p className="wallet-instructions">
            Por favor, conecte sua carteira para jogar
          </p>
        )}
        
        {account && <Loader />}
      </div>
    </div>
  )
}