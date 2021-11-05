import { combineReducers } from 'redux';
import authReducer from './authSlice';
import homeReducer from './homeSlice';

const rootReducer = combineReducers({
  authReducer,
  homeReducer,
});

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
