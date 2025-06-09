import {Link} from "react-router-dom";
import React from "react";



const topUsers = [
    { name: "@SmartBee", score: 1850 },
    { name: "@CodeQueen", score: 1720 },
    { name: "@QuizLover", score: 1605 },
];
export default function TopUsers() {
    return (
        <section className="bg-yellow-200 py-12 px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">🏆 Топ-3 за неделю</h2>
            <ul className="space-y-2 text-lg">
                {topUsers.map((user, index) => (
                    <li key={index}>
                        {index + 1}. {user.name} — {user.score} очков
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <Link to="/rating" className="underline text-yellow-800 hover:text-yellow-900">
                    📈 Смотреть весь рейтинг
                </Link>
            </div>
        </section>
    )
}