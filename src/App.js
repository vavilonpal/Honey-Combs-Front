import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserTestsPage from "./pages/UserTestsPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserRegisterPage from "./pages/UserRegisterPage";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/tests" element={<UserTestsPage />} />
              <Route path="/user/register" element={<UserRegisterPage />} />
          </Routes>

          <Footer/>
      </Router>
  );
}

export default App;
