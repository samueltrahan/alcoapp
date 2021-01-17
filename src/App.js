import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div>
           <NavBar />
           <Featured />
           <Footer />
        </div>
    )
}
