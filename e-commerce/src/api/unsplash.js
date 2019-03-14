import axios from 'axios';
import {API_KEY} from './keys'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
<<<<<<< HEAD
        Authorization: `Client-ID ${API_KEY}`
=======
        Authorization: 'Client-ID'
>>>>>>> 8c8999014fb72f2681d36cdb60c680b1a7b92559
    }
})
