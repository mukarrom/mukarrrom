import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
