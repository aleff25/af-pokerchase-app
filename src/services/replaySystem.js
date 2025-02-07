export class ReplaySystem {
    constructor() {
      this.recordedStates = []
      this.currentReplayIndex = 0
    }
  
    recordState(gameState) {
      this.recordedStates.push(JSON.parse(JSON.stringify(gameState)))
    }
  
    getReplay() {
      return this.recordedStates
    }
  
    playNext() {
      if (this.currentReplayIndex < this.recordedStates.length) {
        return this.recordedStates[this.currentReplayIndex++]
      }
      return null
    }
  
    reset() {
      this.currentReplayIndex = 0
    }
  }