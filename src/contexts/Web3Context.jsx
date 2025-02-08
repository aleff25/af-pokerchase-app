// src/contexts/Web3Context.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'

const Web3Context = createContext()

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null)

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", [])
        setAccount(accounts[0])
      } catch (error) {
        console.error("Error connecting wallet:", error)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  return (
    <Web3Context.Provider value={{ account, connectWallet }}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}