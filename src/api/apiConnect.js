import axios from "axios";


const apiConnect = axios.create({
    baseURL: "http://localhost:8082/",
})