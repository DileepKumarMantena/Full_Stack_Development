
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/home" component={<Home />} /> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/app" element={<App />}></Route>


      </Routes>
    </Router>
    
  );
}

export default App;
