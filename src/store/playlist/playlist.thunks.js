import dzApi from '../../services/dzApi'
import { 
  fetchTracksRequest, 
  fetchTracksNewPlaylist, 
  fetchTracksAddToPlaylist, 
  fetchTracksFailure,
  fetchTracksLastPage,
  fetchTracksCount,
} from './playlist.actions'

export default function fetchTracks({url, query, offset = 0, max = 20, newPlaylist = true}) {
  
  return async function(dispatch, getState) {
    const { playlist } = getState()

    dispatch(fetchTracksRequest())
    try {
      const tracks = await dzApi.get(`${url}?index=${offset}&limit=${max}&q=${query}`)

      dispatch(fetchTracksCount(tracks.data.data.length))
      console.log(tracks.data.data)

      newPlaylist && dispatch(fetchTracksNewPlaylist(tracks.data.data))
      !newPlaylist && dispatch(fetchTracksAddToPlaylist(tracks.data.data))

      playlist.tracksCount >= tracks.data.total && dispatch(fetchTracksLastPage())

    } catch (error) {
      dispatch(fetchTracksFailure(error))
      console.log(error)
    }
  }
}