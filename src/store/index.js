import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import playlistReducer from './playlist/playlist.reducer'
import fetchOptionsReducer from './fetchOptions/fetchOptions.reducer'


const rootReducer = combineReducers({
  playlist: playlistReducer,
  fetchOptions: fetchOptionsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store