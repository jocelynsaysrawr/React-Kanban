import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsInProgress } from "../actions";
import makeCard from "./card";

class CardsInProgress extends Component {
  componentDidMount() {
    this.props.cardsInProgress(this.props.cards);
  }

  renderInProgress() {
    return this.props.inProgress.map(card => {
      return makeCard(card);
    });
  }

  render() {
    return (
      <div>
        <ul className="in-progress">{this.renderInProgress()}</ul>
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
