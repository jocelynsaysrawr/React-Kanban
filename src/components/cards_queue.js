import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsInQueue } from "../actions";
import makeCard from "./card";

class CardsInQueue extends Component {
  componentDidMount() {
    this.props.cardsInQueue(this.props.cards);
  }

  renderQueue() {
    return this.props.queue.map(card => {
      return makeCard(card);
    });
  }

  render() {
    return (
      <div>
        <ul className="queue">{this.renderQueue()}</ul>
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
