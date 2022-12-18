const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
let ir = salario_bruto * 0.10;
let salario_liquido = salario_bruto - ir;
console.log("Salário líquido: R$", salario_liquido);