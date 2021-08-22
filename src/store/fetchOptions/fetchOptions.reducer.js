const initialState = {
  url: 'playlist/3155776842/tracks',
  offset: 0,
  max: 8,
  newPlaylist: true,
  query: '',
  option: '',
}

export default function fetchOptionsReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_TREND_TRACKS_OPTION':
      return {
        ...state,
        url: 'playlist/3155776842/tracks',
        option: 'trend'
      }
    case 'SEARCH_OPTION':
      return {
        ...state,
        url: 'search/track',
        query: action.payload,
        option: 'search'
      }
    default:
      return state
  }
}