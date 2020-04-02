import { combineReducers } from 'redux';
// import accountsReducer from './accountsReducer';
import config from './configReducer';
import storeChart from './storeChart';

export default combineReducers({
  config: config,
  chart: storeChart,
});