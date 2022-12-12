// 직사각형의 넓이를 계산해 주는 calculateRectangleArea 함수를 만들어 보세요. 
// calculateRectangleArea 함수는 파라미터로 width와 height를 받고, 직사각형의 넓이를 리턴해 줍니다.

// 여기에 calculateRectangleArea 함수를 작성해 주세요

function calculateRectangleArea(width, height){
  return width * height;
}


// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);


// a빵집은 빵과 음료수를 함께 제공한다. 특별한 주문이 없을시 스프라이트가 기본제공
// 빵이름과 음료이름을 입력받아 '주문하신"빵","음료수"가 나왔습니다' 를 만드시오

function SetMenu(bread,drink = 'sprite') {
  console.log(`주문하신 ${bread}, ${drink}가 나왔습니다.`)
}

SetMenu('샌드위치');
SetMenu('터키베이컨', '코카콜라');
SetMenu('바게트');
SetMenu('이탈리안 비엠티', '닥터페퍼');
SetMenu('에그마요', '환타 오렌지');