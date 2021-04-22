let custoProduto = 5;
let valorVenda = 15;
let impostoCusto = custoProduto * 0.2;
let custoTotal = custoProduto + impostoCusto;
let lucro = valorVenda - custoTotal;

if(custoProduto < 0 || valorVenda < 0) {
    console.log('Erro - Um dos valores está inválido.')
}
else {
    console.log(lucro * 1000);
}
