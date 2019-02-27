import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 33f923481170d94fe1c9e37bb5130fe9d60459e1316fb42b62739dae9395c6ec'
    }
})
