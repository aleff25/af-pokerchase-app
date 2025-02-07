export const evaluateHand = (cards) => {
    // Implementação completa da avaliação de mãos de poker
    const ranks = cards.map(c => c.rank).sort((a, b) => b - a)
    const suits = cards.map(c => c.suit)
    
    // Detecção de flush
    const isFlush = suits.every(s => s === suits[0])
    
    // Detecção de straight
    const isStraight = ranks.every((r, i) => i === 0 || ranks[i-1] - r === 1)
    
    // Combinações possíveis
    if (isStraight && isFlush && ranks[0] === 14) return 'ROYAL_FLUSH'
    if (isStraight && isFlush) return 'STRAIGHT_FLUSH'
    
    // ... outras combinações
    
    return 'HIGH_CARD'
  }
  
  export const calculateWinner = (players, communityCards) => {
    // Lógica completa para determinar o vencedor
    return players.reduce((winner, player) => {
      const playerHand = evaluateHand([...player.cards, ...communityCards])
      return playerHand.rank > winner.rank ? playerHand : winner
    }, { rank: 0 })
  }