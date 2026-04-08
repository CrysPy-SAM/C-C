const clue1 = "Muddy footprint near the window."
const clue2 = "Broken glass on the table"

console.log("clue found:", clue1)
console.log("clue found:", clue2)

const suspectName = "satyam"
const suspectAge = 20
console.log("Suspect:", suspectName, "|Age: ", suspectAge)

console.warn("warning: Figerprint evedence detected")
console.error("warning: Figerprint evedence detected")

const evedenceLog = [
    { id: 1, item: "Muddy footprint", location: "window sill"},
    { id: 1, item: "Broken glass", location: "Living room"}, 
    { id: 3, item: "red fiber strand", location: "Door handle"},
];

console.table(evedenceLog);