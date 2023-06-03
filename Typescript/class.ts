
export{}

//We cannot have multiple constructors in our typescript file 
class App{
    name:string;

    constructor(){
        this.name='Anil Sidhu'
    }
    
    // constructor(name){
    //     this.name='Anil Sidhu'
    // }

    
   getName(){
    console.log(this.name);
   }
    

}

let a1=new App();
a1.getName();