import { combineReducers } from 'redux';


// We want to guarantee a multiple thread of reducers
export default combineReducers({
  libraries: () => []
});