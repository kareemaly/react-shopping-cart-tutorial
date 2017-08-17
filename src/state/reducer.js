import { combineReducers } from 'redux';
import productReducer from './product/reducer';

export default combineReducers({
  product: productReducer,
});