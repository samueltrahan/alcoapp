import React from 'react';
import './Red.css';

export default function Red({red}) {
    const glass = red.glass === "" ? (
        <h3>Bottle {red.bottle}</h3>
    ) : (
        <h3>Glass {red.glass} / Bottle {red.bottle}</h3>
    )

    const displayReds = red.id % 2 ? (
        <div className="red-wine-section">
        <div className="red-image">
            <img className="image" src={red.picture} alt=""></img>
        </div> 
        <div className="red-info">
        <h1>{red.name} {red.year}</h1>
        <p className="type">{red.type}</p>
        {glass}
        <h3>Region </h3>{red.region}
        <h3>Tasting Notes </h3>{red.tastingNotes}
        </div>
    </div>
    ) : (
        <div className="red-wine-section">
        <div className="red-image">
        <h1>{red.name} {red.year}</h1>
        {red.type}
        {glass}
       <h3>Region</h3>{red.region}
       <h3>Tasting Notes</h3>{red.tastingNotes}
        </div>
        <div className="red-info">
        <img className="image" src={red.picture} alt=""></img>
        </div>
        </div>
    )
    return (
        
      displayReds
    )
}