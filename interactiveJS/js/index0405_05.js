const tomorrow = document.querySelector('#tomorrow');

// 1.요소 노드 만들기 : document.createElement('태그이름')
const first = document.createElement('li');

// 2.요소 노드 꾸미기 : textContent, innerHTML, ...
first.textContent = '처음';

// 3.요소 노드 추가하기 : NODE.prepent, appent, after before 
tomorrow.prepend(first); // prepend -> 메소드를 호출한 노드의 제일 첫번째 노드로 파라미터의 전달한 값을 추가할 수 있다

const last = document.createElement('li');
last.textContent ='마지막';
tomorrow.append(last); // append -> 메소드를 호출한 노드의 제일 마지막 노드로 파라미터의 전달한 값을 추가할 수 있다

const prev = document.createElement('p');
prev.textContent ='이전';
tomorrow.before(prev);
// 메소드를 호출한 노드의 앞쪽에 형제노드로 추가

const next = document.createElement('p');
next.textContent ='다음';
tomorrow.after(next);
// 메소드를 호출한 노드의 뒤쪽에 형제노드로 추가
