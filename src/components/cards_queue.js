import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsInQueue } from "../actions";

class CardsInQueue extends Component {
  componentDidMount() {
    this.props.cardsInQueue(this.props.cards);
  }

  renderQueue() {
    return this.props.queue.map(card => {
      return (
        <li key={card.card_id} className="card">
          <div className="card-detail">
            <h3 className="card-title">{card.card_title}</h3>
            <p className="card-priority">Priority: {card.card_priority}</p>
            <p className="card-assignment">Assigned to: {card.assigned_to}</p>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderQueue()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    queue: state.queue
  };
};

export default connect(mapStateToProps, { cardsInQueue })(CardsInQueue);
