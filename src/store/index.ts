import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunkMiddleware],
  // @ts-ignore
  // enhancers: [Reactotron.createEnhancer()],
});
export const persistor = store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = any;
