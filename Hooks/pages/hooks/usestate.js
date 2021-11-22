import React, {useState} from 'react';

function useStatePage() {
    // useState return array with value and setter for that value, receives 
    // an optional argument with initial state.
    // const [value, setValue] = useState(initialValue);
    const [count, setCount] = useState(4);
    const [clases, setClases] = useState(["btn", "bg-green-400", "mx-4"])

    // Decrement Count function
    function decrementCount(){
        // Not perfect way
        // setCount(count - 1);
        // Recomended way
        setCount(prevCount => prevCount - 1);
        let color = clases[1];
        color = "bg-red-400";
        setClases(["btn",color,"mx-4"]);
    }

    // Increment Coutn Function
    function incrementCount(){
         // Not perfect way
        // setCount(count + 1);
        // Recomended way
        setCount(prevCount => prevCount + 1);
        let color = clases[1];
        color = "bg-gray-400";
        setClases(["btn",color,"mx-4"]);
    }
    function multiplicarCount(){
        // Not perfect way
       // setCount(count + 1);
       // Recomended way
       setCount(prevCount => prevCount * prevCount);
       let color = clases[1];
        color = "bg-purple-400";
        setClases(["btn",color,"mx-4"]);
   }
    function dividirCount(){
    // Not perfect way
    // setCount(count + 1);
    // Recomended way
    setCount(prevCount => prevCount / 2);
    let color = clases[1];
    color = "bg-yellow-400";
    setClases(["btn",color,"mx-4"]);
    }
    function cambiarColor(){
        let color = clases[1];
        if(color === "bg-green-400") color = "bg-yellow-400";
        else if(color === "bg-yellow-400") color = "bg-red-400";
        else if(color === "bg-red-400") color = "bg-blue-400";
        else if(color === "bg-blue-400") color = "bg-green-400";
        else color = "bg-blue-400";
        setClases(["btn",color,"mx-4"]);
    }

    return (
        <>
            <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center pt-20">
                <button className={clases.join(" ")} onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <button className={clases.join(" ")} onClick={incrementCount}>+</button>
                
                <button className={clases.join(" ")} onClick={multiplicarCount}>*</button>
                
                <button className={clases.join(" ")} onClick={dividirCount}>/</button>
                <button className="btn bg-blue-400 mx-4" onClick={cambiarColor}>Color</button>
            </div>
            
        </>
    )
}

export default useStatePage;