let members = ['길동','영수','영희','철수','당근'];

//배열의 첫 요소 삭제 : shift();
members.shift();
console.log(members);

//배열의 마지막 요소 삭제 : pop();
members.pop();
console.log(members);

//배열의 첫 요소 값 추가 unshift(value);
members.unshift('민지');
console.log(members);

//배열의 마지막 요소 값 추가 : push(value);
members.push('오이');
console.log(members);

//indexof 배열에서 index값 찾기
console.log(members.indexOf('오이')); // 4

//includes 해당 값이 배열안에 있는지 여부 true / false 리턴
console.log(members.includes('오이')); // true

//reverse 배열 순서 뒤집기
console.log(members.reverse()); // 배열을 끝에서부터 나열



//예제
function range(start, count, step) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(start + i * step)
  }

  return arr;
}

// 테스트 코드
console.log(range(1, 10, 3));
