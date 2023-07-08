import axios from "axios";
import store from './store';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.withCredentials = true;

const axiosClient = axios.create({
    baseURL: `${import.meta.env.API_BASE_URL}`,
})


export default axiosClient;