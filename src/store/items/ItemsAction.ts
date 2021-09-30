import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "./models/actions";

export const incrementCount = (id: string) => ({
  type: INCREMENT_COUNTER,
  payload: id
});

export const decrementCount = (id: string) => ({
  type: DECREMENT_COUNTER,
  payload: id
});