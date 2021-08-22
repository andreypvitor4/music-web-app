export function addTrackToAdd(track) {
  return {
    type: 'ADD_TRACK_TO_ADD',
    payload: track,
  }
}

export function addTrackToDelete(track) {
  return {
    type: 'ADD_TRACK_TO_DELETE',
    payload: track,
  }
}

export function addTracksToMyList() {
  return {
    type: 'ADD_TRACKS_TO_MY_LIST',
  }
}

export function deleteTracksOfMyList() {
  return {
    type: 'DELETE_TRACKS_OF_MY_LIST',
  }
}

export function getLocalStorageSavedTracks() {
  return {
    type: 'GET_LOCAL_STORAGE_SAVED_TRACKS'
  }
}