export const CREATE_CARD = "create_card";
export const SELECT_CARD = "select_card";
export const CARDS_IN_QUEUE = "cards_in_queue";
export const CARDS_IN_PROGRESS = "cards_in_progress";
export const CARDS_DONE = "cards_done";

export const createCard = values => {
  console.log("createCard values: ", values);
  return {
    type: CREATE_CARD
  };
};

export const selectCard = card => {
  console.log("selected card: ", card.card_id);

  return {
    type: SELECT_CARD,
    payload: card
  };
};

export const cardsInQueue = values => {
  const queue = values.filter(card => card.card_status === "Queue");

  return {
    type: CARDS_IN_QUEUE,
    payload: queue
  };
};

export const cardsInProgress = values => {
  const inProgress = values.filter(card => card.card_status === "In Progress");

  return {
    type: CARDS_IN_PROGRESS,
    payload: inProgress
  };
};

export const cardsDone = values => {
  const done = values.filter(card => card.card_status === "Done");

  return {
    type: CARDS_DONE,
    payload: done
  };
};
