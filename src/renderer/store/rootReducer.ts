import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import Reduxie from 'reduxie';
import counterReducer from './slices/counter/counterSlice';
import settingsReducer from './slices/settings/settingsSlice';
import updaterReducer from './slices/updater/updaterSlice';
import type { History } from 'history';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    settings: settingsReducer,
    updater: updaterReducer,
  });

const outerReducer = (history: History) =>
  Reduxie.OuterReducer(rootReducer(history));

export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

export default outerReducer;
