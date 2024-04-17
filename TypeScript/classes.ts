class Car {
    model: string;

    constructor(model: string) {
        this.model = model;
    }

    drive() {
        console.log(`Driving a ${this.model}`);
    }
}

const myCar = new Car("Toyota");
myCar.drive(); // Output: Driving a Toyota
