import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Picture from "./components/Picture";
import MainPage from "./components/main_page/MainPage";
import { PictureProvider } from "./components/context/PictureContext";

function App() {
    return (
        <div className="App">
            <PictureProvider>
                <Router>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/picture" component={Picture}/>
                </Router>
            </PictureProvider>
        </div>
    );
}

export default App;
