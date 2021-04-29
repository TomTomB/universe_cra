import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import Reduxie from 'reduxie';
import { createHashHistory } from 'history';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'connected-react-router';
import { useDispatch } from 'react-redux';

export const history = createHashHistory();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [
    ...getDefaultMiddleware(),
    routerMiddleware(history),
    Reduxie.Middleware('universe', { throttleTime: 500, deleteCount: 20 }),
  ],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
