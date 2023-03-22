// 에러와 에러 객체
console.log('start');

const error = new TypeError('타입 에러가 발생 했습니다.');

throw error;
//의도적 에러 throw

console.log(error.name);
console.log(error.message);

console.log('end');

