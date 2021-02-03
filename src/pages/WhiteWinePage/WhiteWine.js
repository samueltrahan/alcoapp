import React from 'react';
import './WhiteWine.css';
import {WHITEWINES} from "../../wineDB";
import WhiteWineComponent from './WhiteWineComponent';

export default function WhiteWine() {
    return (
        <div>
             <h1 className="white-heading">White Wine</h1>
            <div className="white-page">
                {WHITEWINES.map(white =>
                <WhiteWineComponent white={white}/>
                )}
            </div>
        </div>
    )
}
