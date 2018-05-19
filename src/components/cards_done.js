import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsDone } from "../actions";

class CardsDone extends Component {
  componentDidMount() {
    this.props.cardsDone(this.props.cards);
  }

  renderDone() {
    return this.props.done.map(card => {
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
        <ul>{this.renderDone()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    done: state.done
  };
};

export default connect(mapStateToProps, { cardsDone })(CardsDone);
