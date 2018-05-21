import { FETCH_USER, LOADING_CREDITS, FETCH_SURVEYS } from "../actions/types";

const reducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
    let newsurveys = null;
      if(state && state.surveys){
        newsurveys = [...state.surveys];
      }
      const newstate2 = action.payload || false;
      newstate2.surveys = newsurveys;
      console.log(newstate2);
      return newstate2;

    case LOADING_CREDITS:
      const newstate = { ...state };
      newstate.loadingcredits = !state.loadingcredits;
      return newstate;

    case FETCH_SURVEYS:
      const newstate1 = { ...state };
      newstate1.surveys = action.payload;
      console.log(newstate1);
      return newstate1;
  }

  return state;
};

export default reducer;
