// src/pages/TournamentTable.jsx
import { useWebSocket } from '../contexts/WebSocketContext'
import { useParams } from 'react-router-dom'
import CommunityCards from '../components/Game/CommunityCards'
import PlayerSeat from '../components/Game/PlayerSeat'
import Loader from '../components/Shared/Loader'

export default function TournamentTable() {
  const { tableId } = useParams()
  const { tableState, sendAction } = useWebSocket()

  if (!tableState) return <Loader />

  return (
    <div className="poker-table">
      <CommunityCards cards={tableState.communityCards} />
      
      {tableState.players.map((player, index) => (
        <PlayerSeat 
          key={player.id}
          player={player}
          position={`pos-${index + 1}`}
        />
      ))}
    </div>
  )
}