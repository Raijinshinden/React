import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleCLick(){
        ref.current = ref.current + 1;
    }

    return(
        <button onClick={handleClick}>
            Click me
        </button>)
}
export default MyComponent