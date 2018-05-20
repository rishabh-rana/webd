import {FETCH_USER, LOADING_CREDITS} from '../actions/types';



const reducer = (state = null, action) => {
  switch (action.type) {
    case(FETCH_USER):
    console.log('fetuser type',action.payload)
      return action.payload || false;

    case(LOADING_CREDITS):
    console.log('loading credits type',state)
      const newstate = {...state};
      newstate.loadingcredits = !state.loadingcredits;
      return newstate;

  }

  return state;
};

export default reducer;
