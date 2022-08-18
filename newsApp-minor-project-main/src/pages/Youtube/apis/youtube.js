import axios from 'axios';
const KEY = 'AIzaSyBTBuv1c1e63p1ZUC7NzP1hSlBaUeL8MXI'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})