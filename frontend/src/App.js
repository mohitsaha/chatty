import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import './components/auth/Login'
import Login from './components/auth/Login';
import DropDown from './components/practise/DropDown';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Home/>
       {/* <Login/> */}
      {/* <DropDown></DropDown> */}
    </div>
  );
}

export default App;
