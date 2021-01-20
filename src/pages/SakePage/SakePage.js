import React from 'react';
import './SakePage.css';
import Sake from './Sake';
import {SAKE} from '../../sakeDB';

export default function SakePage() {
    return (
        <div>
            {SAKE.map((sake) => 
        <Sake sake={sake}/>
            )}
        </div>
    )
}
