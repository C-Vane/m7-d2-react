import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import jobs from "../reducers/jobs";
import currentJob from "../reducers/currentJob";
import favorites from "../reducers/favorites";
import thunk from "redux-thunk";
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  jobs: [],
  error: {
    status: 0,
    message: "",
  },
  currentJob: {},
  favorites: [],
};

const rootReducer = combineReducers({ jobs: jobs, currentJob: currentJob, favorites: favorites });
export default function configureStore() {
  return createStore(rootReducer, initialState, composedEnhancer(applyMiddleware(thunk)));
}
