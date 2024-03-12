// Day 13
// How to Find Union of two array  in javascript

// 1ST METHOD 

var arr1 = [1,2,3,4,5,6];
var arr2 = [4,7,8,9,6,5];
var allNumbers = [...arr1,...arr2];
var unionArray = []

for(var i = 0; i<allNumbers.length;i++){
     if(!unionArray.includes(allNumbers[i])){
        unionArray.push(allNumbers[i])
     }
}
console.log(unionArray)


//  2ND METHOD

// new set is a object which is use to ignore duplicate values and using ... convert into array

console.log([... new Set(allNumbers)])