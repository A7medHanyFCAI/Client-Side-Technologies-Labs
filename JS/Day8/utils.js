export function greetUser(name){
    return `Hello, ${name}!`
}

export default class DataFetcher{
     async getUser(id){
        let response = await fetch('https://jsonplaceholder.typicode.com/users/')
        let usersObj = await response.json()
        for (const user of usersObj){
            if (user.id == id)
            {
                return user
            }
        }
     
    }
}