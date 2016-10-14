import { SAVE_COMMENT } from '../actions/types';

//reducers always are a function that recieves a piece of state and an action
export default function(state =[], action){
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload ];
  }
  
  return state;
}