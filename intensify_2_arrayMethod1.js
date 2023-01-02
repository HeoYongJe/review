let fruits = ['사과','바나나','포도','딸기','오렌지'];
console.log(fruits);


//splice(startIndex, deleteCount, item)
fruits.splice(4,1,'메론');
console.log(fruits) //사과,바나나,포도,딸기,메론

//splice를 이용하면, 요소를 수정 삭제 +@ 가 가능하다
