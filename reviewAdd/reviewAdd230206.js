//for of

let fruits = ['사과', '메론', '레몬', '오렌지'];

for(element of fruits) {
  console.log(element)
}

//for of , for in 에제
let names = [
  '허용제','허은우','허은우',
  '허용제','허용제','김진주',
  '허은우','허은우','김진주'
];


let nameCounter = {};

for(let name of names) {
  if(name in nameCounter) {
    nameCounter[name] += 1;
  } else {
    nameCounter[name] = 1;
  }
}

console.log(nameCounter); // '허용제':3, '허은우':4, '김진주':2