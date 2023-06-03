"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//We cannot have multiple constructors in our typescript file
var App = /** @class */ (function () {
    function App() {
        this.name = 'Anil Sidhu';
    }
    // constructor(name){
    //     this.name='Anil Sidhu'
    // }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getName();
