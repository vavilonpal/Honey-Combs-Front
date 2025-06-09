import {Wrapper} from "./components/header/wrapper/Wrapper";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";
import {useEffect, useState} from "react";
function App() {

    const [userIsLogged, setUserIsLogged] = useState(false);
    // Проверка токена при загрузке
    useEffect(() => {
        const token = localStorage.getItem("token");
        setUserIsLogged(!!token);
    }, []);

    // Функция логина — сохраняем токен и обновляем статус
    const handleLogin = () => {
        localStorage.setItem("token", "example_token");
        setUserIsLogged(true);
    };

    // Функция выхода — удаляем токен и обновляем статус
    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserIsLogged(false);
    };
    //todo сдлеать чтобы значяения обновяллось
  return (
      <Router>
          <Header/>


          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
      </Router>
  );
}

export default App;
