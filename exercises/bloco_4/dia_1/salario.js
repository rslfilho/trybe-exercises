let salarioBruto = 3000.00;

let descontoInss;

if(salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
}
else if(salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
}
else if(salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;
}
else {
    descontoInss = 570.88;
}

let salarioBase = salarioBruto - descontoInss;

let descontoIrpf;
let parcelaIrpf;

if(salarioBase <= 1903.98) {
    descontoIrpf = 0
    parcelaIrpf = 0;
}
else if(salarioBase <= 2826.65) {
    descontoIrpf = salarioBase * 0.075;
    parcelaIrpf = 142.80;
}
else if(salarioBase <= 3751.05) {
    descontoIrpf = salarioBase * 0.15;
    parcelaIrpf = 354.80;
}
else if(salarioBase <= 4664.68) {
    descontoIrpf = salarioBase * 0.225;
    parcelaIrpf = 636.13;
}
else {
    descontoIrpf = salarioBase * 0.275;
    parcelaIrpf = 869.36;
}

let salarioLiquido = salarioBase - (descontoIrpf - parcelaIrpf)

console.log(salarioLiquido);