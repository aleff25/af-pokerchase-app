import { useState, useEffect } from 'react'
import Board from '../assets/board.svg'
import PlayerSeat from '../components/Game/PlayerSeat'
import CommunityCards from '../components/Game/CommunityCards'
import ChipStack from '../components/Game/ChipStack'
import Controls from '../components/Game/Controls'

export default function GamePage() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', chips: 1500, cards: [], isActive: true },
    { id: 2, name: 'Player 2', chips: 2500, cards: [], isActive: false }
  ])

  const [communityCards, setCommunityCards] = useState([])
  const [pot, setPot] = useState(0)

  const positions = [
    { top: '50%', left: '50%', transform: 'translate(-150%, -100%)' }, // Top
    { top: '70%', left: '80%' }, // Right
    { top: '50%', left: '50%', transform: 'translate(50%, 0%)' }, // Bottom
    { top: '30%', left: '20%' } // Left
  ]

  return (
    <div className="relative h-screen bg-poker-green">
      <div className="absolute inset-0 z-0">
        <img src={Board} alt="Poker Table" className="w-full h-full object-cover" />
      </div>

      <CommunityCards cards={communityCards} />
      
      {players.map((player, index) => (
        <PlayerSeat
          key={player.id}
          position={positions[index]}
          player={player}
          isCurrentPlayer={player.isActive}
        />
      ))}

      <ChipStack amount={pot} position={{ top: '45%', left: '50%' }} />
      
      <Controls onFold={() => {}} onCall={() => {}} onRaise={() => {}} />
    </div>
  )
}