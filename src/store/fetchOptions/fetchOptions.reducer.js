const initialState = {
  url: '',
  offset: 0,
  max: 20,
  newPlaylist: true,
  query: '',
}

export default function fetchOptionsReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_TREND_TRACKS':
      return {
        ...state,
        url: 'playlist/3155776842/tracks',
      }
    case 'SEARCH':
      return {
        ...state,
        url: 'search/track',
        query: action.payload,
      }
    default:
      return state
  }
}