import React, {useState} from 'react';
import './Featured.css';
import {SAKE} from '../../sakeDB';
import Caymus from '../../assets/caymus.jpg';
import Sake from '../../assets/delight.jpg';

export default function Featured() {
  
    return (
        <div className="featured">
            <div className="xyz-in" xyz="fade up big">
            <div className="wine-feature">
                <img src={Caymus} alt=""></img>
            </div>
            </div>
            <div className="wine-description" >
                <h1>Caymus</h1>
                <h3>Vinyard:  Caymus Vineyards</h3>
                <h2>Region</h2>
                <h2>Taste Notes</h2>
                <h2>Pairing</h2>
            </div>
            <div className="sake-feature">
                <img className="sake-pic" src={Sake} alt=""></img>
            </div>
            <div className="sake-description">
            <h1>Heaven of Tipsy Delight</h1>
                <h3>Vinyard:  Caymus Vineyards</h3>
                <h2>Region</h2>
                <h2>Taste Notes</h2>
                <h2>Pairing</h2>
            </div>
            <div className="xyz-in" xyz="fade up big">I will animate in!</div>
        </div>
    )
}
