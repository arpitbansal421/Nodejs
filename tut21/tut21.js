//Event modules
//Node.js has built in module called Events
//we can create fire and listen our own events
//Example1-Regestering for the event to be fired only one time using once

const EventEmitter=require("events");
//const event=require('events');
const event=new EventEmitter();
// event.on('sayMYname',()=>{
    
//     console.log("your name is vinod");
// });

// event.on('sayMYname',()=>{
//     console.log("your name is Arpit");
// });

// event.on('sayMYname',()=>{
//     console.log("your name is Priyanshu");
// });

// event.on('sayMYname',()=>{
//     console.log("your name is xxxxx");
// });

event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)

});

event.emit('checkpage',200,"ok");




