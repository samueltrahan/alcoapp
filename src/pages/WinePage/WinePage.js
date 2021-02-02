import React from 'react'
import './WinePage.css';
import {REDWINE} from '../../wineDB';
import {WHITEWINES} from "../../wineDB";
import Red from './Red';
import White from './White';

export default function WinePage() {
    return (
        <div>
            <h1 className="red-heading">Red Wine</h1>
            <div className="red-page">
            {REDWINE.map(red => 
            <Red red={red}/>
            )}
            </div>
            <h1 className="white-heading">White Wine</h1>
            <div className="white-page">
                {WHITEWINES.map(white =>
                <White white={white}/>
                )}
            </div>
        </div>
    )
}
