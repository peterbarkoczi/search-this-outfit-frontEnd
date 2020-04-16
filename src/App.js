import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Picture from "./components/Picture";
import MainPage from "./components/main_page/MainPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/picture" component={Picture} />
        </Router>
    </div>
  );
}

export default App;
