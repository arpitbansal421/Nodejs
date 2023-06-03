

async function harry(){


    let delhiwhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve("Delhi whether is 27 deg")
        }, 2000);
        
    })

    let banglorewhether=new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve("Banglore whether is 33 deg")
        }, 5000);
        
    })
    console.log("Fetching Delhi whether details--");
    let delhiw=await delhiwhether;
    console.log("Fetched delhi Whether "+delhiw)
    console.log("Fetching the banglore whether details");
    let banglorew=await banglorewhether
    console.log("Fetched the banglore :"+banglorew)
    return [delhiw,banglorew];
   

}


const cherry=()=>{
    console.log("hi I am cherry I am not waiting");
}
console.log("Welcome to the control room");


let a=harry();

let b=cherry();

a.then((value)=>{
    console.log(value);

})