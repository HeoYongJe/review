//모던한 프로퍼티 표기법
const fullName = '허용제';
const birth = 1989;

const user = {
  fullName,
  birth,
};

console.log(user);


//축약형 
const user2 = {
  firstName: 'Heo',
  lastName: 'YongJe',
  getFullName() { // getFullName 뒤에 <: funtion> 생략가능
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user2.getFullName());