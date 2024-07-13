import { createStore, combineReducers } from 'redux';
import carReducer from '../reducers/carReducer';
import bookingReducer from '../reducers/bookingReducer';

const rootReducer = combineReducers({
  cars: carReducer,
  bookings: bookingReducer,
});

const store = createStore(rootReducer);

export default store;
