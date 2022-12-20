let i = 0;

while(i < 5) {
  console.log(`${i} hi`);
}

let y = 30;
while (i % 7 !== 0) {
  y++;
}

console.log(y);


//while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력

const N = 180;
let x = 1;
let count = 0;
while(x <= N){
  if(N % x === 0){
    console.log(x);
    count ++;
  }
  x += 1;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`)