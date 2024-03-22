// DAY 15/30

// HOW TO MERGE TWO ARRAY AND SORT THEM

let arr1 = [1, 3, 5, 8];
let arr2 = [2,7, 6, 9, 10];
let concatArr = arr1.concat(arr2);

// Sorting the concatenated array
concatArr.sort((a, b) => a - b);

console.log(concatArr);