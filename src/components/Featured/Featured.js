import React from 'react';
import './Featured.css';
import Caymus from '../../assets/caymus.jpg';
import {SAKE} from '../../sakeDB';
import {REDWINE} from '../../wineDB';

export default function Featured() {
    


    return (
        <div className="featured">
            <div className="wine-section-landing">
            <div className="wine-feature">
                <img className="image" src={REDWINE[0].picture} alt=""></img>
            </div>
            <div className="wine-description" >
                <h1>{REDWINE[0].name}</h1>
                <h1>{REDWINE[0].type}</h1>
                <h1>{REDWINE[0].bottle}</h1>
                <h3>Region</h3> {REDWINE[0].region}
                <h3>Tasting Notes</h3>{REDWINE[0].tastingNotes}
            </div>
            </div>
            <div className="sake-section-landing">
            <div className="sake-feature">
            <img className="image" alt="" src={SAKE[0].picture}></img>
            </div>
            <div className="sake-description">
                <h1>{SAKE[0].name}</h1>
                <h1>{SAKE[0].bottlePrice}</h1>
                <h3>{SAKE[0].bottleSize}</h3>
                <h3>Alcohol Percentage: {SAKE[0].ABV}</h3>
                <h3>Tasting Notes: {SAKE[0].tastingNotes}</h3>
                <h3>Tsunami Pairings: {SAKE[0].tsuPairing}</h3>
                <h3>Food Pairing: {SAKE[0].foodPairing}</h3>
            </div>
            </div>
            <div className="xyz-in" xyz="fade up big">I will animate in!</div>
        </div>
    )
}
