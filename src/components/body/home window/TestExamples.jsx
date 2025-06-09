import {Link} from "react-router-dom";
import React from "react";

const testExamples = [
    { title: "🧠 Логика и мышление", questions: 10 },
    { title: "💻 Основы программирования", questions: 15 },
    { title: "🌍 География для начинающих", questions: 12 },
];
export default function TestExample() {
    return (
        <section className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Попробуй готовые тесты</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {testExamples.map((test, index) => (
                    <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                        <p className="text-sm mb-4">{test.questions} вопросов</p>
                        <Link to="/tests" className="text-yellow-700 hover:underline">
                            Пройти →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}