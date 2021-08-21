import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import playlistReducer from './playlist/playlist.reducer'
import fetchOptionsReducer from './fetchOptions/fetchOptions.reducer'
import mySongsReducer from './mySongs/mySongs.reduces'
import homePageToggleReducer from './HomePageToggle/HomePageToggle.reducer'


const rootReducer = combineReducers({
  playlist: playlistReducer,
  fetchOptions: fetchOptionsReducer,
  mySongs: mySongsReducer,
  homePageToggle: homePageToggleReducer,
})

// const persistedReducer = persistReducer({
//   key: 'root',
//   storage
// }, rootReducer)

export const store = createStore(rootReducer, applyMiddleware(thunk))