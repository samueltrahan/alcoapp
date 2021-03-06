import React from 'react';
import './RedWineComponent.css';

export default function RedWineComponent({red}) {
    const glass = red.glass === "" ? (
        <h3>Bottle {red.bottle}</h3>
    ) : (
        <h3>Glass {red.glass} / Bottle {red.bottle}</h3>
    )

    const type = red.name === "Benziger" ? (
        <div className="organic-wine">
        <div>
            <p className="type">{red.type}</p>
        </div>
            <div>
            <img className="organic" src="images/organic.png" alt=""></img>
            </div>
        </div>
    ) : (
        <p className="type">{red.type}</p>
    )

    const displayReds = red.id % 2 ? (
        <div className="red-wine-section">
        <div className="red-image">
            <img className="image" src={red.picture} alt=""></img>
        </div> 
        <div className="red-info">
        <h1>{red.name} {red.year}</h1>
        {type}
        {glass}
        <h3>Region </h3><p className="type">{red.region}</p>
        <h3>Tasting Notes </h3><p className="type">{red.tastingNotes}</p>
        </div>
    </div>
    ) : (
        <div className="red-wine-section">
        <div className="red-image">
        <h1>{red.name} {red.year}</h1>
        {red.type}
        {glass}
       <h3>Region</h3><p className="type">{red.region}</p>
       <h3>Tasting Notes</h3><p className="type">{red.tastingNotes}</p>
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
