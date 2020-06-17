import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(){
    let v = useContext(ValueContext);
    return(
        <div>
             Child number {v[0]}
             <br />
             <button onClick={() => { v[1](++v[0])}}>Update Value</button>
        </div>
    );
}

export default Child;