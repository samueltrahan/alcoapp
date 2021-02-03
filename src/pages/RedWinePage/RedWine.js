import React from 'react';
import './RedWine.css';
import {REDWINE} from '../../wineDB';
import RedWineComponent from './RedWineComponent';

export default function RedWine() {
    return (
        <div>
             <h1 className="red-heading">Red Wine</h1>
            <div className="red-page">
            {REDWINE.map(red => 
            <RedWineComponent red={red}/>
            )}
            </div>
        </div>
    )
}
