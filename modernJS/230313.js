// Rest Parameter
function printArguments() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

printArguments('가','나','다','라');
printArguments('1','2','3');
printArguments('사람','동물');
// argument 는 유사배열 이므로 배열 메소드 x


// Rest Parameter
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

printArguments('가','나','다','라');
printArguments('1','2','3');
printArguments('사람','동물');
//rest parameter 는 배열이므로 배열 메소드 사용이 가능


printArguments('가','나','다','라');
printArguments('1','2','3');
printArguments('사람','동물');


// Rest Parameter
function printArguments(...args) {
  console.log(args.splice(0,2));
  console.log(arguments.splice(0,2)) // 오류
}

printArguments('가','나','다','라');
printArguments('1','2','3');
printArguments('사람','동물');


// Rest Parameter 와 일반 파라미터를 동시에 쓸 경우
function printArguments1(first, second, ...others) {
  console.log('최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${first}`);
  for(const arg of others) {
    console.log(`참가자 ${arg}`);
  }
}

printArguments1('가','나','다','라');
