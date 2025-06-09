import React from "react";


export default function Features() {
    return (
        <section className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Что умеет HoneyCombs?</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-lg">
                <li>✅ Создавай тесты с разными типами вопросов</li>
                <li>✅ Делись тестами с друзьями или студентами</li>
                <li>✅ Решай тесты других пользователей и получай баллы</li>
                <li>✅ Соревнуйся в рейтинге и прокачивай навыки</li>
            </ul>
        </section>
    )
}