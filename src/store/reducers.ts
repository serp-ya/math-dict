import { combineReducers } from 'redux';
import { TASKS_STORE_KEY, tasksReducer } from './tasks';

export const reducers = combineReducers({
  [TASKS_STORE_KEY]: tasksReducer,
});