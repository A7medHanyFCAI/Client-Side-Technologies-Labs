// 1- Write a function that greets a user, using a default parameter for the name.
function greeting(name="Ahmed"){
    return `Hello ${name}`
}
console.log(greeting())
// 2- Write a function that calculates the total price with a default tax rate parameter.
function total(price,tax_rate=0.2){
    return price * (1 + tax_rate)
}
console.log(total(100))

// 3- Write a function that creates a user object, using a default role parameter.
function create(name,age,role="software developer"){
    const user={
        name:name,
        age:age,
        role:role
    }
    return user
}
console.log(create("Ahmed",22))
// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiply(...numbers){
    return numbers.reduce((acc,number)=>{return acc*number},1)
}
console.log(multiply(1,2,3))
console.log(multiply(1,2,3,4,5))
console.log(multiply(1))
// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiply_first(num,...numbers){
    const sum = numbers.reduce((acc,number)=>{return acc+number},0)
    return num * sum
}
console.log(multiply_first(10,1,2,3,4,5))
// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function trans_to_array(...strs){
    return strs
}
console.log(trans_to_array('1','2','3','4','5'))
// 7- Create a new array by combining two arrays using the spread operator.
const arr1 = ['1','2','3','4']
const arr2 = ['5','6','7','8']
const newArr = [...arr1,...arr2]
console.log(newArr)
// 8- Copy an array using the spread operator.
const arr3 = [...arr2]
console.log(arr3)
console.log(arr2)
// 9- Merge two objects into one using the spread operator.
const obj1 = {
    name:"ahmed",
    age:'22',
    job:"Software Developer"
}
const obj2={
    phone:"+1234556",
    city:"Cairo"
}
const newObj = {...obj1,...obj2}
console.log(newObj)
// 10- Update a property in an object using the spread operator to create a new object.
const newObj2 = {...newObj, name:"Mohammed"}
console.log(newObj2)
// 11- Destructure an array to get the first and second elements into variables.
const [num1,num2] = arr1
console.log(arr1)
console.log(num1)
console.log(num2)
// 12- Destructure an array to get the first element and the rest into another array.
const [num_1,...numbers] = newArr
console.log(newArr)
console.log(num_1)
console.log(numbers)
// 13- Destructure an object to extract two properties into variables.
const {name,age} = newObj
console.log(newObj)
console.log(name)
console.log(age)

// 14- Destructure an object and rename the extracted properties.
const{name:Uname} = newObj
console.log(Uname)
// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function extract(obj,properties){
    for(const prop in properties){
        let {[prop]:data}= obj
        console.log(data)
    }
}
extract(newObj,[name,age])
