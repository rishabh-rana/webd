import axios from "axios";
import { FETCH_USER, LOADING_CREDITS, FETCH_SURVEYS } from "./types";

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get("/api/getuser");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const handleToken = token => {
  return async dispatch => {
    dispatch({ type: LOADING_CREDITS });
    const res = await axios.post("/api/pay", token);
    dispatch({ type: FETCH_USER, payload: res.data });
    // dispatch({type: LOADING_CREDITS, payload: res.data});
  };
};

export const sendSurvey = (values,history) => {
  return async dispatch => {
    const res = await axios.post('/api/surveys',values);
    history.replace('/surveys');
    dispatch({type:FETCH_USER,payload: res.data})
  }
};

export const fetchSurvey = () => {
  return async dispatch => {
    const res = await axios.get('/api/surveys');
    dispatch({type:FETCH_SURVEYS,payload:res.data});
  }
}
