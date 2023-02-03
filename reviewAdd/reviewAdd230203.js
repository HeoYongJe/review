//array Method

let members = ['html','css','java','javaScript'];
console.log(members);
delete members[3];
console.log( members.length);//4
//delete 연산자로 요소를 삭제할 경우 완벽하게 삭제되지 않는다

//splice
members.splice(3,1,'파이썬'); // 시작,몇개삭제할지,삭제한 곳에 추가
console.log(members);//3