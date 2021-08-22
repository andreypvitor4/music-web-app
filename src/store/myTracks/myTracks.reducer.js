const initialState = {
  myTracks: [],
  tracksToAdd: [],
  tracksToDelete: [],
}

export default function myTracksReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TRACK_TO_ADD_LIST':
      const trackIsAlreadyInMyList = state.myTracks.some(elem => elem.id === action.payload.id)
      const newAddState = {
        myTracks: state.myTracks,
        tracksToDelete: state.tracksToDelete.filter(elem => elem.id !== action.payload.id),
        tracksToAdd: trackIsAlreadyInMyList? state.tracksToAdd : [...state.tracksToAdd, action.payload],
      }
      saveAddAndDeleteState(newAddState)
      return newAddState

    case 'ADD_TRACK_TO_DELETE_LIST':
      const newDeleteState = {
        myTracks: state.myTracks,
        tracksToAdd: state.tracksToAdd.filter(elem => elem.id !== action.payload.id),
        tracksToDelete: [...state.tracksToDelete, action.payload],
      }
      saveAddAndDeleteState(newDeleteState)
      return newDeleteState

    case 'ADD_TRACKS_TO_MY_LIST':
      addToMyTrackListStorage(state.tracksToAdd)
      return {
        tracksToDelete: state.tracksToDelete,
        myTracks: [...state.myTracks, ...state.tracksToAdd],
        tracksToAdd: [],
      }

    case 'DELETE_TRACKS_OF_MY_LIST':
      RemoveOfMyTrackListStorage(state.tracksToDelete)
      return {
        tracksToAdd: state.tracksToAdd,
        myTracks: state.myTracks.filter( elem => !(state.tracksToDelete.some(track => track.id === elem.id)) ),
        tracksToDelete: [],
      }

    case 'GET_LOCAL_STORAGE_SAVED_TRACKS':
      const savedAddAndDeleteState = getStorageSavedAddAndDeleteState()
      const savedTracksState = getMyTracksListFromStorage()
      const filteredTracksToAdd = savedAddAndDeleteState.tracksToAdd.filter(elem => (
        !savedTracksState.some(track => track.id === elem.id)
      ))
      const myNewTracksAdded = [...savedTracksState, ...filteredTracksToAdd]
      const myNewTracks = myNewTracksAdded.filter( (elem, i) => (
        !(savedAddAndDeleteState.tracksToDelete.some(track => track.id === elem.id)) )
      )
      refreshLocalStorageTracks(myNewTracks)
      return {
        myTracks: myNewTracks,
        tracksToAdd: [],
        tracksToDelete: [],
      }

    default:
      return state
  }
}

function getMyTracksListFromStorage() {
  const myTracks = localStorage.getItem('AV--myTracks')

  if(myTracks) return JSON.parse(myTracks)

  return []
}

function addToMyTrackListStorage(tracksToAdd) {
  const myTracks = localStorage.getItem('AV--myTracks')

  const myParsedTracks = myTracks? JSON.parse(myTracks) : []
  const myNewTracks = [...myParsedTracks, ...tracksToAdd]

  localStorage.setItem('AV--myTracks', JSON.stringify(myNewTracks))
}

function RemoveOfMyTrackListStorage(tracksToDelete) {
  const myTracks = localStorage.getItem('AV--myTracks')

  const myParsedTracks = myTracks? JSON.parse(myTracks) : []
  const myNewTracks = myParsedTracks.filter( elem => !(tracksToDelete.some(track => track.id === elem.id)) )

  localStorage.setItem('AV--myTracks', JSON.stringify(myNewTracks))
}

function saveAddAndDeleteState(newState) {
  const newStateStorage = {
    tracksToAdd: newState.tracksToAdd,
    tracksToDelete: newState.tracksToDelete,
  }

  localStorage.setItem('AV--myState', JSON.stringify(newStateStorage))
}

function getStorageSavedAddAndDeleteState() {
  const savedState = localStorage.getItem('AV--myState')
  const parsedSavedState = savedState? JSON.parse(savedState) : {
    tracksToAdd: [],
    tracksToDelete: [],
  }

  return parsedSavedState
}

function refreshLocalStorageTracks(myNewTracks) {
  localStorage.setItem('AV--myTracks', JSON.stringify(myNewTracks))
}