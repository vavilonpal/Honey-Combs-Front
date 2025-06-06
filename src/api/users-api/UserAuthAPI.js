import axios from 'axios';


const USER_API_URL = "http://localhost:8080/api/v1/user";

const AUTH_API_URL = "http://localhost:8080/api/v1/auth";


export const loginUser = async (userData) => {
    const response = await axios.post(`${AUTH_API_URL}/login`, userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}


export const getUserProfileData = async () => {
    const token = localStorage.getItem("access_token");
    try {
        const response = await axios.get(`${USER_API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    } catch (err) {
        console.log("Ошибка при получении данных пользователя:", err);
    }
}