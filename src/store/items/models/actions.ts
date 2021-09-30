export const INCREMENT_COUNTER = 'ITEMS/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'ITEMS/DECREMENT_COUNTER';

interface IncrementAction{
  type: typeof INCREMENT_COUNTER
  payload: string
}
interface DecrementAction{
  type: typeof DECREMENT_COUNTER
  payload: string
}

export type ItemsActionTypes = IncrementAction | DecrementAction;