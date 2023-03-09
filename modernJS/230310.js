// 값으로서 함수
// 함수를 리턴하는 함수 -> 고차함수, sayHi()() 상황에 따라 이중괄호를 통해 바로호출도 가능
function getPrint() {
  return function () {
    console.log('Hi');
  }
}

const sayHi = getPrint();
sayHi();


// 오류 예제
function getFunction() {
  return function () {
    console.log('Codeit');
  }
}

const printCodeit = getFunction;
printCodeit();
// printCodeit 변수에 getFunction을 그대로 할당했기 때문에 'Codeit' 이라는 문자열을 출력하는 함수를 리턴하므로 콘솔에는 아무것도 출력되지 않는다


// Parameter
// 함수 선언 부분에서 소괄호 안에 작성되는 것이 파라미터
// 파라미터로 전달하는 값이 아규먼트

function greeting(name = 'Codeit') {

  console.log(`Hi ${name}!`);

}

greeting();
// 함수 호출 할 때 아규먼트를 전달하지 않은 경우 파라미터에 기본값을 넣어놓으면 그 값으로 동작한다
// 아규먼트 전달x 파라미터 기본값x 일 경우 undefined 값이 나온다
// 다수의 파라미터를 할 경우 기본값을 호출하고 싶으면 , 아규먼트에 undefined 값을 넣어 활용하기도 한다