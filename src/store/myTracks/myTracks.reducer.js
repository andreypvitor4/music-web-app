const initialState = {
  myTracks: [],
  tracksToAdd: [],
  tracksToDelete: [],
}

export default function myTracksReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TRACK_TO_ADD_LIST':
      const trackIsAlreadyInMyList = state.myTracks.some(elem => elem.id === action.payload.id)
      return {
        myTracks: state.myTracks,
        tracksToDelete: state.tracksToDelete.filter(elem => elem.id !== action.payload.id),
        tracksToAdd: trackIsAlreadyInMyList? state.tracksToAdd : [...state.tracksToAdd, action.payload],
      }

    case 'ADD_TRACK_TO_DELETE_LIST':
      return {
        myTracks: state.myTracks,
        tracksToAdd: state.tracksToAdd.filter(elem => elem.id !== action.payload.id),
        tracksToDelete: [...state.tracksToDelete, action.payload],
      }

    case 'ADD_TRACKS_TO_MY_LIST':
      addToMyTrackList(state.tracksToAdd)
      return {
        tracksToDelete: state.tracksToDelete,
        myTracks: [...state.myTracks, ...state.tracksToAdd],
        tracksToAdd: [],
      }

    case 'DELETE_TRACKS_OF_MY_LIST':
      RemoveOfMyTrackList(state.tracksToDelete)
      return {
        tracksToAdd: state.tracksToAdd,
        myTracks: state.myTracks.filter( elem => !(state.tracksToDelete.some(track => track.id === elem.id)) ),
        tracksToDelete: [],
      }

    case 'GET_LOCAL_STORAGE_SAVED_TRACKS':
      return state.length > 0? state : getMyTracksListFromStorage()

    default:
      return state
  }
}

function getMyTracksListFromStorage() {
  const myTracks = localStorage.getItem('AV--myTracks')

  if(myTracks) return {
    myTracks: JSON.parse(myTracks),
    tracksToAdd: [],
    tracksToDelete: [],
  }

  return {
    myTracks: [],
    tracksToAdd: [],
    tracksToDelete: [],
  }
}

function addToMyTrackList(tracksToAdd) {
  const myTracks = localStorage.getItem('AV--myTracks')

  const myParsedTracks = myTracks? JSON.parse(myTracks) : []
  const myNewTracks = [...myParsedTracks, ...tracksToAdd]

  localStorage.setItem('AV--myTracks', JSON.stringify(myNewTracks))
}

function RemoveOfMyTrackList(tracksToDelete) {
  const myTracks = localStorage.getItem('AV--myTracks')

  const myParsedTracks = myTracks? JSON.parse(myTracks) : []
  const myNewTracks = myParsedTracks.filter( elem => !(tracksToDelete.some(track => track.id === elem.id)) )

  localStorage.setItem('AV--myTracks', JSON.stringify(myNewTracks))
}