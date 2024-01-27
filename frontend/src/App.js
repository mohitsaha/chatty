import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import './components/auth/Login'
import Login from './components/auth/Login';
import DropDown from './components/practise/DropDown';
import Home from './components/Home/Home'
import Circle from './components/practise/Circle';
import {Route} from "react-router-dom"
import Chats from './components/Pages/Chats';
import Signup from './components/auth/Signup';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path="/" component={Home} exact/>
      <Route path="/chats" component={Chats}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
       {/* <Circle/> */}
       {/* <Login/> */}
      {/* <DropDown></DropDown> */}
    </div>
  );
}

export default App;
