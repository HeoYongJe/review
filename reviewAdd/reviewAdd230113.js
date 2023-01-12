//return 과 함수실행순서
function box(x) {
  console.log('return 전'); // 3
  return x * x; // 4
  console.log('return 후'); //Dead code
}

console.log('함수 호출 전'); // 1 
console.log(box(2)); // 2
console.log('함수 호출 후') // 5

// 먼저 9 번줄이 실행되고, 다음 10번 함수호출이 된다.
// 함수호출엣거 4번줄이 먼저 실행 후 5번줄 실행된다. 5번에서 return으로 함수가 종료되므로 6번은 실행되자 않으며 11번줄 실행으로 끝이난다


//return 과 console.log 차이
function box01(x) {
  console.log(x + x);
}

function box02(x) {
  return x + x;
}

box01(3);
box02(3);
console.log(box02(3));
console.log(box01(3)); //undefined
// 30번줄에 undefined가 나오는 이유는 console.log()의 괄호안에 있는 값을 출력하라는 내용인데
// 괄호에서는 파라미터로 3을 전달하는 함수를 호출중
// 함수에서는 파라미터 3을 받아 함수 내부에서 출력하고 있다
// 그러나 그 결과를 전달해주어야 할 return이 없기 떄문에 결과를 전달 못함
// 그러므로 console.log(box01(3)); 에서는 파라미터 3을 전달하기만 할 뿐 되돌려 받지 못하기 때문에 undefined값이 출력


