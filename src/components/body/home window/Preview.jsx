import {Link} from "react-router-dom";
import React from "react";


export default function Preview() {

    /* Агитационная часть */
    return (
        <section className="text-center py-20 bg-yellow-100 shadow-inner">
            <h1 className="text-5xl font-bold text-yellow-800">HoneyCombs</h1>
            <p className="mt-4 text-xl text-yellow-700">Создавай, решай, развивайся!</p>
            <div className="mt-8 space-x-4">
                <Link to="/tests" className="bg-yellow-600 text-white px-6 py-2 rounded-xl shadow hover:bg-yellow-700">
                    🔸 Начать сейчас
                </Link>
                <Link to="/create"
                      className="bg-white border border-yellow-500 px-6 py-2 rounded-xl shadow hover:bg-yellow-100">
                    🔸 Создать свой тест
                </Link>
            </div>
        </section>
    )
}