//scope
const X = 1; //글로벌 변수, 전역 변수

function myFunction(){ //블록문
  const X = 3; //로컬 변수
  // x = 3; 오류
  console.log(X);
}

myFunction();
console.log(X);


// 상수로 같은 이름으로 선언되어도 로컬안에서 새로이 만들 수 있다
// 단 함수가 끝나면 로컬안에서만 된다
// 하지만 로컬안에서 const를 붙이지 않으면, 해당 변수를 글로벌에서 찾아보고 가져오기 때문에 상수의 값을 변경하는 코드가 되므로 오류가 난다
 