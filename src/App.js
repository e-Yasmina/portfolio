import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import NotAvailablePage from './Pages/Placeholder/Placeholder';
import {Helmet} from "react-helmet";
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
//import Header from './Components/Header/Header';


function App() {
  return (
    <Router>
      <Helmet>
        <title>Yasmina Elbernoussi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <nav>
          {/* <a href="Portfolio/">About</a> | <a href="Portfolio/Menu">Menu</a> | <a href="Portfolio/contact">Contact</a> | <a href="Portfolio/projects">Projects</a> | <a href="Portfolio/resume">Resume</a> */}
      </nav>
      <Routes>
        <Route path="Portfolio" element={<Layout />} />
        <Route path="Portfolio/menu" element={<Menu/>} />
        <Route path="Portfolio/notAvailablePage" element={<NotAvailablePage/>} />
        <Route path="Portfolio/contact" element={<Contact/>} />
        <Route path="Portfolio/projects" element={<Projects/>} />
        <Route path="Portfolio/resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
