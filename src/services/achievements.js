export const ACHIEVEMENTS = {
    ROYAL_FLUSH: {
      name: 'Royal Flush',
      condition: (hands) => hands.some(h => h.rank === 9),
      unlocked: false
    },
    COMEBACK_KING: {
      name: 'Rei da Virada',
      condition: (history) => history.some(h => h.chipChange >= 1000),
      unlocked: false
    }
  }
  
  export function checkAchievements(gameState) {
    return Object.values(ACHIEVEMENTS).map(achievement => ({
      ...achievement,
      unlocked: achievement.condition(gameState)
    }))
  }