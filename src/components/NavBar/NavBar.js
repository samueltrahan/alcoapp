import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo">
            <a href="/"><img className="wine" src="/images/wine.png" alt=""></img></a>
            </div>
            <div className="nav-links">
                <a className="drinks" href="/wines">Wines</a>
                <a className="drinks" href="/sakes">Sakes</a>
                <a className="drinks" href="/specialty">Specialty Drinks</a>
            </div>
        </div>
    )
}
