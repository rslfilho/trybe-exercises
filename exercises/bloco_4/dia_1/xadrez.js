let input = 'TorrEE';

// As informações sobre a movimentação das peças são do seguinte site: https://www.ludijogos.com/multiplayer/xadrez/regras/

switch(input.toLowerCase()) {
    case 'rei':
        console.log('O Rei pode se movimentar em qualquer direção, andando apenas umaa casa.');
        break;
    case 'rainha':
        console.log('A Rainha pode se movimentar em qualquer direção, andando quantas casas quiser, mas não pode pular outras peças.');
        break;
    case 'bispo':
        console.log('O Bispo pode se movimentar na diagonal, andando quantas casas quiser, mas não pode pular outras peças.');
        break;
    case 'cavalo':
        console.log('O Cavalo pode se movimentar em sentido de "L", duas casas na horizontal e mais uma na vertical, ou vice-versa. É o único que pode pular outras peças');
        break;
    case 'torre':
        console.log('A Torre pode se movimentar na horizontal ou na vertical, andando quantas casas quiser, mas não pode pular outras peças.');
        break;
    case 'peao':
        console.log('Peão pode se movimentar apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo');
        break;
    default:
        console.log('Erro - A peça informada não é válida!');
}



