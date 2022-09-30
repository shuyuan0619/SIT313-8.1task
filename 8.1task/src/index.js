import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import PostPage from './components/PostPage';
import FindQuestions from './components/FindQuestions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="post" element={<PostPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="find_question" element={<FindQuestions />} />
      </Routes>
      </BrowserRouter>
    </div>
);