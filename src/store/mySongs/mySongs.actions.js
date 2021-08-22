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

export function getzSavedTracks() {
  return {
    type: 'GET_SAVED_TRACKS'
  }
}