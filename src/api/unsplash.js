import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b66ef09045518169840bd7bd79039538148fcc0e9310ff6f4d0561e6821ca98e'
    }
});