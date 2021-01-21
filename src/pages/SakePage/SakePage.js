import React from 'react';
import './SakePage.css';
import Sake from './Sake';
import {SAKE} from '../../sakeDB';

export default function SakePage() {
    return (
        <div className="sake-page">
            {SAKE.map((sake) => 
        <Sake sake={sake}/>
            )}
        </div>
    )
}
