// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let age = '21'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
// let fullName = firstName + space + lastName; // concatenation, merging two string together.
// console.log(fullName);
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

// console.log(personInfoOne)
// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

// console.log(paragraph)
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('Day 2\t3\t5')
// console.log('Day 3\t3\t5')
// console.log('Day 4\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with \"Hello, World!\"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
// console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
// console.log(`The sum of {a} and {b} is {a + b}`)
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250
// let fullName = firstName + ' ' + lastName

// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)
// let a = 2
// let b = 3
// console.log(`${a} is greater than ${b}: ${a > b}`)
// let js = 'JavaScript'
// console.log(js.length)         // 10
// let firstName = 'Asabeneh'
// console.log(firstName.length)  // 8
// let string = 'JavaScript'
// let firstLetter = string[0]

// console.log(firstLetter)           // J

// let secondLetter = string[1]       // a
// let thirdLetter = string[2]
// let lastLetter = string[9]

// console.log(lastLetter)            // t

// let lastIndex = string.length - 1

// console.log(lastIndex)  // 9
// console.log(string[lastIndex])    // t
// let string = 'Grelandis'
// console.log(string.substr(2,4))    // Script

// let country = 'unitedstatesofamerica'
// console.log(country.substr(3, 4))
// console.log(country.substring(3, 9))   // land
// let string = 'JavaScript'

// console.log(string.substring(0,4))     // Java
// console.log(string.substring(4,10))    // Script
// console.log(string.substring(4))       // Script

// let country = 'Finland'

// console.log(country.substring(0, 3))   // Fin
// console.log(country.substring(3, 7))   // land
// console.log(country.substring(3))      // land


let password = '123hi'
if(password.length >= 4 && password.length <= 12){
    console.log('Correct password')
}
else if(password) {
    
}
else{
    console.log('Incorrect password')
}