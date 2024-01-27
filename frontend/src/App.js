import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import './components/auth/Login'
import Login from './components/auth/Login';
import DropDown from './components/practise/DropDown';
import Home from './components/Home/Home'
import Circle from './components/practise/Circle';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
       {/* <Circle/> */}
       {/* <Login/> */}
      {/* <DropDown></DropDown> */}
    </div>
  );
}

export default App;
