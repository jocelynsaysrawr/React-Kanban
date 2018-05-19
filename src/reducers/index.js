import { combineReducers } from "redux";
import CardsReducer from "./reducer_cards";
import ActiveCard from "./reducer_active_card";
import CardsInQueue from "./reducer_cards_in_queue";
import CardsInProgress from "./reducer_cards_in_progress";
import CardsDone from "./reducer_cards_done";

const rootReducer = combineReducers({
  cards: CardsReducer,
  activeCard: ActiveCard,
  queue: CardsInQueue,
  inProgress: CardsInProgress,
  done: CardsDone
});

export default rootReducer;
