////DAY 12

// HOW TO MAKE FABONACCI SEQUENCE IN JAVASCRIPT

var a = 0;
var b = 1 ;
for(var i = 0 ;i<=10;i++){
    let temp = a+b;            //// 0+1=1 
     a = b ;               //a = 1
     b= temp;             ///b = 1 
     console.log(temp)
}