export default function Card({ value, suit, isHidden }) {
    const getCardColor = () => {
      return ['♥', '♦'].includes(suit) ? 'text-red-600' : 'text-black'
    }
  
    const getSymbol = () => {
      const symbols = {
        'H': '♥',
        'D': '♦',
        'C': '♣',
        'S': '♠'
      }
      return symbols[suit]
    }
  
    return (
      <div className={`relative w-20 h-28 bg-white rounded-lg shadow-xl transform hover:-translate-y-2 transition-all ${isHidden ? 'bg-blue-900' : ''}`}>
        {!isHidden && (
          <div className="p-2">
            <div className={`text-2xl font-bold ${getCardColor()}`}>
              {value}
              <span className="text-3xl">{getSymbol()}</span>
            </div>
            <div className={`absolute bottom-2 right-2 text-2xl ${getCardColor()}`}>
              {value}
              <span className="text-3xl">{getSymbol()}</span>
            </div>
          </div>
        )}
      </div>
    )
  }