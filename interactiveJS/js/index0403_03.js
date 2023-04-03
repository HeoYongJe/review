//Dom
console.log(document);
console.log(typeof document);
console.dir(document);

const title = document.querySelector('#title');
title.style.color = 'red';


//DOM 트리 여행하기
const myTag = document.querySelector('#content');

//부모 요소 노드
console.log(myTag.parentElement);

//형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

//자식 요소 노드
console.log(myTag.children[0]);
