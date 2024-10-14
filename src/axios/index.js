import axios from 'axios'

const intance = axios.create({
    baseURL: 'https://hadzhi2003.pythonanywhere.com/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})


export default intance