import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateProfile from '../CreateProfile/CreateProfile';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/createprofile">
                    <CreateProfile></CreateProfile>
                </Route>
            </Router>
        </div>
    );
}

export default App;
