//메소드
let greetings = {
  sayHello : function(name){
    console.log(`Hello ${name}`);
  },
  sayHi : function(){
    console.log('Hi');
  }
}

greetings.sayHello('허용제');
greetings.sayHi();

/////////////////////////////////////////////////////

let favoriteFruit = {
  addFruit : function(key,value){
    favoriteFruit[key] = value;
  },
  deleteFruit : function(key){
    delete favoriteFruit[key];
  }
}

favoriteFruit.addFruit('banana','yellow');
favoriteFruit.addFruit('apple','red');
favoriteFruit.addFruit('grape','purple');
console.log(favoriteFruit);

favoriteFruit.deleteFruit('grape');
console.log(favoriteFruit);