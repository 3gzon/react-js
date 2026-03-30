import React, { useState } from "react";

function clickEvent() {
    const [message, setMessage] = useState("nothing yet");
    function seeAllMessage() {
        setMessage("here is full message");
    }
    return (
        <div>
            <button onClick={seeAllMessage}>See {message}</button>
      </div>
  )
}

export default clickEvent;
