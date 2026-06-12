import axios from "axios";

const api = axios.create({
  baseURL:
    "https://travel-explorer-backend-5g9d.onrender.com/"
});

export default api;