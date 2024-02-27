import { useState } from "react";
import './Counter.css'

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
        if(count >= 0){
            document.getElementById("counter").style.color = `#FFF`;
        }
    };

    const decrement = () => { 
        setCount(count - 1)
        if(count <= 0){
            document.getElementById("counter").style.color = `#FF${(count * count) + count / 10}030`;
        }
    };
    
    return(<>
        <div className="container">
            <h1 className="title">React JS Counter</h1>
            <p className="counter" id="counter">{count}</p>
        </div>

        <div className="button_container">
            <button className="decrement" onClick={decrement} >-</button>
            <button className="reset" onClick={() => setCount(0)} >Reset</button>
            <button className="increment" onClick={increment} >+</button>
        </div>
    </>);
}

 
