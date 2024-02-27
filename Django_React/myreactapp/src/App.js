import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MyModelList from '../src/routes/MyModelList';
import MyModelDetail from '../src/routes/MyModelDetail';
import MyModelForm from '../src/routes/MyModelForm';

const App = () => {
    return (
        <Router>
              <Routes>
                <Route  path="/" component={MyModelList} />
                <Route  path="/models/:id" component={MyModelDetail} />
                <Route  path="/create" component={MyModelForm} />
                <Route  path="/edit/:id" component={MyModelForm} />
                </Routes>
        </Router>
    );
};

export default App;




