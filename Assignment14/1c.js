let numPlayers = Number(prompt("Enter the number of players:"));
let players = [];

for (let i = 0; i < numPlayers; i++) {
    let name = prompt(`Enter the name of player ${i + 1}:`);
    let score = Number(prompt(`Enter the score of ${name}:`));
    players.push({ name, score });
}

players.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

document.write("<h3>Players and Scores:</h3>");
document.write("<ol>");
players.forEach(player => {
    document.write(`<li>${player.name} - ${player.score}</li>`);
});
document.write("</ol>");
