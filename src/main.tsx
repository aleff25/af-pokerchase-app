import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokerProvider } from './contexts/PokerContext'
import App from './App'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PokerProvider>
        <App />
      </PokerProvider>
  </React.StrictMode>
)