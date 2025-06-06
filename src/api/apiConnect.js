import axios from "axios";


const apiConnect = axios.create({
    baseURL: "http://localhost:8082/api/v1/",
})

export default apiConnect;