//object
{
  name : '허용제' //name은 key '허용제'는 value 둘이 합쳐서 property라 한다
}
//property name 주의사항
// 첫번째 글자는 반드시 문자, 밑줄(_), 달러기호($)중 하나로 시작
// 띄어쓰기 금지
// 하이픈(-) 금지

//위에 해당하지 않는 경우 '' 따옴표로 감싸주어야 한다


//객체에서 데이터 접근하기
let codeit = {
  name : '허용제',
  'born Year' : 1989,
  study_List : {
    list1 : 'html',
    'list two' : '자바스크립트'
  }
}

//점 표기법
console.log(codeit.name);

//대괄호 표기법
console.log(codeit['born Year']);

//객체안에 객체를 부를때는 프로퍼티 네임을 계속 연결해서 접근
console.log(codeit.study_List.list1);
console.log(codeit.study_List['list two']);

//존재하지 않는 프로퍼티에 접근하면 에러가 아닌 undefined가 뜬다
console.log(codeit.age); // undefined