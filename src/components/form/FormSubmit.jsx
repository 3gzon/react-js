import React, { useState } from "react";

function FormSubmit() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (name.trim() === "") {
            setError("Name is required")
            return
        }

        if (name.includes("2")) {
            setError("Name has number")
            return
        }

        if (name.length < 2) {
            setError("Name is to short")
            return
        }
        if (surname.trim() === "") {
            setError("Surname is required")
            return
        }

        if (surname.length < 2) {
            setError("Surname is to short")
            return
        }
        setError("");
        console.log(name);
        console.log(surname);
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={(event)=>{setName(event.target.value)}}
                />
                <input type="text"
                    value={surname}
                    onChange={(event)=>{setSurname(event.target.value)}}
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{color:"red"}}>{error }</p>}
        </div>
  )
}

export default FormSubmit;
