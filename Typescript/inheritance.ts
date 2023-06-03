export{}

class parent{
    name:string;
    setname(name:string):void{
        this.name=name;
    }
}
class child extends parent{
    //name="anil sidhu"
    getname():void{
        console.log(this.name);
         
    }


}


let c1=new child()

c1.setname('bruce');
c1.getname();