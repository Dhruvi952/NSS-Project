import logo from './logo.svg';
import './App.css';
import NavLogin from './components/NavLogin';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
//import PrivateComponent from './components/PrivateComponent';
import OfficierRegister from './components/OfficierRegister';

function AppLogin() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/officiersignup" element={<OfficierRegister />}></Route>
        <Route path="/event" element={<h1>Event </h1>}></Route>

        
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default AppLogin;