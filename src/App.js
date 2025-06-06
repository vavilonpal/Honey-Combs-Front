import {Wrapper} from "./components/header/wrapper/Wrapper";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";
function App() {

    //todo сдлеать чтобы значяения обновяллось
    let userIsLogged = !!localStorage.getItem("access-token");
  return (
      <Router>
          <Header isLoggedIn={userIsLogged} />


          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
      </Router>
  );
}

export default App;
