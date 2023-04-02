abstract class Vehicle {
  private make: string;
  private model: string;
  private year: number;
  private rented: boolean;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  setRented(rented: boolean): void {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.isRented()) {
      console.log("This vehicle is already rented.");
    } else {
      this.setRented(true);
      console.log("This vehicle has been rented.");
    }
  }

  return(): void {
    if (!this.isRented()) {
      console.log("This vehicle has not been rented yet.");
    } else {
      this.setRented(false);
      console.log("This vehicle has been returned.");
    }
  }
}

class Car extends Vehicle {
  private numDoors: number;
  private numPassengers: number;

  constructor(make: string, model: string, year: number, numDoors: number, numPassengers: number) {
    super(make, model, year);
    this.numDoors = numDoors;
    this.numPassengers = numPassengers;
  }

  rentalRate(): number {
    return 50; // $50 per day
  }

  getNumDoors(): number {
    return this.numDoors;
  }

  getNumPassengers(): number {
    return this.numPassengers;
  }
}

class Truck extends Vehicle {
  private cargoCapacity: number;

  constructor(make: string, model: string, year: number, cargoCapacity: number) {
    super(make, model, year);
    this.cargoCapacity = cargoCapacity;
  }

  rentalRate(): number {
    return 75; // $75 per day
  }

  getCargoCapacity(): number {
    return this.cargoCapacity;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  rentalRate(): number {
    return 25; // $25 per day
  }

  getEngineSize(): number {
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
