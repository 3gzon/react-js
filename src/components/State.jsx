import React, { useState } from "react";

function State() {
    //state type number
    const [count, setCount] = useState(0);

    //state type string
    const [name, setName] = useState("");

    //state type boolean (true or false)
    const [show, setShow] = useState(false);

    //state type array with objects
    const [users, setUsers] = useState([
        {id:1, firstName:"Egzon", role:"instructor"},
        {id:2, firstName:"leotrim", role:"student"},
        {id:3, firstName:"leon", role:"student"},
    ])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                increase
            </button>
            <h1>{count}</h1>
            <div>
                <input type="text"
                onChange={(event)=>setName(event.target.value)}
                />
                <h1>{name}</h1>
            </div>
            <div>{show && <p>this is hidden</p>}
            </div>
            <div>
                {console.log(users)}
                {users.map(user => (
                    <p key={user.id}>{user.firstName} {user.role }</p>
                ))}
            </div>
      </div>
  )
}
export default State;