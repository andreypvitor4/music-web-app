import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import playlistReducer from './playlist/playlist.reducer'
import fetchOptionsReducer from './fetchOptions/fetchOptions.reducer'
import mySongsReducer from './mySongs/mySongs.reduces'
import tracksAudiosReducer from './tracksAudios/tracksAudios.reduces'

const rootReducer = combineReducers({
  playlist: playlistReducer,
  fetchOptions: fetchOptionsReducer,
  mySongs: mySongsReducer,
  tracksAudios: tracksAudiosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))