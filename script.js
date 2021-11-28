let order = [];
let clickedOrder = [];
let score = 0;

// 0-pink  1-red  2-purple  3-blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');

//ordem de cores
let shuffleOrder = () => {
let colorOrder = Math.floor(Math.random()*4);
order[order.lenght]=colorOrder;
clickedOrder = [];
  
for(let i in order){
  let elementColor = createColorElement(order[i]);
  LightColor(elementColor,Number(i) + 1);
  }
}
//proxima cor
let LightColor = (element, number) => {
  number = number* 500;
  
  setTimeout(() => {
    element.classlist.add('.selected')
  }, number - 250);
  setTimeout(() => {
    element.classlist.remove('.selected')
  });
}

//checagem de acerto
let checkOrder = () => {
  for( let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert('Pontuação: ${score}\nVocê Acertou!');
    nextLevel();
  }
}

//Clique
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classlist.add('.selected');
  
  setTimeout(() => {
    createColorElement(color).classlist.remove('.selected');
    checkOrder();
  });
}

//Retorna cor
let createColorElement = (color) => {
  if(color == 0){
    return pink;
  }else if(color == 1){
    return red;
  }else if(color == 2){
    return purple;
  }else if(color == 3){
    return blue;
  }
}

//Proximo Nivel
let nextLevel = () =>{
  score ++;
  shuffleOrder();
}

//Jogo perdido
let lose = () =>{
  alert("Pontuação: $(score)/nVocê perdeu o jogo!/n Clique em ok");
  order = [];
  clickedOrder = [];
  
  playGame();
}

//Iniciar
let playGame = () => {
  alert('Bem vindo ao Genesis!');
  score = 0;
  
  nextLevel();
}

/*pink.addEventListeneer('click',click(0));
red.addEventListeneer('click',click(1));
purple.addEventListeneer('click',click(2));
blue.addEventListeneer('click',click(3));
*/

//eventos clique por cor
pink.onclick = () => click(0);
red.onclick = () => click(1);
purple.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio do jogo
playGame();