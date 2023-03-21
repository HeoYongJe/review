// 객체를 활용한 구조 분해
const macbook = {
  title: '맥북 프로',
  price: 1000,
  memory: '32GB',
};

// const title = macbook.title;
// const price = macbook.price;
const {title:product, price, ...other} = macbook;
// :을 통해 프로퍼티 네임과 새로운 네임의 변수를 설정 할 수 있다
// 이런 경우는 객체의 프로퍼티가 변수 이름으로 사용 할 수 없는 경우에 사용 할 수 있다 ex) 'serial' : 'abcde', 

console.log(product);
console.log(price);
console.log(other);