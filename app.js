// task 1
// for(var i=10; i>=0; i--) {
//     // console.log(i)
// }

// task 2
// for(let i=1; i<10; i++) {
//     if(i%2!=0)
//     console.log(i)
// }

// task 3
// for(let i=0; i<10; i++) {
//     if(i%2==0)
//     console.log(i)
// }

// task 4
// for(let i=0; i<100; i++) {
//     if(i%3==0)
//     console.log(i)
// }

// task 5
for(let i=0; i<100; i+=2) {
    if(i%5==0 || i%3==0)
    console.log(i)
}

// for(let i=1; i<50; i++) {
//     if(i%3!=0)
//     console.log(i)
// }

// let string = 'Pdp academy'
// string = string.repeat(10)
// console.log(string)

// for(i=0; i<10; i++){
//     string = string.replace('Pdp', 'It')
// }
// console.log(string)
// console.log(string.length)
// let oo = console.log(string.indexOf('', 5))
// let total = 0;
// for(let i=0; i<=string.length; i++){
//     if(string[i] == 'P' || string[i] == 'p'){
//         total++
//     }
// }

// console.log(total)

// let all = 0;
// for(let i=0; i<=string.length; i++){
//     if(string.charAt(i) == 'm') {
//         all++
//     }
// }
// console.log(all)

// var allP = 20 
//     allM = 10
//     ortaA  = (allP + allM)/2
    
//  console.log(ortaA)

// var allP = 20
//     allM = 10
//     ortaG = Math.sqrt(allP*allM)

// console.log(ortaG)    

// var number = 123456

// var result = number.toString()
//     console.log(number)
//     count = 0
// for(let i=0; i<number.length; i++){
//     // console.log(count= count+ +result[i])
//     if(i%3==0)
    
// }
// console.log(number[i])



// hafta = 55

// switch(hafta) {
//     case 1: console.log('Dushanba'); break
//     case 2: console.log('Seshanba'); break
//     case 3: console.log('Chorshanba'); break
//     case 4: console.log('Payshanba'); break
//     case 5: console.log('Juma'); break
//     case 6: console.log('Shanba'); break
//     case 7: console.log('Yakshanba'); break
//     default: console.log('Bunday hafta kuni mavjud emas')
// }


// message = 10

// message > 0 ? 
//      message < 90 ? console.log('sizga kop yangi habar bor') :console.log('sizga oz yangi habar bor')
//    : 
//      console.log('Yangi habar yoq')

// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

// let string = '30 Days Of JavaScript'

// console.log(string.indexOf('D'))          // 3
// console.log(string.indexOf('Days'))       // 3
// console.log(string.indexOf('days'))       // -1
// console.log(string.indexOf('a'))          // 4
// console.log(string.indexOf('JavaScript')) // 11
// console.log(string.indexOf('Script'))     //15
// console.log(string.indexOf('script'))     // -1
// console.log(string.length)

// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country = 'Fin'
// console.log(country.concat("land")) // Finland


// var totn_string = 'Tech';

// console.log(totn_string.concat('On','The','Net'));

// console.log(totn_string);

// TASKS:
// #1
// var string = '30 days of javascript'
// #2
// console.log(string)
// #3
// console.log(string.length)
// #4
// console.log(string.toUpperCase(string))
// #5
// console.log(string.toLowerCase(string))
// #6
// console.log(string.substr(5,7))
// console.log(string.substring(7,10))
// #7
// console.log(string.slice(3,21))
// #8
// console.log(string.includes('script', 0))
// #9
// console.log(string.split(''))
// #10
// console.log(string.split(' '))
// var company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// #11
// console.log(company.split(', '))
// #12
// console.log(string.replace('javascript','python'))
