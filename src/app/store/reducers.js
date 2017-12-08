import {  combineReducers} from "redux";
import { routerReducer } from "react-router-redux";

function show_or_hide(state = 'SHOW', action) {
  switch (action.type) {
    case 'SHOW':
      return action.filter
    default:
      return state
  }
}

const rootReducers = combineReducers({
  show_or_hide,
  router: routerReducer
})

export default rootReducers;