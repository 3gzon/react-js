import React, { useState } from "react";

function UseStateComponent() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(true);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click</button>
            <p >{count}</p>
            <button onClick={()=>setIsOn(!isOn)}>
                {isOn ? "ON" : "OFF"}
            </button>
            {
                isOn && <p>hide me</p>
            }
            {
                count > 10 && <p style={{ color: count > 10 ? "red" : "black" }}>you reached max {count }</p>
            }
            
      </div>
  )
}

export default UseStateComponent;
