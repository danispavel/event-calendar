import { handleActions } from "redux-actions";

import {
  fetchSuccess,
  fetchFailure,
  fetchStart,
  addSuccess,
  addFailure,
  addStart,
  deleteSuccess,
  deleteFailure,
  deleteStart
} from "./actions";

const defaultState = { events: [], haveError: false };

const reducer = handleActions(
  {
    [fetchStart]: state => ({
      ...state,
      isLoading: true
    }),

    [fetchFailure]: state => ({
      ...state,
      isLoading: false,
      haveError: true
    }),

    [fetchSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      events: action.payload
    }),
    [addStart]: state => ({
      ...state,
      isAdding: true
    }),

    [addFailure]: state => ({
      ...state,
      isAdding: false,
      haveError: true
    }),

    [addSuccess]: (state, action) => ({
      ...state,
      isAdding: false,
      events: [...state.events, action.payload]
    }),

    [deleteStart]: state => ({
      ...state,
      isDeleting: true
    }),

    [deleteFailure]: state => ({
      ...state,
      isDeleting: false,
      haveError: true
    }),

    [deleteSuccess]: (state, action) => ({
      ...state,
      isDeleting: true,
      events: state.events.filter(item => item._id !== action.payload)
    })
  },
  defaultState
);

export default reducer;
