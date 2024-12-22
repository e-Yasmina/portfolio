import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Pages/About/About';
import Menu from './Pages/Menu/Menu';


function App() {
  return (
    <Router>
      <nav>
        {/* <a href="Portfolio/">About</a> | <a href="Portfolio/Menu">Menu</a>  */}
      </nav>
      <Routes>
        <Route path="Portfolio" element={<Layout />} />
        <Route path="Portfolio/menu" element={<Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;
