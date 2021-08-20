import axios from 'axios'

const dzApi = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '6f5654be33msha6c521cbe9167adp13c04djsn7f04458b9a8f',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  }
})

export default dzApi