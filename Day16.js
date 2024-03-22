

// DAY 16/30

// 1st question

// HOW TO FREEZE OBJECT IN JAVASCRIPT

var obj = {x:100,y:90};
Object.freeze(obj)
var obj1 = obj
obj1.x = 9
console.log(obj1.x)

////2nd question
///delete method not work with variables its delete property of object
const fname = 'raoalimurad';
age = 19;
console.log(delete fname) ///false
console.log(delete age)///true