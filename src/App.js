import React from 'react'
import { BrowserRouter, Route, Routes,  useNavigate } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';
import About from './components/About';
// import LeftSideBar from './components/LeftSideBar';

function App() {
  
  return (
    <div>

      <BrowserRouter>
        {/* <LoginForm/> */}
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/about" element={<About />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
