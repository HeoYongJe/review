//노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 추가
const first = document.createElement('li');
first.textContent = '처음';
tomorrow.prepend(first);

// 노드 삭제하기 : Node.remove();
tomorrow.children[0].remove();

// 노드 이동하기 : prepend, append, before, after
// today.append(tomorrow.children[0]);
today.children[1].after(tomorrow.children[1]);