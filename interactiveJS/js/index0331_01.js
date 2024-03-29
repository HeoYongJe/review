const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
console.log(myNumberTag.length)

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');
// 여러가지 태그를 한번에 선택할 때 유용
// 유사배열이므로 배열 메소드를 사용할 순 없지만, 인덱스나 랭스프로퍼티를 활용할 순 있다
console.log(colorBtns === null);
console.log(colorBtns[0]);
console.log(colorBtns.length);

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  };
}

// 유사배열이란 ?
// 숫자 형태의 indexing이 가능하다.
// length 프로퍼티가 있다.
// 배열의 기본 메소드를 사용할 수 없다.
// Array.isArray(유사배열)은 false다.


//css 선택자로 태그 선택하기
const myTag = document.querySelector('.color-btn');
console.log(myTag);
// color-btn 선택자중 맨 첫번째께 나옴


const myTags = document.querySelectorAll('.color-btn');
console.log(myTags);
// 여러요소를 선택하고싶을때 / All을 사용 할 경우 NodeList라는 유사배열이 나오며, 해당 클래스를 다 선택할 수 있다