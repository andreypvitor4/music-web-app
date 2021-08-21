export function saveTrack(track) {
  return {
    type: 'SAVE_TRACK',
    payload: track,
  }
}

export function deleteTrack(id) {
  return {
    type: 'DELETE_TRACK',
    payload: id,
  }
}

export function getSavedTracks() {
  return {
    type: 'GET_SAVED_TRACKS'
  }
}