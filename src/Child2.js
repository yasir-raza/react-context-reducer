import React, { useReducer } from 'react';
import numberReducer from './numberReducer';

function Child2(){
    let [state, dispatch] = useReducer(numberReducer, 58);
    return(
        <div>
             Child 2 {state}
             <br />
             <button onClick={() => {dispatch({type: 'INCREMENT', val : 5})}}> Increment </button>
             <br />
             <button onClick={() => {dispatch({type: 'DECREMENT', val : 5})}}> Decrement </button>
        </div>
    );
}

export default Child2;