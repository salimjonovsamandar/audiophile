import { createStore } from "redux";

const defaultState = {
  cards: [],
};

export const cardReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case "Add_cards":
      return { ...state, cards: [...state.cards, actions.payload] };
    case "Delete_cards":
      return {
        ...state,
        cards: [...state.cards.filter((el) => el.id != actions.payload)],
      };
    case "Remove__all":
      return {
        ...state,
        cards: [...(state.cards = [])],
      };
    default:
      return state;
  }
};

export const store = createStore(cardReducer);
