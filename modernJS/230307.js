// AND와 OR의 연산 방식
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('Codeit' && 'JS');
//왼쪽값이 falsy면 왼쪽값을 리턴, 왼쪽값이 truthy하면 오른쪽 값을 리턴


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('Codeit' || 'JS');
console.log(false || 'JS');
//왼쪽값이 falsy면 오른쪽값을 리턴, 왼쪽값이 truthy하면 왼쪽 값을 리턴



function print(value) {
  const message = value || 'codeit';

  console.log(message);
}

print(); //함수값에 아무것도 호출하지 않으면 undefined값을 전달 value는 falsy 이므로 오른쪽리턴 -> 'codeit'
print('javascript');