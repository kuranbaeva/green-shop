import axios from 'axios'

const intance = axios.create({
    baseURL: 'https://hadzhi2003.pythonanywhere.com/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

intance.interceptors.request.use((config) => {
    const TOKEN = localStorage.getItem('token')
    //     const USERID=localStorage.getItem('userId')
    //     const Favorite=localStorage.getItem('favoriteItems')
    // const Cart=localStorage.getItem('cartItems')
    // const USERID=localStorage.getItem('userId')

    if (TOKEN) {
        config.headers.Authorization = 'Bearer ' + TOKEN
    }
    return config
}, error => Promise.error(error))

intance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);
export default intance