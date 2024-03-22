
// HOW TO FIND INTERSECTION OF TWO ARRAY IN JAVASCRIPT


var arr1 = [1, 2, 3, 5, 6, 7, 8, 2,9, 10, 10];
var arr2 = [1, 2, 5, 6, 11, 12, 13, 10];
var intersectionArray = []
for (var i = 0; i <= arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            if (!intersectionArray.includes(arr1[i])) {
                intersectionArray.push(arr1[i])
                break;
            }
        }

    }
}
console.log(intersectionArray)

