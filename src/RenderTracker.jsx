import { useState, useEffect } from 'react'

function RenderTracker()
{
    const [renderCount, updateRenderCount] = useState(0);

    useEffect(() =>
    {
        setTimeout(() =>
        {
            updateRenderCount((prevCount) => prevCount + 1);
        }, 1000)
    }, [])  // <- add empty brackets here
    return (
        <div className='container'>
            <h1>Now I rendered {renderCount} times. </h1>
        </div>
    )
}

export default RenderTracker
