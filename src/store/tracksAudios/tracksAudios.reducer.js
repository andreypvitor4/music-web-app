export default function tracksAudiosReducer(state = [], action) {
  switch(action.type) {
    case 'UPDATE_TRACKS_AUDIOS':
      return (
        action.payload.length > 0 ? 
        [...action.payload.map( elem => new Audio(elem.preview) ), ...state] : 
        state
      )

    default:
      return state
  }
}