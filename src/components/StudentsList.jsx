import React from "react";

function StudentsList() {
    const students = [
        {
            "id": 1,
            "firstName": "Ardit",
            "lastName": "Hoxha",
            "age": 16,
            "email": "ardit.hoxha@example.com",
            "course": "React JS",
            "isActive": true,
            "score": 80
        },
        {
            "id": 2,
            "firstName": "Elira",
            "lastName": "Berisha",
            "age": 15,
            "email": "elira.berisha@example.com",
            "course": "Python",
            "isActive": true,
            "score": 70
        },
        {
            "id": 3,
            "firstName": "Dren",
            "lastName": "Krasniqi",
            "age": 17,
            "email": "dren.krasniqi@example.com",
            "course": "JavaScript",
            "isActive": false,
            "score": 60
        },
        {
            "id": 4,
            "firstName": "Alba",
            "lastName": "Gashi",
            "age": 14,
            "email": "alba.gashi@example.com",
            "course": "Graphic Design",
            "isActive": true,
            "score": 20
        },
        {
            "id": 5,
            "firstName": "Leon",
            "lastName": "Bytyqi",
            "age": 16,
            "email": "leon.bytyqi@example.com",
            "course": "Full Stack",
            "isActive": true,
            "score": 50
        },
        {
            "id": 6,
            "firstName": "Sara",
            "lastName": "Shala",
            "age": 15,
            "email": "sara.shala@example.com",
            "course": "UI/UX Design",
            "isActive": false,
            "score": 40
        },
        {
            "id": 7,
            "firstName": "Besnik",
            "lastName": "Rexhepi",
            "age": 18,
            "email": "besnik.rexhepi@example.com",
            "course": "Node.js",
            "isActive": true,
            "score": 50
        },
        {
            "id": 8,
            "firstName": "Ariana",
            "lastName": "Selimi",
            "age": 13,
            "email": "ariana.selimi@example.com",
            "course": "HTML & CSS",
            "isActive": false,
            "score": 94
        },
        {
            "id": 9,
            "firstName": "Valon",
            "lastName": "Zeqiri",
            "age": 17,
            "email": "valon.zeqiri@example.com",
            "course": "Angular",
            "isActive": false,
            "score": 92
        },
        {
            "id": 10,
            "firstName": "Lina",
            "lastName": "Kelmendi",
            "age": 14,
            "email": "lina.kelmendi@example.com",
            "course": "Java",
            "isActive": false,
            "score": 91
        }
    ]
    const activeStudents = students.filter(student => student.isActive);
    const topStudents = students.filter(student => student.score < 50)
    return (
        <div>
            <ul>
                {activeStudents.map((student) => (
                    <li>{student.firstName}</li>
                ))}
            </ul>
            <ul>
                {topStudents.map((student) => (
                    <li>{student.firstName}</li>
                ))}
            </ul>
        </div>

    )
}

export default StudentsList;
