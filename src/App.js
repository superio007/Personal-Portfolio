import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navBar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Side from './Components/SideBar'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
      </Router> 
    </>
  );
}

export default App;
