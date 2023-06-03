"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//The interface basically creates template for our object
var users = {
    name: 'bruce',
    age: 30,
    address: 100
};
users.name = 'peter';
//users.email:'peter.text@test.com'  we cannot add new value in type script but we can update the va;lue with same datatypes
console.log(users);
