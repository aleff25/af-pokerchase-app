import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
})

export const PokerAPI = {
  createTournament: (config) => api.post('/tournaments', config),
  joinTable: (tableId) => api.post(`/tables/${tableId}/join`),
  getLeaderboard: () => api.get('/leaderboard'),
  saveHandHistory: (history) => api.post('/history', history),
  getAchievements: (userId) => api.get(`/users/${userId}/achievements`)
}