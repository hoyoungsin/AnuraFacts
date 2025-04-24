import axios from 'axios';

const api = axios.create({
    baseURL: "frog api"
    //create and replace with frog database
})

export default api