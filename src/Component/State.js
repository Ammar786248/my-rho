import React, { useState } from 'react';


function State (){

    const[set, useSet] = useState(0);

    const Inrement = () =>{
        useSet(set + 1);
    }

    return(
        <>
        <h1>{set}</h1>
        <button onClick={Inrement}>Click kr</button>
        </>
    )
}


export default State;