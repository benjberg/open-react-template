import gamesReducer from "./GamesReducer";
import teamsReducer from "./TeamsReducer";
import {
  verifiedFNReducer,
  verifiedWZReducer,
  verifiedVALReducer,
} from "./VerifiedReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentgame: gamesReducer,
  currentteam: teamsReducer,
  fnverified: verifiedFNReducer,
  wzverified: verifiedWZReducer,
  valverified: verifiedVALReducer,
});

export default rootReducer;
