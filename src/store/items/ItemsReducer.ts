import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "./models/actions";

import {Items} from './models/Items';
import {AnyAction} from "redux";

const defaultState: Items = {
  items: [{
    id: "1",
    name: "Item 1",
    price: 531,
    count: 0
  }, {
    id: "2",
    name: "Item 2",
    price: 501,
    count: 0
  }, {
    id: "3",
    name: "Item 3",
    price: 502,
    count: 0
  }, {
    id: "4",
    name: "Item 4",
    price: 503,
    count: 0
  }, {
    id: "5",
    name: "Item 5",
    price: 504,
    count: 0
  }, {
    id: "6",
    name: "Item 6",
    price: 505,
    count: 0
  }]
};

export const itemsReducer = (state = defaultState, action: AnyAction) => {
  const nextState = {
    items: state.items
  };

  switch (action.type) {
    case INCREMENT_COUNTER: {
      for (let i = 0; i < nextState.items.length ; i++){
        if(nextState.items[i].id === action.payload){
          nextState.items[i].count = state.items[i].count + 1;
        }
      }
      return nextState;
    }
    case DECREMENT_COUNTER: {
      for (let i = 0; i < nextState.items.length ; i++){
        if(nextState.items[i].id === action.payload){
          nextState.items[i].count = state.items[i].count - 1;
        }
      }
      return nextState;
    }
    default:
      return state
  }
};