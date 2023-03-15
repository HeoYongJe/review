// Arrow function
const getTwice = (number) => { 
  return number * 2;
}
console.log(getTwice(2));


const getNumber = number => number *3;
console.log(getNumber(3));


//this 함수를 호출한 객체를 가리키는 키워드
function getFullName() {
  return `${this.firstName} ${this.LastName}`;
};

const user = {
  firstName : 'Heo',
  LastName : 'YongJe',
  getFullName : getFullName
};

const admin = {
  firstName : 'Kim',
  LastName : 'JinJu',
  getFullName : getFullName
};

console.log(user.getFullName());
console.log(admin.getFullName());