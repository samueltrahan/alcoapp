import React from 'react';
import './Sake.css';

export default function Sake({sake}) {
    return (
        <div className="sake-section">
            <div className="sake-image">
            <img className="image" src={sake.picture} alt=""></img>
            </div>
            <div className="sake-details">
                <h1>{sake.name}</h1>
                <h1>{sake.bottlePrice}</h1>
                <h3>{sake.bottleSize}</h3>
                <h3>Alcohol % {sake.ABV}</h3>
                <h3>Food Pairings: {sake.foodPairing}</h3>
                <h3>Tasting Notes: {sake.tastingNotes}</h3>
            </div>
        </div>
    )
}
