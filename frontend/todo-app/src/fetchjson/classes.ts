export class Vehicle {
    color: string = 'red'

    constructor(color:string){
     this.color=color
    }
    drive(): void {
        console.log('bla bla')
    }
    honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {

}

const vehicle = new Vehicle('red')
vehicle.drive()
vehicle.honk()
console.log(vehicle.color)
//protected modifier- Methods accessible within the class and subclass
