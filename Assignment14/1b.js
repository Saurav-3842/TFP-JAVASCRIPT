let numFields = Number(prompt("Enter the number of fields:"));
let details = {};

for (let i = 0; i < numFields; i++) {
    let key = prompt(`Enter the key for field ${i + 1}:`);
    let value = prompt(`Enter the value for field '${key}':`);
    details[key] = value;
}

document.write("<h3>Details:</h3>");
document.write("<table border='3'><tr><th>Key</th><th>Value</th></tr>");
for (let key in details) {
    document.write(`<tr><td>${key}</td><td>${details[key]}</td></tr>`);
}
document.write("</table>");
