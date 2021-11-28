let order = [];
let clickedOrder = [];
let score = 0;

// 0-pink  1-red  2-purple  3-blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');

let shuffleOrder = () => {
let colorOrder = Math.floor(Math.random()*4);
order[order.lenght]=colorOrder;
clickedOrder = [];
  
for(let i in order){
  let elementColor = createColorElement(order[i]);
  LightColor(elementColor,Number(i) + 1);
  }
}