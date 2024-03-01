
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import RecipeFinder from './routes/recipes';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<RecipeFinder/>}></Route>
      </Routes>
    </Router>
    
  );
}
export default App;



