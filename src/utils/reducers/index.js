import gamesReducer from "./GamesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentgame: gamesReducer,
});

export default rootReducer;
