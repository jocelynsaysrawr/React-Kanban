import { SELECT_CARD } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_CARD:
      return action.payload;
    default:
      return state;
  }
};
