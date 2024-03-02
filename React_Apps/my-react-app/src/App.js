
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Home1 from './routes/Home1';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home1" element={<Home1 />}></Route>


      </Routes>
    </Router>
    
  );
}

export default App;



