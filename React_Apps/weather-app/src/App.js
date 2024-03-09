
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import WeatherApp from '../src/routes/weather';
import WeatherInfo from '../src/routes/display';
import Login from '../src/routes/Login';
import Registration from '../src/routes/Registration';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<WeatherApp />}></Route>
      <Route path="/register" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/display" element={<WeatherInfo />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;



