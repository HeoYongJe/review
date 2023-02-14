//기본형과 참조형
//기본형 Number String Null Boolean Undefined
let x = 1;
let y = x;
console.log(x);
console.log(y);

y = 2;
console.log(y); //2 


//참조형 
// 객체
let a = {name : '허용제'};
let b = a;

b.birth = 8902;
console.log(a); //{name: '허용제', birth: 8902}
console.log(b); //{name: '허용제', birth: 8902}

//배열
let c = [1,2,3];
let d = c;

d[0] = 5;
console.log(c); //5,2,3
console.log(d); //5,2,3