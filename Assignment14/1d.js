let numStudents = Number(prompt("Enter the number of students in the class:"));
let students = [];

for (let i = 0; i < numStudents; i++) {
    let input = prompt(`Enter details for student ${i + 1} (Name, Mathematics Score, Science Score, Arts Score):`);
    let [name, math, science, arts] = input.split(',').map(item => item.trim());
    math = Number(math);
    science = Number(science);
    arts = Number(arts);
    let total = math + science + arts;
    students.push({ name, math, science, arts, total });
}

students.sort((a, b) => 
    b.total - a.total || 
    b.math - a.math || 
    a.name.localeCompare(b.name)
);

document.write("<h3>Students and Total Marks:</h3>");
document.write("<table ><tr><th>Name</th><th>Mathematics</th><th>Science</th><th>Arts</th><th>Total</th></tr>");
students.forEach(student => {
    document.write(`<tr><td>${student.name}</td><td>${student.math}</td><td>${student.science}</td><td>${student.arts}</td><td>${student.total}</td></tr>`);
});
document.write("</table>");
