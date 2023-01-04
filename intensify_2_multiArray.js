let twoArray = [
  [1,2,], 
  [3,4]
];

// twoArray 안에서 2를 찾고싶을때
console.log(twoArray[0][0])



let mailBox = [
  [101,102,103,104],
  [201,202,203,204],
  [301,302,303,304],
  [401,402,403,404]
];

let teams = [
	[],
	[],
  [],
  []
];

// 여기에 코드를 작성하세요


for(let i = 0; i < mailBox.length; i++) {
  for(let j = 0; j < mailBox[i].length; j++) {
    teams[j][i] = mailBox[i][j];
  }
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);
console.log(teams[2]);
console.log(teams[3]);