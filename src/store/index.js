import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import playlistReducer from './playlist/playlist.reducer'
import fetchOptionsReducer from './fetchOptions/fetchOptions.reducer'
import myTracksReducer from './myTracks/myTracks.reducer'
import tracksAudiosReducer from './tracksAudios/tracksAudios.reducer'

const rootReducer = combineReducers({
  playlist: playlistReducer,
  fetchOptions: fetchOptionsReducer,
  myTracks: myTracksReducer,
  tracksAudios: tracksAudiosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))