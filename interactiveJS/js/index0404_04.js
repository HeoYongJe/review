// DOM 프로퍼티
const myTag = document.querySelector('#list-1');

// textContext
// html을 제외한 텍스트만 가져옴
console.log(myTag.textContent);

// outerHTML
//요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해줍니다. (내부에 있는 줄 바꿈이나 들여쓰기 모두 포함)
console.log(myTag.outerHTML);

// innerHTML
// 기존요소를 바꾸거나, 추가 할때 많이사용
//요소의 모든 자손이 제거되고, 문자열 htmlString에 지정된 HTML을 파싱하고, 생성된 노드로 대체하므로 주의
console.log(myTag.innerHTML);
myTag.innerHTML += '<li>추가</li>'