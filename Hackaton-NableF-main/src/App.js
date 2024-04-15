import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import About from './Pages/About';
import Signup from './Pages/Signup'; 
import Mapp from './Pages/Map'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/map" element={<Mapp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
