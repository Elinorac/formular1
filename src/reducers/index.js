import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import resultsReducer from './resultsReducer';
import racesReducer from './racesReducer';
export default combineReducers( {drivers: driversReducer, results: resultsReducer, races: racesReducer} );