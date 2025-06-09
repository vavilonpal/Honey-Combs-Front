import {Link} from "react-router-dom";
import React from "react";


export default function GoLoginOrRegister() {
    return (
        <section className="py-12 text-center">
            <h2 className="text-xl mb-4">Создай аккаунт и начни решать тесты сегодня</h2>
            <div className="space-x-4">
                <Link to="/register" className="bg-yellow-600 text-white px-6 py-2 rounded-xl hover:bg-yellow-700">
                    Зарегистрироваться
                </Link>
                <Link to="/login"
                      className="bg-white border border-yellow-500 px-6 py-2 rounded-xl hover:bg-yellow-100">
                    Войти
                </Link>
            </div>
        </section>
    );
}