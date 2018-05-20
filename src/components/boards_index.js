import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import AppHeader from "./app_header";
import { selectCard } from "../actions/index";
import CardsQueue from "./cards_queue";
import CardsInProgress from "./cards_in_progress";
import CardsDone from "./cards_done";

class BoardsIndex extends Component {
  render() {
    return (
      <div className="container">
        <AppHeader />
        <div className="boards">
          <div className="in-queue">
            <h1 className="card-list">In Queue</h1>
            <CardsQueue />
          </div>
          <div className="in-progress">
            <h1 className="card-list">In Progress</h1>
            <CardsInProgress />
          </div>
          <div className="done">
            <h1 className="card-list">Done</h1>
            <CardsDone />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps, { selectCard })(BoardsIndex);
