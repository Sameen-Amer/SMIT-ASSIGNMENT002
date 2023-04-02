"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.isRented()) {
            console.log("This vehicle is already rented.");
        }
        else {
            this.setRented(true);
            console.log("This vehicle has been rented.");
        }
    }
    return() {
        if (!this.isRented()) {
            console.log("This vehicle has not been rented yet.");
        }
        else {
            this.setRented(false);
            console.log("This vehicle has been returned.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numDoors, numPassengers) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.numPassengers = numPassengers;
    }
    rentalRate() {
        return 50; // $50 per day
    }
    getNumDoors() {
        return this.numDoors;
    }
    getNumPassengers() {
        return this.numPassengers;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity) {
        super(make, model, year);
        this.cargoCapacity = cargoCapacity;
    }
    rentalRate() {
        return 75; // $75 per day
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, engineSize) {
        super(make, model, year);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 25; // $25 per day
    }
    getEngineSize() {
        return this.engineSize;
    }
}
// Test the classes
const car = new Car("Honda", "Civic", 2021, 4, 5);
console.log(car.rentalRate()); // Output: 50
car.rent();
car.return();
const truck = new Truck("Ford", "F-150", 2022, 5000);
console.log(truck.rentalRate()); // Output: 75
truck.rent();
truck.rent(); // Output: This vehicle is already rented.
truck.return();
const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2020, 883);
console.log(motorcycle.rentalRate()); // Output: 25
motorcycle.return(); // Output: This vehicle has not been rented yet.
motorcycle.rent();
motorcycle.return();
//# sourceMappingURL=index.js.map