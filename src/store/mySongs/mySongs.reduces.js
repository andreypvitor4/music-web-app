export default function mySongsReducer(state = [], action) {
  switch(action.type) {
    case 'SAVE_TRACK':
      addToTrackIdList(action.payload)
      return [
        ...state,
        action.payload,
      ]

    case 'DELETE_TRACK':
      RemoveOfTrackIdList(action.payload.id)
      return state.filter( elem => (elem.id !== action.payload.id) )

    case 'GET_SAVED_TRACKS':
      return state.length > 0? state: getMyTracks()

    default:
      return state
  }
}

function getMyTracks() {
  const myTracks = localStorage.getItem('AV--myTracks')

  if (myTracks) return JSON.parse(myTracks)

  return []
}

function addToTrackIdList(track) {
  const myTracks = localStorage.getItem('AV--myTracks')

  const myTracksData = {
    id: track.id,
    duratiom: track.duration,
    title_short: track.title,
    preview: track.preview,
    link: track.link,
    album: {
      cover_big: track.album.cover_big,
      title: track.album.title,
    },
    artist: {
      name: track.artist.name
    },
  }

  if(myTracks) {
    const myParsedTracks = JSON.parse(myTracks)
    myParsedTracks.push(myTracksData)

    localStorage.setItem('AV--myTracks', JSON.stringify(myParsedTracks))
  }else {
    localStorage.setItem('AV--myTracks', JSON.stringify([myTracksData]))
  }
}

function RemoveOfTrackIdList(id) {
  const myTracks = localStorage.getItem('AV--myTracks')

  if(myTracks) {
    const myParsedTracks = JSON.parse(myTracks)
    const newTracks = myParsedTracks.filter( elem => elem.id != id )

    localStorage.setItem('AV--myTracks', JSON.stringify(newTracks))
  }
}