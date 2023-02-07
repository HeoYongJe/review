//다차원 배열 복습
let twoNumber = [ [1,2], [3,4] ];

console.log(twoNumber);

//3찾기
console.log(twoNumber[1][0]); // 3


let groups = [
  ['양배추', '닭고기'],
  ['호박', '소고기'],
  ['당근', '돼지고기']
]

let grouping = [
  [],
  []
];

grouping[0][0] = groups[0][0];
grouping[1][0] = groups[0][1];

for(let i = 0; i < groups.length; i++) {
  for(let j = 0; j < groups[i].length; j++){
    grouping[j][i] = groups[i][j];
  }
}

console.log(grouping[0]); //양배추 호박 당근
console.log(grouping[1]); //닭고기 소고기 돼지고기