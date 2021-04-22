let a, b, c;

a = 60;
b = 60;
c = 60;

let isValid = a+b+c == 180;

if(a<=0 || b<=0 || c<=0) {
    console.log('Erro - Um ou mais angulos têm valor inválido')
}
else {
    console.log(isValid);
}