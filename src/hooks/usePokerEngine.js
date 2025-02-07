import { useEffect } from 'react'
import { usePoker } from '../contexts/PokerContext'
import { subscribeToGameUpdates, sendPlayerAction } from '../services/socket'
import { checkAchievements } from '../services/achievements'

export const usePokerEngine = () => {
  const { dispatch } = usePoker()

  useEffect(() => {
    const handleGameUpdate = (gameState) => {
      dispatch({ type: 'UPDATE_GAME_STATE', payload: gameState })
      
      // Verificar achievements
      const newAchievements = checkAchievements(gameState)
      newAchievements.forEach(ach => {
        if (ach.unlocked) {
          dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: ach })
        }
      })
    }

    subscribeToGameUpdates(handleGameUpdate)
    return () => unsubscribeFromGameUpdates()
  }, [dispatch])

  const handleAction = (actionType, amount = 0) => {
    sendPlayerAction({ actionType, amount })
  }

  return { handleAction }
}