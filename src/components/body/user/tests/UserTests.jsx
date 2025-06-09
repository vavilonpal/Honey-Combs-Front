import {Wrapper} from "../../../header/wrapper/Wrapper";
import React, {useEffect, useState} from "react";
import {getAllTestsInfo} from "../../../../api/tests-api/StudentTestServiceAPI";
import {Link} from "react-router-dom";


export default function UserTests() {
    const [testsData, setTestsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllTestsInfo();
                setTestsData(data);
                console.log(data);
            } catch (error) {
                console.error("Ошибка при загрузке тестов:", error);
            }
        };

        fetchData();
    }, []);

    if (testsData.length === 0) {
        return (
            <Wrapper>
                <span className="text-gray-600">Тесты не найдены</span>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h1 className="text-2xl font-semibold mb-6">Мои тесты</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testsData.map((test, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-bold mb-2">{test.title}</h2>
                        <p className="text-sm text-gray-600 mb-1">📚 Предмет: {test.schoolSubjectName}</p>
                        <p className="text-sm text-gray-600 mb-1">👩‍🏫 Учитель: {test.teacherFullName}</p>
                        <p className="text-sm text-gray-600 mb-1">🎓 Класс: {test.classLevel}</p>
                        <p className="text-sm text-gray-600 mb-1">🧪 Тип: {test.type}</p>
                        <p className="text-sm text-gray-600 mb-1">⏱️ Время: {test.duration} мин</p>
                        <p className="text-sm text-gray-600 mb-3">📄 Сложность: {test.complexity}</p>
                        <p className="text-sm text-gray-700 mb-4">{test.description}</p>

                        <Link
                            to={`/test/${index}`} // или test.id, если есть
                            className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                        >
                            Начать решение
                        </Link>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}