const initialState = {
  loading: true,
  tracks: [],
  error: '',
  tracksCount: 0,
  lastPage: false,
  tracksSound: [],
}

export default function playlistReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_TRACKS_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_TRACKS_NEW_PLAYLIST':
      return {
        ...state,
        loading: false,
        tracks: action.payload,
      }
    case 'FETCH_TRACKS_ADD_TO_PLAYLIST':
      return {
        ...state,
        loading: false,
        tracks: [...state.tracks, ...action.payload],
      }
    case 'FETCH_TRACKS_COUNT':
      return {
        ...state,
        tracksCount: state.tracksCount + action.payload
      }
    case 'FETCH_TRACKS_LAST_PAGE':
      return {
        ...state,
        lastPage: true,
      }
    case 'FETCH_TRACKS_FAILURE':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
} 