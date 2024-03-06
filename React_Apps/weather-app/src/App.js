
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import WeatherApp from '../src/routes/weather';
import WeatherInfo from '../src/routes/display';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<WeatherApp />}></Route>
      <Route path="/display" element={<WeatherInfo />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;



