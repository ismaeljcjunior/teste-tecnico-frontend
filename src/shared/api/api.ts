import axios from 'axios'

axios.defaults.baseURL = 'https://api.example.com';

export const getCountries = () => {
    return axios.get('/Countries')
}


