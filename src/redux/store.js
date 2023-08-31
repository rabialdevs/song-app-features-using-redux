import { createStore, combineReducers } from "redux";
import songReducer from "./reducers/songsReducer";
import songDataReducer from "../data/songData";

const rootReducer = combineReducers({
  selectedSong: songReducer,
  songsData: songDataReducer,
});

const store = createStore(rootReducer);

export default store;
