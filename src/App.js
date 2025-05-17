import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";
import Layout from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import NotAvailablePage from './Pages/Placeholder/Placeholder';
import {Helmet} from "react-helmet";
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Blog from './Pages/Blog/Blog';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import LaptopMockup from './Components/Laptop/Laptop';
import MobileMockup from './Components/Mobile/MobileMockup';


function App() {
  //const url = "https://drive.google.com/uc?export=preview&id=10fFEM87hE-TaXGQFRo_QwB1SK3al4byD";
  //const url = "https://youtu.be/k0645eXL0oc?si=gj2cKGza7s32u8eS";
  const url = "https://res.cloudinary.com/dmjjltmhr/video/upload/v1747493082/h4fdbusd1tsvyelobyq0.mp4";



    
  function RedirectHandler() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const redirectPath = params.get("redirect");
      if (redirectPath) {
        navigate(redirectPath.replace("/Portfolio", ""));
      }
    }, []);
  
    return null;
  }
  return (
    <Router basename="/portfolio">
      <Helmet>
        <title>Yasmina Elbernoussi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <nav>
          {/* <a href="Portfolio/">About</a> | <a href="Portfolio/Menu">Menu</a> | <a href="Portfolio/contact">Contact</a> | <a href="Portfolio/projects">Projects</a> | <a href="Portfolio/resume">Resume</a> */}
          {/* <a href="/Portfolio/blog">Blog</a> */}
      </nav>
      
      <RedirectHandler /> {/* Handle GitHub Pages redirects */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/notAvailablePage" element={<NotAvailablePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/exeperience&education" element={<Experience />} />
        <Route path="/new" element={<MobileMockup videoUrl={url}/>} />
      </Routes>
    </Router>
  );
}

export default App;
