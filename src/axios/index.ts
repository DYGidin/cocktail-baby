import axios from 'axios'

axios.interceptors.request.use(function (config) {
    config.baseURL = import.meta.env.VITE_API_URL
    return config
}, function (e) {
    return Promise.reject(e)
})

export {
    axios
}