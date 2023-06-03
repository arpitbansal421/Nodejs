/*Promises 

--rsolve
reject


*///

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=true;
            if(!error){
                console.log("Your promises have been resolved");
                resolve();
            }else{
                console.log("Your promises has not been resolved");
                reject('Sorry not fulfilled');
            }
            
        }, 3000);
    })
}

func1().then(function () {
    console.log("Harry :Thanks for resolving");
    
}).catch(function (error) {
    console.log("Harry : very bad bro "+error);
    
})                                                                                     