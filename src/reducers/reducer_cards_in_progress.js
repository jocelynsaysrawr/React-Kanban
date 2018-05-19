import { CARDS_IN_PROGRESS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case CARDS_IN_PROGRESS:
      return action.payload;
    default:
      return state;
  }
};
