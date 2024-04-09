
function Button(){

    let count = 0;
    const handleClick = (name) => {
        if(count < 3 && count < 1){
            count++;
            console.log(`${name} you clicked me ${count} time`);
        }
        else if(count > 1 && count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else{
            console.log(`${name}, stop clicking me!`);
        }
    }

    // const handleClick2 = (name) => console.log(`${name}, stop clicking me!`)

    return(<button onClick={() => handleClick("Ryan")}>Click me 😊</button>)
}

export default Button