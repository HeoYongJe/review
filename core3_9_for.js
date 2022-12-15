//for 문
// for(초기화부문;조건부분;추가동작부분){
//   동작부분
// }

for(let i = 1; i <= 5; i++){
  console.log(i);
}

//삼각형 별찍기
function printTriangle(height) {
	// 여기에 코드를 작성하세요
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