import { combineReducers } from 'redux';
import filltersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  fillters: filltersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
