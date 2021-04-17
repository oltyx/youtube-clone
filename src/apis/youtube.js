import axios from 'axios';

const KEY = 'AIzaSyDWuZsGi1xrTQjAN4oEj37TpIWZrLZN5Fo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})