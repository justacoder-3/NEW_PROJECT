import HomePage from './components/HomePage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/authentication/LoginPage.jsx';
import SignupPage from '../pages/authentication/SignupPage.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;




