import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-section">
        <div className="locations-section">
            <div className="footer-wine">
                <img className="wine-footer" src="/images/wine.png" alt=""></img>
            </div>
            <div className="lafayette">
                <h2><a className="restaurant" href="https://servingsushi.com/golf/proto/servingsushi/lafayette/lafayette.htm" target="_blank" rel="noreferrer">Downtown Lafayette</a></h2>
                <p>412 Jefferson Street</p>
                <p>Lafayette, LA 70501</p>
                <p>Phone: <a className="phone" href="tel:+13372343474">(337) 234-3474</a></p>
            </div>
            <div className="baton-rouge">
                <h2><a className="restaurant" href="https://servingsushi.com/golf/proto/servingsushi/baton_rouge/baton_rouge.htm" target="_blank" rel="noreferrer">Downtown Baton Rouge</a></h2>
                <p>100 Lafayette Street</p>
                <p>Baton Rouge, LA 70801</p>
                <p>Phone: <a className="phone" href="tel:+12253465100">(225) 346-5100</a></p>
            </div>
            <div className="new-orleans">
                <h2><a className="restaurant" href="https://servingsushi.com/golf/proto/servingsushi/new_orleans/new_orleans.htm" target="_blank" rel="noreferrer">Downtown New Orleans</a></h2>
                <p>601 Poydras Suite B</p>
                <p>New Orleans, LA 70130</p>
                <p>Phone: <a className="phone" href="tel:+15046083474">(504) 608-3474</a></p>
            </div>
        </div>
        <div className="copy-right">
            Copyright &copy; 2021. All rights reserved.  Powered by &nbsp; <a className="phone" href="https://www.cinquewd.com" target="_blank" rel="noreferrer">Cinque Web Development</a>
        </div>
        </div>
    )
}
