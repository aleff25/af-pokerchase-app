// src/components/CommunityCards.jsx
export default function CommunityCards({ cards }) {
    return (
      <div className="community-cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            {card ? `${card.rank}${card.suit}` : '🂠'}
          </div>
        ))}
      </div>
    )
  }