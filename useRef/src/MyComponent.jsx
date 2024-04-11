import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

    const ref = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleCLick(){
        ref.current++;
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
            <input />
        </div>)
       
}
export default MyComponent