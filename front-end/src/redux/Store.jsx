import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './reducer/AuthReducer';
import UserReducer from './reducer/UserReducer';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
})

const persistConfig = {
  key:'root' ,
  storage ,
  whitelist: ['auth', 'user']
}
const persistedReducer = persistReducer ( persistConfig , rootReducer)

const Store = configureStore ({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})
export default Store;