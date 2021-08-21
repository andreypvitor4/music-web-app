export default function mySongsReducer(state = [], action) {
  switch(action.type) {
    case 'SAVE_TRACK':
      return [
        ...state,
        action.payload,
      ]

    case 'DELETE_TRACK':
      return state.filter( elem => (elem.id !== action.payload) )

    default:
      return state
  }
}