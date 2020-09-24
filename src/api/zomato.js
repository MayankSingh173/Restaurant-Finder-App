import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '99e49d32a3c7315088cf23a1ab61104d' 
    }
});