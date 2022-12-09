console.log(typeof 1);
console.log(typeof '1');
console.log(typeof "1");
console.log(typeof `1`);



//typeof 연산자는 값의 자료형을 문자열로 반환 / 연산의 우선순위 고려해서 작성해야됨
console.log(typeof 'hello' + 'codeit');
console.log(typeof (8 - 3));

console.log(typeof typeof (3 + 5)); 
// 연산 우선순위에 따라 괄호 안에 있는 연산을 먼저 수행
// typeof 8 -> 'number'과 동일
// typeof 'number' -> string