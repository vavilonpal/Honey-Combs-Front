import React, {useEffect, useState} from 'react';
import {getUserProfileData} from "../../../api/users-api/UserAuthAPI";
import {logout} from "../../../service/authService";

const UserProfile = () => {

    const [user, setUser] = useState(null);


    // Хук для получения данных пользователя
    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUserProfileData();
            setUser(data);
        };

        fetchUser();
    }, []);

    if (!user) {
        return <div>Загрузка...</div>;
    }
    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Профиль пользователя</h1>

            <div className="space-y-2">
                <p><strong>Имя:</strong> {user.fullName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username</strong> {user.username}</p>

            </div>
            <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem('user');

                    logout();
                    window.location.href = '/login'; // или navigate("/login")
                }}
            >
                Выйти
            </button>
        </div>
    );
}

export default UserProfile;