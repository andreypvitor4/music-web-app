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