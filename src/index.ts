class Car{
    name:string
    // creating a private constructor
    private constructor(name:string){
        this .name=""
    }
    // getter method
    public static constructor1():string{
        return this.constructor()
    }

    
    }
let car1 = Car.constructor1()
console.log(car1);


