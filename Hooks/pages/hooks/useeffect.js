import React, { useEffect, useState } from 'react';

export default function useEffectPage() {

    const [resourceType, setResourceType] = useState('Spain');
    const [items, setItems] = useState([]);

    // UseEffect executes function every change of array arguments:
    // useEffect(function, array_arguments (optional, can be empty array))
    // If no second argument is passed, only execute once
    // Excecutes return content when component willUnmount or 
    // before argument change.
    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
            <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center pt-20">
                <button
                    className="btn w-1/5 text-2xl"
                    onClick={() => setResourceType('Spain')}><img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/es.png"></img>
                    
                </button>
                
                <button
                    className="btn w-1/5 text-2xl"
                    onClick={() => setResourceType('United States')}><img 
                    src="https://m.media-amazon.com/images/I/6148TmzUrTL._AC_SX425_.jpg"></img>
                </button>
                <button
                    className="btn w-1/5 text-2xl"
                    onClick={() => setResourceType('Canada')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1600/ca.png"></img>
                    
                </button>
                <button
                    className="btn w-1/5 text-2xl"
                    onClick={() => setResourceType('Germany')}>
                    <img 
                    src="https://www.banderas-mundo.es/data/flags/w1160/de.png"></img>
                    
                </button>
            </div>
            <h1 className="text-9xl">{resourceType}</h1>
            <ul className="my-10">
                {items.map((item, index) => {
                    return <li key={index} className="my-10 bg-gray-400">{JSON.stringify(item)}</li>
                })}
            </ul>
        </>

    )

}