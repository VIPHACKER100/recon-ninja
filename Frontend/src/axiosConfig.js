import axios from "axios"

const data = localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")) : null
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/';

export const changeHeaders = (token) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

if (data) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
}
