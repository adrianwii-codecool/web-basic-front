const container = document.querySelector(".container");

function getStudents() {
    fetch(`http://localhost:8000/students`)
        .then(function (response) {
            return response.json();
        })
        .then(function (students) {
            innerStudents(students);
        })
}

function innerStudents(students) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>NAME</th><th>SURNAME</th><th>EMAIL</th></tr>";
    container.appendChild(table);

    students.forEach(student => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.email}</td>
        `;
        table.appendChild(row);
    });
}

getStudents();
