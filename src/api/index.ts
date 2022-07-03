import axios from 'axios';

const APPLICATION_JSON = 'application/json';

axios.defaults.baseURL = `${process.env.REACT_APP_POSTS_API}/`;
axios.defaults.headers.common['Content-Type'] = APPLICATION_JSON;
axios.defaults.headers.common.Accept = APPLICATION_JSON;


export const axiosInstance = axios.create();
