import axios from 'axios'

const dzApi = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  }
})

export default dzApi