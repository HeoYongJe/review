// for 반복문을 사용하여 1 이상 100 이하의 짝수를 모두 출력해 보세요.
for( let i = 2; i <= 100; i +=2){
  console.log(i);
}



// 주어진 높이(height)에 맞게 '*'로 삼각형을 그려주는 함수 printTriangle을 완성
function printTriangle(height) {
  star = '';
  for( let i = 0; i < height; i ++){
    star += '*';
    console.log(star)
  }
}


//중첩 for 문
function printTriangle(height) {
  var star = '';
  for (var i = 0; i < height; i++) {
      for (var j = 0; j < i + 1; j++) {
          star += '*';
      }
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