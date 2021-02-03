import React, {useState} from 'react';
import './NavBar.css';

export default function NavBar() {
    const [nav, setNav] = useState(false)


    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener("scroll", changeBackground)



    return (
        <div className={nav ? "nav-bar active" : "nav-bar" }>
            <div className="logo">
            <a href="/"><img className="wine" src="/images/wine.png" alt=""></img></a>
            </div>
            <div className="nav-links">
                <a className="drinks" href="/wines">Wines</a>
                <div class="dropdown-comp ui compact menu">
                <div class="dropdown-menu ui simple dropdown item">
                     Wines
                 <i class="dropdown icon"></i>
                <div class="menu-list menu">
                <a className="wine-links" href="/redwines">Red Wine</a><br />
                <a className="wine-links" href="/whitewines">White Wine</a>
                </div>
                </div>
                </div>
                <a className="drinks" href="/sakes">Sakes</a>
                <a className="drinks" href="/specialty">Specialty Drinks</a>
            </div>
        </div>
    )
}
