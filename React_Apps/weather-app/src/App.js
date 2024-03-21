
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import WeatherApp from '../src/routes/weather';
import WeatherDisplay from '../src/routes/WeatherDisplay';
import Login from '../src/routes/Login';
import Registration from '../src/routes/Registration';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<WeatherApp />}></Route>
      <Route path="/" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/display" element={<WeatherPage />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;



