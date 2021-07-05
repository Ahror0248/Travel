// let a = `wefdw`
// let b = `BCA`
// let a1 = a.split(``).sort();
// let a2 = b.split(``).sort();
// function bass (){
//     for(let i=0; i<a1.length;i++){
//         for(let q=0;q<a2.length;q++){
//             if(a1[i]===a2[q]) return true;
//             else return false;
//         }
//     }
// }
// console.log(bass())




// Toq sonlarni topish
var arr = [32,12,13,4,9,2,1,19,23,59,20,48,34]
// for(let i of arr) {
//     let istub = true;
//     for (let index = 2; index < i/2; index++) {
//         if(i%index==0) {
//             istub = false;
//             break;
//         }
//         if(index==i){
//             break;
//         }
//     }
//     if(istub&&i!=1) {
//         // console.log(i)
//     }
// }

////
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

  for (let index = 0; index < arr.length; index++) {
     
    if(isPrime(arr[index])){

        console.log(arr[index])
    }
      
  }


// // juft son topish
// for(let i of arr) {
//     if(i%2==0) {
//         console.log(i)
//     }
// }