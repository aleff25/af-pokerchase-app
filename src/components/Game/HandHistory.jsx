import { useContext } from 'react'
import { PokerContext } from '../contexts/PokerContext'

export default function HandHistory() {
  const { handHistory } = useContext(PokerContext)

  return (
    <div className="absolute top-4 left-4 bg-black/50 p-4 rounded-lg max-h-48 overflow-y-auto">
      <h3 className="text-poker-gold mb-2">Histórico de Mãos</h3>
      {handHistory.map((hand, index) => (
        <div key={index} className="text-white text-sm mb-1">
          Mão #{index + 1}: {hand.winner} ganhou {hand.pot} com {hand.hand}
        </div>
      ))}
    </div>
  )
}