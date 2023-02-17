//참조형 복사하기

let numbers1 = [1,2,3];
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);


//객체
let course1 = {
  title: '자바스크립트 강의',
  language: 'JavaScript'
};


//방법1
let course2 = Object.assign({}, course1);
course2.title = '프론트엔드 개발자 강의';
console.log(course1);
console.log(course2);


//방법2
// let course3 = {};

// for(let key in course1){
//   course3[key] = course1[key];
// }

// course3.title = '개발자';

// console.log(course1);
// console.log(course3);


//방법3
function cloneObject(Object){
  let temp = {};
  
  for(let key in Object){
    temp[key] = Object[key];
  }

  return temp;
}

let course4 = cloneObject(course1);
console.log(course4);