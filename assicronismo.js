function alarme1() {
    return "Hora de acordar são 8:00"
}

function alarme2() {
    return "está perto da sua hora de acordar são 7:50";
}

setTimeout(() => {
    console.log(alarme1())
}, 2000);

console.log(alarme2());