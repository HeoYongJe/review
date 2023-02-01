let members = ['one','two','three','four','five'];
console.log(members[5]); 

members[5] = 'six';
console.log(members[5]); //six
console.log(members) //'one','two','three','four','five'


//주의할점
//index의 순서를 넘겨서 추가하게 되면 빈공간에 undefined값이 자동으로 생성된다
//members[6]이 없기 때문에 비워두는게 아닌 undefined를 생성하게 8의 length를 가지게 된다
members[7] = 'eight';
console.log(members.length); //8