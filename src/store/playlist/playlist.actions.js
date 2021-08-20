export function fetchTracksRequest() {
  return {
    type: 'FETCH_TRACKS_REQUEST',
  }
}

export function fetchTracksNewPlaylist(tracks) {
  return {
    type: 'FETCH_TRACKS_NEW_PLAYLIST',
    payload: tracks,
  }
}

export function fetchTracksAddToPlaylist(tracks) {
  return {
    type: 'FETCH_TRACKS_ADD_TO_PLAYLIST',
    payload: tracks,
  }
}

export function fetchTracksCount(prevValue) {
  return {
    type: 'FETCH_TRACKS_COUNT',
    payload: prevValue,
  }
}

export function fetchTracksLastPage() {
  return {
    type: 'FETCH_TRACKS_LAST_PAGE',
  }
}

export function fetchTracksFailure(error) {
  return {
    type: 'FETCH_TRACKS_FAILURE',
    payload: error,
  }
}