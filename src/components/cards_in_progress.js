import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsInProgress } from "../actions";

class CardsInProgress extends Component {
  componentDidMount() {
    this.props.cardsInProgress(this.props.cards);
  }

  renderInProgress() {
    return this.props.inProgress.map(card => {
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
        <ul>{this.renderInProgress()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    inProgress: state.inProgress
  };
};

export default connect(mapStateToProps, { cardsInProgress })(CardsInProgress);
