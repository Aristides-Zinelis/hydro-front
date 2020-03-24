import axios from 'axios'


    const $axios = axios.create({
        method: 'get',
        baseURL: `http://localhost:8080`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
        }
    })

    export default $axios
