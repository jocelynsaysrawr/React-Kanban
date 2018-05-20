import React, { Component } from "react";
import { connect } from "react-redux";
import { cardsDone } from "../actions";
import makeCard from "./card.js";

class CardsDone extends Component {
  componentDidMount() {
    this.props.cardsDone(this.props.cards);
  }

  renderDone() {
    return this.props.done.map(card => {
      return makeCard(card);
    });
  }

  render() {
    return (
      <div>
        <ul className="done">{this.renderDone()}</ul>
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
