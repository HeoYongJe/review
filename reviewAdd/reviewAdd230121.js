//객체 추가 삭제 수정하기

///////////////////////////////////////
//함수 변수 상수는 다외웠으므로 삭제
//오늘의 단어는 추가

let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
  js:'html'
};
//추가 
myVoca.hard = '열심히';
myVoca.study = '공부하다';
console.log(myVoca);

//삭제
delete myVoca.function;
delete myVoca.variable;
delete myVoca.constant;
console.log(myVoca)

//수정
myVoca.js = '자바스크립트';
console.log(myVoca.js);



//오늘의 단어 
// hard = 열심히
// study = 공부하다

