//for..of
// for (변수 of 배열){
//   동작부분;
// }

let names = ['철수','진주','영희','길동','화랑'];

//일반 for 문
for (let i = 0; i < names.length; i++){
  console.log(names[i]);
}

//for..of 
for (element of names){
  console.log(element);
}


//집계 예제
votes = ['허용제','김진주','김진주','김진주','허용제','김진주','김진주','허용제']

// 후보별 득표수 객체
let voteCounter = {};

for (name2 of votes) {
  if(name2 in voteCounter) {
    voteCounter[name2] += 1;
  } else {
    voteCounter[name2] = 1;
  }
}

console.log(voteCounter); // '허용제' : 3, '김진주':5 ;