import apiConnect from "../apiConnect";
import axios from "axios";

/*todo
* 1) дописать апи сервисы
* 2) создать интерфейс для логина, регистрациа
* 3) создать интефейс для профиля
*
* Ученик
* 1) создать интефрейс для тестов
* 2)  создать интефрейс для решения тестов , отображение вопроса, форма ответа
* 3) создать лицевой интерфейс для решения теста, с кнопкой начать тест
* 4) создать интерфейс  решенного теста и отображение рзульатата
*
* Учитель
* 1) создать интефрейс для тестов учителя
* 2) интерфейс создания теста
* 3) интерфейся для подписания ученико на тест
* 4) интерфейс изменения ответов  учеников
* */


const TESTS_API_URL = "http://localhost:8080/api/v1/test/solve";
const token = localStorage.getItem("access_token");

export const getAllTestsInfo = async () => {
    try {
        const response = await axios.get(`${TESTS_API_URL}/info`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    }catch (error) {
        console.log("Ошибка при получении списка тестов",error);
    }
}


