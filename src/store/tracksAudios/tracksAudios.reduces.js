export default function tracksAudiosReducer(state = [], action) {
  switch(action.type) {
    case 'UPDATE_TRACKS_AUDIOS':
      console.log(action.payload)
      return action.payload.map( elem => new Audio(elem.preview) )

    default:
      return state
  }
}