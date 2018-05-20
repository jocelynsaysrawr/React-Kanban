import React from "react";

export default card => {
  return (
    <li key={card.card_id} className="card">
      <div className="card-detail">
        <h3 className="card-title">{card.card_title}</h3>
        <p className="card-priority">Priority: {card.card_priority}</p>
        <p className="card-assignment">Assigned to: {card.assigned_to}</p>
      </div>
    </li>
  );
};
