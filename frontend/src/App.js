import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import './components/auth/Login'
import Login from './components/auth/Login';
import DropDown from './components/practise/DropDown';
import Home from './components/Home/Home'
import Circle from './components/practise/Circle';
import { Route, Routes } from "react-router-dom"
import Chats from './components/Pages/Chats';
import Signup from './components/auth/Signup';
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>

        <Route path="/" element={<Home/>}  />
        <Route path="/chats" element={<Chats/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
