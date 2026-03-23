import React, { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useeffect")
    }, [])
    
    useEffect(() => {
        console.log("clicked" , count)
    }, [count])

    return (
        <div>
            <h1>Use effect</h1>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <br></br>
            {count}
      </div>
  )
}

export default UseEffect;
