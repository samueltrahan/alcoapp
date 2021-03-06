import React from 'react';
import './Featured.css';
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
                <h3 className="type">{REDWINE[0].type}</h3>
                <h1>{REDWINE[0].bottle}</h1>
                <h3>Region</h3> <p className="type">{REDWINE[0].region}</p>
                <h3>Tasting Notes</h3><p className="type">{REDWINE[0].tastingNotes}</p>
            </div>
            </div>
            <div className="sake-section-landing">
            <div className="sake-feature">
            <img className="image" alt="" src={SAKE[0].picture}></img>
            </div>
            <div className="sake-description">
                <h1>{SAKE[0].name}</h1>
                <h1>{SAKE[0].bottlePrice}</h1>
                <h2>{SAKE[0].bottleSize}</h2>
                <h3>Alcohol Percentage: </h3><p className="type">{SAKE[0].ABV}</p>
                <h3>Tasting Notes: </h3><p className="type">{SAKE[0].tastingNotes}</p>
                <h3>Tsunami Pairings: </h3><p className="type">{SAKE[0].tsuPairing}</p>
                <h3>Food Pairing: </h3><p className="type">{SAKE[0].foodPairing}</p>
            </div>
            </div>
            <div className="xyz-in" xyz="fade up big">I will animate in!</div>
        </div>
    )
}
