import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeb3 } from '../contexts/Web3Context'
import Header from '../components/Shared/Header'
import TableList from '../components/Lobby/TableList'
import Loader from '../components/Shared/Loader'

export default function Lobby() {
  const { account } = useWeb3()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!account) {
      navigate('/')
    }
  }, [account, navigate])

  useEffect(() => {
    const fetchTables = async () => {
      try {
        // Simular chamada API
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
      } catch (err) {
        setError('Erro ao carregar mesas')
        setLoading(false)
      }
    }

    fetchTables()
  }, [])

  if (!account || loading) return <Loader />

  return (
    <div className="lobby-container">
      <Header />
      
      <div className="lobby-content">
        <h2>Mesas Disponíveis</h2>
        
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <TableList />
        )}

        <div className="balance-section">
          <h3>Seu Saldo: </h3>
          <button 
            className="buy-chips-button"
            onClick={() => {/* Integrar com contrato de compra de fichas */}}
          >
            Comprar Fichas
          </button>
        </div>
      </div>
    </div>
  )
}