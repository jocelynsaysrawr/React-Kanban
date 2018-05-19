import { CARDS_IN_QUEUE } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case CARDS_IN_QUEUE:
      return action.payload;
    default:
      return state;
  }
};
