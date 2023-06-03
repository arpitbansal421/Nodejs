export {}
interface usersTyped{
    name:String,
  
    age:number,
    address:any,//any can accept any datatypes
}

//The interface basically creates template for our object

let users:usersTyped={
    name:'bruce',
    age:30,
    address:100
}

users.name='peter';

//users.email:'peter.text@test.com'  we cannot add new value in type script but we can update the va;lue with same datatypes
console.log(users);