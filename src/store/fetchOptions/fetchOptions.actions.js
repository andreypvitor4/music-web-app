export function getTrendTracksOption() {
  return {
    type: 'GET_TREND_TRACKS_OPTION',
  }
}

export function searchOption(query) {
  return {
    type: 'SEARCH_OPTION',
    payload: query,
  }
}