import React from "react";

function RenderListObjects() {
    const students = [{
        name: "filani",
        surname: "fisektu",
        age: 20,
        id:1
    },
    {
        name: "filani",
        surname: "fisektu",
        age: 20,
        id:2
    },
    {
        name: "filani",
        surname: "fisektu",
        age: 20,
        id:3
    },
    {
        name: "filani",
        surname: "fisektu",
        age: 20,
        id:4
    }
    ]
    return (
      
        <div>
            {
                students.map((student) => (
                    <div key={student.id}>
                        <p>{student.name }</p>
                        <p>{student.surname}</p>
                        <p>{student.age}</p>
                        <hr />
                    </div>
                    
                ))
            }
        </div>
  )
}

export default RenderListObjects;
