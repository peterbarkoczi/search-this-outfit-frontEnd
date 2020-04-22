import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Picture from "./components/Picture";
import MainPage from "./components/main_page/MainPage";
import PictureContextProvider from "./components/context/PictureContext";

function App() {
    return (
        <div className="App">
            <PictureContextProvider>
                <Router>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/picture" component={Picture}/>
                </Router>
            </PictureContextProvider>
        </div>
    );
}

export default App;
