
// 1. Predict (in comments) the output order of this code, then run to verify.
//    console.log(a());
//    var b = function(){ return 'B'; };
//    function a(){ return 'A'; }
//    console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.

console.log(a()); // Output => 
var b = function(){ return 'B'; };
function a(){ return 'A'; }
console.log(b()); // Output => B
// Explanation => Works before definition because function declaration is hoisted and doesn't for b because function expression is not hoistd

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).

function sum(a,b){
    return a+b
}
let sumExp = function(a,b){
    return a+b
}
console.log(sum(3,4)) // output => 5
console.log(sumExp(3,4)) // output => 5


// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.

let factorial = function fact(n){
    if (n<=1){
        return 1;
    }
    return n*fact(n-1)
}
console.log(factorial(6));

//console.log(fact(5))// This will output fact is not defined


// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.

function showInfo(){
    console.log(`Num of Args= ${arguments.length}`)
    for (let i=0; i<arguments.length;i++){
        console.log(`Arg ${i} = ${arguments[i]}`)
    }
}
showInfo()
showInfo(1,2)
showInfo(1,2,3,4,5)


// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.

function mutate(x,y){
    console.log("Before mutation");
    console.log(`x= ${x} ,y= ${y} `) // will output 1,2
    console.log(`arg[0]= ${arguments[0]}, arg[1]= ${arguments[1]}`) // will output 1,2
    x = 6
    y = 7
    console.log("After mutation");
    console.log(`x= ${x} ,y= ${y} `)// will output 6,7
    console.log(`arg[0]= ${arguments[0]}, arg[1]= ${arguments[1]}`) // will output 6,7
}
mutate(1,2)
// Explanation => both x,y params and arguments share the same reference so when changing the values of x,y the values of arguments[0] and arguments[1] also changes

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll(){
    let total = 0
    for (let i=0;i<arguments.length;i++){
        total += arguments[i]
    }
    console.log(total)
}
sumAll(2,5,3) //=> 10
sumAll() // => 0

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

function sumAll(){
    let arr = Array.from(arguments)
    return arr.reduce((total,current)=>total+current,0)
    // Another solution
    // return Array.prototype.reduce.call(arguments, 
    //     (total,current)=> total +current,0)
}
console.log(sumAll(2,5,3))


// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.

function describeValue(){
     if (arguments.length === 0) {
        return "none";
    } else if (arguments.length === 1) {
        return `one: ${arguments[0]}`;
    } else if (arguments.length === 2) {
        return `two: ${arguments[0]} , ${arguments[1]}`;
    } else {
        return "too many";
  }
}
console.log(describeValue())
console.log(describeValue(1))
console.log(describeValue(1,2))
console.log(describeValue(1,2,3))

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.

let funcs = [
    function(num) { return num+1 },
    function(num) { return num+2 },
    function(num) { return num+3 }
]
let start = 10

for (let i =0; i<funcs.length; i++){
    start = funcs[i](start)
}

console.log(start) // => 16




// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

function makeMultiplier(factor){
    return function(n){
        return n*factor
    }
}

let double = makeMultiplier(2)
let triple = makeMultiplier(3)

console.log(double(7)) // => 14
console.log(triple(7)) // => 21


// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn){
    let done = false;
    return function(){
        if(!done){
            done = true;
            return fn()
        }
    }
}

var greetOnce = once(function (){
    console.log("Hello only one Time")
})
greetOnce() // will return "Hello only one Time"
greetOnce() // nothing


// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start){
    let total = start
    return function(num){
        total += num
        return total
    }
}

let add1 = makeAdder(1);
let add2 = makeAdder(10);

console.log(add1(2)) // => 3

console.log(add2(4)) // => 14

// 15. (Bonus) Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).


// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.

let user = {
    uName: "Ahmed",
    sayHi: function(){
        console.log(`Hi ${this.uName}`)
    }
}
user.sayHi() // => Hi Ahmed
var f = user.sayHi; // => Hi undefined // Explanation => f just copies the function to make it work we must use bind to tie the function to user
//var f = user.sayHi.bind(user) // This will work
f()
 

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.

let obj = {
    uName:'Sara'
}

user.sayHi.call(obj)

user.sayHi.apply(obj)

let fn = user.sayHi.bind(obj)
fn()

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

let greeter = {
    greet: function(greeting,sign){
        console.log(`${greeting} ${this.uName} ${sign}`)
    }
}

let user2 = {uName:'Ali'}
greeter.greet.call(user2,'Hello', '!')
greeter.greet.apply(user2,['Hello', '!'])


// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
let user3 = { uName:'Lara' }
let fn2 = greeter.greet.bind(user3)
fn2("Hi","!")

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
function sayHello(obj) {
  return greeter.greet.bind(obj, "Hello");
}

let user4 = {uName:'Mohammed'}
let fn3 = sayHello(user4)
fn3('!')
fn3('*')
fn3('!!')
fn3('<#')



// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.

function Reverse() {

  let arr = Array.prototype.slice.call(arguments);

  let reversed = arr.slice().reverse();

  console.log(`Reversed: ${reversed}`);
  console.log(`Original: ${arr}`);
}

Reverse(1, 2, 3, 4);



// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
// Without loop
let arr = [5,2,11,7]
console.log(Math.max.apply(null,arr))

// With loop
let maxElem = arr[0]
for (let i=1; i<arr.length;i++){
    maxElem = Math.max(maxElem,arr[i])
}
console.log(maxElem)



// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

console.log(Math.max.call(null, 5, 2, 11, 7));

console.log(Math.max.apply(null, arr));

// Apply is better because we can simply pass the array without having to write all the elements 


// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

let uName = "Ali";
let age = 20;

console.log('User: ' + uName + ' Age: ' + (age + 1));

console.log(`User: ${uName} Age: ${age + 1}`);



// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

let title = "Welcome"
let body = "This is Js Day5"

let tmpLit = `${title}
${body}
`
let classical = `${title}\n${body}`

console.log(tmpLit)
console.log(classical)


// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.



if (true){
    var i = 5
    let j = 20
    console.log(`Inside if: ${i}`)
    console.log(`Inside if: ${j}`)
}
console.log(`Outside if: ${i}`)
//console.log(`Outside if: ${j}`) // leaks happens here

// Explanation => var is function scope while let is block scope

// 28. Write code that tries to log x before let x = 5;.

//console.log(x); // Cannot access 'x' before initialization
let x = 5;
// with let the variable is hoisted but not initialized like var

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const nums = [2,6]
nums.push(7)
console.log(nums)

//nums = [2,9] 
//console.log(nums) // TypeError => Assignment to constant variable



// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

const fullBod = (n) => {
    return n*n
}
console.log(fullBod(2))

const concise = (n) => n*n;
console.log(concise(2))

const inlineBod = [1,2,3].map(n=>n*n)
console.log(inlineBod)

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).




// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.

let arrowFn = ()=>{v:10}
console.log(arrowFn()); // undefined 
// To make it work
arrowFn = ()=>({v:10})
console.log(arrowFn())



// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).

const greeting = {
    uName:"Ahmed",
    sayHallo: () =>{
        console.log(`Hello ${this.uName}`)
    }
}
//greeting.sayHallo() // returns hello undefined


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).

function greet(uName) {
  return 'Hi ' + uName + '!';
}


const greetArrow = (uName) => {
  return 'Hi ' + uName + '!';
};

console.log(greetArrow("Ahmed"));


// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).

const add_2 = x=>x+2
const times_3 = x=>x*3
const minus_1 = x=>x-1

const runPipeline = (n,fnsArray) =>{
    for (let i=0;i<fnsArray.length;i++){
        n = fnsArray[i](n)
    }
    return n
}
console.log(runPipeline(5, [add_2,times_3,minus_1]))


// 36. (write answers BEFORE running):
    // var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
    // var inc = obj_x.inc;
    // console.log(obj.inc());
    // console.log(inc()); 
  // Explain both lines.

// console.log(obj.inc()); // output => 2
// Explanation => this points at obj


// console.log(inc());  // output => NaN
// inc just copies the function, so this.n will be undefined, but after adding one using this.n++ will be NaN


// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.



// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst(){
    if (arguments.length === 0){
        return undefined
    }
    else{
        return Array.from(arguments)
        // another sol
        // let arr = []
        // for (let i = 0 ; i < arguments.length; i++){
        //     arr.push(arguments[i])
        // }
        // return arr
    }
}
console.log(safeFirst())
console.log(safeFirst(1))
console.log(safeFirst(1,2,3,4,5))

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();

// 40. Write 2 things that were new or tricky today (comment).
 

