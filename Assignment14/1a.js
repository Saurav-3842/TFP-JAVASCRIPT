let numUsers = Number(prompt("Enter the number of users:"));
let users = [];

for (let i = 0; i < numUsers; i++) {
    let userName = prompt(`Enter the name of user ${i + 1}:`);
    users.push(userName);
}

document.write("<h3>List of Users:</h3>");
document.write("<ul>");
users.forEach(user => document.write(`<li>${user}</li>`));
document.write("</ul>");
