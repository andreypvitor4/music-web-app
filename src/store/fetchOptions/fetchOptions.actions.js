export function getTrendTracks() {
  return {
    type: 'GET_TREND_TRACKS',
  }
}

export function search(query) {
  return {
    type: 'SEARCH',
    payload: query,
  }
}