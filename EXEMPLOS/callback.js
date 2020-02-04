
const somar = (a, b) => a + b;
const diff = (a, b)  => a - b;

const operar = (operacao, a, b) => operacao(a, b);


console.log(diff(12, 9));
console.log(somar(12, 9));

console.log(operar(somar, 4, 5));

//exemplo com setTimeout
setTimeout(
    ()=>{console.log("Alooooo");},
    2000
);



