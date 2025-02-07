export default function Controls({ onFold, onCall, onRaise }) {
    return (
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={onFold}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          Fold
        </button>
        <button
          onClick={onCall}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          Call
        </button>
        <button
          onClick={onRaise}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          Raise
        </button>
      </div>
    )
  }