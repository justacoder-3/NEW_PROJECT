import HomePage from './components/HomePage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/authentication/LoginPage.jsx';
import SignupPage from '../pages/authentication/SignupPage.jsx';
import CreatePost from './components/posts/CreatePost.jsx';
import PostPage from './components/posts/PostPage.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/postpage" element={<PostPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;




