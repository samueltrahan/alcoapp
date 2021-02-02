import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import SakePage from './pages/SakePage/SakePage';
import WinePage from './pages/WinePage/WinePage';

export default function App() {
    return (
        <Router>
            <NavBar />
            <Route exact path="/" render={() => 
            <div>
                <Featured />
                <Footer />
            </div>
            }>
            </Route> 
            <Route exact path="/sakes" render={() => 
            <div>
                <SakePage />
                <Footer />
            </div>
            }>
            </Route>
            <Route exact path="/wines" render={() => 
            <div>
                <WinePage />
                <Footer />
            </div>
            }>
            </Route>
        </Router>
    )
}
