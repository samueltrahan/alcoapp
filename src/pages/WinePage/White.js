import React from 'react'
import './White.css';

export default function White({white}) {
    const glass = white.glass === "" ? (
        <h3>Bottle {white.bottle}</h3>
    ) : (
        <h3>Glass {white.glass} / Bottle {white.bottle}</h3>
    )

    const displayWhite = white.id % 2 ? (
        <div className="red-wine-section">
        <div className="red-image">
            <img className="image" src={white.picture} alt=""></img>
        </div> 
        <div className="red-info">
        <h1>{white.name} {white.year}</h1>
        <p className="type">{white.type}</p>
        {glass}
        <h3>Region </h3>{white.region}
        <h3>Tasting Notes </h3>{white.tastingNotes}
        </div>
    </div>
    ) : (
        <div className="red-wine-section">
        <div className="red-image">
        <h1>{white.name} {white.year}</h1>
        {white.type}
        {glass}
       <h3>Region</h3>{white.region}
       <h3>Tasting Notes</h3>{white.tastingNotes}
        </div>
        <div className="red-info">
        <img className="image" src={white.picture} alt=""></img>
        </div>
        </div>
    )
    return (
            displayWhite
    )
}
