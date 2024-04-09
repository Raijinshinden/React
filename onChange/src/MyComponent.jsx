import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    return(<div>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type='number'/>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange}
                placeholder='Enter delivery instructions'/>
                <p>Comment: {comment}</p>
           </div>)
}
export default MyComponent