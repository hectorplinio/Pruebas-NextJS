import React, { useEffect, useState } from 'react';

export default function useEffectAdvancedPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        console.log("aaa");
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []) // Only at window load, not every render

    return (
        <div className="text-3xl text-gray-400 font-mono">
            {windowWidth}
        </div>
    )
}