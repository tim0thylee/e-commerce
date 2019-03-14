import axios from 'axios';
import {API_KEY} from './keys'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
})
