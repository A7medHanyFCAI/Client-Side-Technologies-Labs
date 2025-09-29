// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
import DataFetcher,{greetUser} from './utils.js'
console.log(greetUser("Ahmed"))
// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
const newPromise = new Promise((resolve) => {
  setTimeout(() => {
          resolve("Task completed!");
        }, 2000); 
      });

newPromise.then((message) => {
  console.log(message); 
});

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
const promise2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Welcome!");
  }, 1000);
}) ;

async function waitAndGreet(){
  let response = await promise2
  console.log(response)
}
waitAndGreet()

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchData(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  let obj = await response.json()
  console.log(obj.name)
  console.log(obj.email)
}
fetchData()
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchPost(){
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let obj = await response.json()
  let posts = obj.slice(0,3)
  const arr = []
  for (const post of posts){
    arr.push(post.title)
  }

  return arr
}
fetchPost().then(arr => console.log(arr))
// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.

const promiseTimer = count=> new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(count)
  },1000)
})
async function timer(){
  for (let count=1; count<4;count++){
    let response = await promiseTimer(count)
    console.log(response)
  }
}
timer()
// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.

function parseData(obj) {
  try {
    let response = JSON.parse(obj)
    console.log(response)
  } catch (error) {
    console.error("Wrong Json string")
  }
}
const validObj = '{"name": "Omar"}'
const invalidObj = '{name: Omar}'
parseData(validObj)
// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetchConvert(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  let obj = await response.json()
  let count = 0
  for (const o of obj){
    count += o.completed
  }
  console.log(`Count = ${count}`)
}
fetchConvert()
// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
let user = new DataFetcher()
user.getUser(2).then(user => console.log(user))