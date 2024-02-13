
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

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from './routes/Home';
// import Home1 from './routes/Home1';

// function App() {
//     return (
//         <Router>
//             <Route path="/routes/Home1" component={Home1} />
//             <Route exact path="/" component={Home} />
//         </Router>
//     );
// }

// export default App;

