//for 문
// for(초기화부문;조건부분;추가동작부분){
//   동작부분
// }

for(let i = 0; i <= 5; i++){
  console.log(i);
}

for (let i = 0; i <= 5; ++i){
  console.log(i)
};

//삼각형 별찍기
function printTriangle(height) {
	let star = '';
	for(let i = 0; i < height; i++){
	  star += '*';
	  console.log(star);
	}
}

// 테스트 코드
console.log('높이: 1'); 
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

