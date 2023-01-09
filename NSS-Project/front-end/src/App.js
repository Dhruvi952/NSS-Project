import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import OfficierRegister from './components/OfficierRegister';
import Login from './components/Login';
import EventRegister from './components/Event';
import EventList from './components/EventList';
import EventUpdation from './components/UpdateEvent';
import StudentList from './components/StudentList';
import OfficierList from './components/OfficierList';
import Dashboard from './components/Dashboard';
import CommonNav from './components/CommonNav';
import Students from './components/Students';
import Events from './components/Events';
import PrivateComponentCoordinator from './components/PrivateComponentCoordinator';
import PrivateComponentOfficer from './components/PrivateComponentOfficer';

/*function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/contactus" element={<h1>Contact Us</h1>}></Route>
        <Route path="/aboutus" element={<h1>About Us</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>
        
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CommonNav />
        <Routes>

          <Route element={<PrivateComponentCoordinator />}>

            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="/studentlist" element={<StudentList />}></Route>
            <Route path="/officierregister" element={<OfficierRegister />}></Route>
            <Route path="/officierlist" element={<OfficierList />}></Route>
            <Route path="/event" element={<EventRegister />}></Route>
            <Route path="/eventlist" element={<EventList />}></Route>
            <Route path="/profile" element={<h1>Profile</h1>}></Route>
            <Route path="/logout" element={<h1>LogOut</h1>}></Route>

            <Route path="/updateevent/:id" element={<EventUpdation />}></Route>
          </Route>

          <Route element={<PrivateComponentOfficer />}>

            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/students" element={<Students />}></Route>

            <Route path="/events" element={<Events />}></Route>
            <Route path="/officierprofile" element={<h1>Profile</h1>}></Route>
            <Route path="/logout" element={<h1>LogOut</h1>}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;