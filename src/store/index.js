import { configureStore } from '@reduxjs/toolkit'
import  authReducer from './reducers/auth'
// import productReducer from "./reducers/products"
// import categoryReducer from "./reducers/categories"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedauthReducer = persistReducer(persistConfig, authReducer)
export const store= configureStore({

  reducer: {
    auth:persistedauthReducer,
    // product:productReducer,
    // category:categoryReducer,
  }
})
export let persistor = persistStore(store)