import { createAction } from "redux-actions";

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  DELETE_START
} from "./actionTypes";
import API from "../services/API.js";

export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailure = createAction(FETCH_FAILURE);
export const fetchStart = createAction(FETCH_START);

export const fetchEvents = () => dispatch => {
  dispatch(fetchStart());
  API.get("events")
    .then(res => dispatch(fetchSuccess(res)))
    .catch(() => dispatch(fetchFailure()));
};

export const addSuccess = createAction(ADD_SUCCESS);
export const addFailure = createAction(ADD_FAILURE);
export const addStart = createAction(ADD_START);

export const addEvent = event => dispatch => {
  dispatch(addStart());
  API.post("events", event)
    .then(res => dispatch(addSuccess(res)))
    .catch(() => dispatch(addFailure()));
};

export const deleteSuccess = createAction(DELETE_SUCCESS);
export const deleteFailure = createAction(DELETE_FAILURE);
export const deleteStart = createAction(DELETE_START);

export const deleteEvent = id => dispatch => {
  dispatch(deleteStart());
  API.delete(`events/${id}`)
    .then(res => {
      dispatch(deleteSuccess(res));
    })
    .catch(() => dispatch(deleteFailure()));
};
