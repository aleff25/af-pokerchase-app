// src/components/PlayerSeat.jsx
export default function PlayerSeat({ player, position }) {
    return (
      <div className={`seat ${position}`}>
        <div className="player-info">
          <span>{player.name}</span>
          <span>${player.stack}</span>
        </div>
        {player.cards && <div className="cards">
          {player.cards.map((card, i) => <div key={i} className="card" />)}
        </div>}
      </div>
    )
  }