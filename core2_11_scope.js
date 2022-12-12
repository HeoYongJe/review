let x = 3; //글로벌 변수, 전역 변수

function myFunction() {
  let x = 5; //지역 변수
  console.log(x);
}

myFunction();
console.log(x);

//상수
