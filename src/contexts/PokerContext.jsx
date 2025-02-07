import { createContext, useContext, useReducer } from 'react'

const initialState = {
  players: [],
  communityCards: [],
  pot: 0,
  tournament: {
    currentLevel: 1,
    minutesRemaining: 15
  },
  handHistory: [],
  achievements: []
}

function pokerReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_GAME_STATE':
      return { ...state, ...action.payload }
    case 'ADD_HAND_HISTORY':
      return { ...state, handHistory: [...state.handHistory, action.payload] }
    case 'UNLOCK_ACHIEVEMENT':
      return { ...state, achievements: [...state.achievements, action.payload] }
    default:
      return state
  }
}

const PokerContext = createContext()

export function PokerProvider({ children }) {
  const [state, dispatch] = useReducer(pokerReducer, initialState)

  return (
    <PokerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokerContext.Provider>
  )
}

export const usePoker = () => useContext(PokerContext)