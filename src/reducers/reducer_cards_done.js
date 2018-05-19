import { CARDS_DONE } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case CARDS_DONE:
      return action.payload;
    default:
      return state;
  }
};
