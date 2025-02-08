// src/components/TableList.jsx
import { useEffect, useState } from 'react'
import { useWebSocket } from '../../contexts/WebSocketContext'

export default function TableList() {
  const { sendAction } = useWebSocket()
  const [tables, setTables] = useState([])

  useEffect(() => {
    // Simular busca de mesas disponíveis
    const fetchTables = async () => {
      // Implementar chamada real ao backend
      setTables([{ id: 1, name: 'Main Table', players: 4 }])
    }
    fetchTables()
  }, [])

  return (
    <div className="table-list">
      {tables.map(table => (
        <div key={table.id} className="table-item">
          <h3>{table.name}</h3>
          <button onClick={() => sendAction({ type: 'JOIN_TABLE', tableId: table.id })}>
            Join Table
          </button>
        </div>
      ))}
    </div>
  )
}