
//    function facce (age){
  
//     if(age<=14){
//        console.log('not registered')
//     }
//     else if(age>=14){
//        console.log('Regitered')
//     }
// }

// facce(16)




// hometasks------------




// function sqrt(number) {
//     number=number**0.5
//    console.log(number)
// }

// sqrt(25)



function round(number) {
   number = number * 10;
   var a = parseInt(number / 10)
   var b = number % 10;
   if(b>=5) {
      return a+1;
   }
   return a;
}
console.log(round(2.8))


// function pow(number) {
//    return number**2

// }
// console.log(pow(2))


// function ceil(number) {
//   number = number*10
//   var a = parseInt(number/10)
//   var b = number % 10
//   if(b<=9) {
//      return a+1
//   }
//   return a
// }
// console.log(ceil(12.9))


// function floor(number) {
//    number = number*10
//    var a = parseInt(number/10)
//    var b = number % 10
//    if(b>=9) {
//       return a
//    }
//    return a
//  }
//  console.log(floor(24.9))

// function ceil(number) {
//    number = number * 10
//    a = parseInt(number/10)
//    b = number % 10
//    if(b<=9) {
//       return a+1
//    }return a
// }

// console.log(ceil(12.5))


// function abs(number) {
//     if(number<0){
//         return number*(-1)
//     }return number
// }
// console.log(abs(-54))

// function min(number) {
//     let small = number.sort()
//     console.log(small[0])
// }
// min([2,5,9,5,3,0,1,7,5,3,-2,1])


// function max(number) {
//     let large = number.sort((a,b) => a-b)
//     let lastInd = large.length-1
//     console.log(large[lastInd])
// }
// max([25,5,9,5,3,0,1,7,5,3,-2,1])