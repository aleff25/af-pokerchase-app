import { useContext } from 'react'
import { PokerContext } from '../contexts/PokerContext'

const blindStructure = [
  { level: 1, small: 50, big: 100, ante: 0 },
  { level: 2, small: 100, big: 200, ante: 25 },
]

export default function TournamentInfo() {
  const { tournament } = useContext(PokerContext)
  
  return (
    <div className="absolute top-4 right-4 bg-black/50 p-4 rounded-lg">
      <div className="text-poker-gold mb-2">Nível {tournament.currentLevel}</div>
      <div className="text-white text-sm">
        Blinds: {blindStructure[tournament.currentLevel].small}/{blindStructure[tournament.currentLevel].big}
      </div>
      <div className="text-white text-sm">
        Próximo nível em: {tournament.minutesRemaining}min
      </div>
    </div>
  )
}