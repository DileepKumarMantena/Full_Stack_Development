
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from '../src/routes/Home';
import BookingConfirmation from '../src/routes/BookingConfirmation';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/bookingconfirmation" element={<BookingConfirmation />}></Route>




      </Routes>
    </Router>
    
  );
}

export default App;



