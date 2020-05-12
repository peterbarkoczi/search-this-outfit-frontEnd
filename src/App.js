import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Picture from "./components/Picture";
import MainPage from "./components/main_page/MainPage";
import {PictureProvider} from "./context/PictureContext";
import NavBar from "./components/navbar/NavBar";
import GlobalStyle from "./components/style-components/styled/GlobalStyle";



function App() {
    return (
        <div className="App">

            <PictureProvider>
                <GlobalStyle />
                    <NavBar/>
                    <Router>
                        <div className="container">
                            <Route exact path="/" component={MainPage}/>
                            <Route exact path="/picture" component={Picture}/>
                        </div>
                    </Router>
            </PictureProvider>
        </div>
    );
}

export default App;
