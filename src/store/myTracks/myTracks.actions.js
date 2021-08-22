export function addTrackToAddList(track) {
  return {
    type: 'ADD_TRACK_TO_ADD_LIST',
    payload: track,
  }
}

export function addTrackToDeleteList(track) {
  return {
    type: 'ADD_TRACK_TO_DELETE_LIST',
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

export function addMyTrackStateOnStorage(track, option) {
  return {
    type: 'ADD_MY_TRACK_STATE_ON_STORAGE',
    payload: {
      track,
      option,
    }
  }
}

export function getLocalStorageSavedTracks() {
  return {
    type: 'GET_LOCAL_STORAGE_SAVED_TRACKS'
  }
}

export function refreshLocalStorageState() {
  return {
    type: 'REFRESH_LOCAL_STORAGE_STATE',
  }
}