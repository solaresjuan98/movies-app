import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a948d9a48f7fe6c0eabf08226dee8545',
        language: 'en-US'
    }
});

export default movieDB;