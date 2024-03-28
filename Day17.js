//  ASYNCHRONOUS DATA

let a = 10 ;
let b = 12 ;
setTimeout(()=>{   ////it take time that's why value will not update
  b = 40            //////e drawbacks of asynchronus 
},2000)

console.log(a+b) ////output is 22 beacuse it call first 


///HANDLE ASYNCHRONOUS DATA

let handleData = new Promise((resolve, reject) => {
 
  setTimeout(()=>{
    b = 40
    resolve(b)
  },2000)
   
})
handleData.then((data)=>{
  b = data
  console.log(a+b)
})
