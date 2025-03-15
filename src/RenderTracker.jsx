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
    }, [])
    return (
        <div>
            <h1>INow I renderd {renderCount} times. </h1>
        </div>
    )
}

export default RenderTracker
