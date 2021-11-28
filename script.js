let order = [];
let clickedOrder = [];
let score = 0;

//0 - pink
//1 - red
//2 - purple
//3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const pink = document.querySelector('.pink');
const purple = document.querySelector('.purple');

//Ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checagem de acerto
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou!`);
        nextLevel();
    }
}

//Clique
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return pink;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return purple;
    } else if (color == 3) {
        return blue;
    }
}

//Proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Jogo Perdido
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis!');
    score = 0;

    nextLevel();
}

//Clique por cor
pink.onclick = () => click(0);
red.onclick = () => click(1);
purple.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();