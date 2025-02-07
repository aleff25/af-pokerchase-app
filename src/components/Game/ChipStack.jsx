export default function ChipStack({ amount, position }) {
    const getChipColor = (value) => {
      if (value >= 1000) return 'bg-yellow-500 border-yellow-600'
      if (value >= 500) return 'bg-purple-500 border-purple-600'
      return 'bg-blue-500 border-blue-600'
    }
  
    return (
      <div 
        className="absolute flex flex-col items-center z-10"
        style={position}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-black blur opacity-30 rounded-full"></div>
          <div className={`${getChipColor(amount)} w-12 h-12 rounded-full border-2 relative transform rotate-45`}>
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm -rotate-45">
              ${amount}
            </span>
          </div>
        </div>
      </div>
    )
  }