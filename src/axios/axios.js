import axios from 'axios';

export default axios.create({
    baseURL: `https://frontend-test-api.alex93.now.sh/api/languages?`
});