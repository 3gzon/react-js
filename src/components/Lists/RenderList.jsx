import React from "react";

function RenderList() {
    const states = ["kosovo", "albania", "germany"];
    return (
        <div>
            <ul>
                {
                    states.map((state, index) => (
                        
                        <li key={index}>
                            {state} {index}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default RenderList;
