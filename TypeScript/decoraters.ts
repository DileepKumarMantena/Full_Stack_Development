class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 3);

console.log("Area:", myRectangle.calculateArea()); 
console.log("Perimeter:", myRectangle.calculatePerimeter());




class Add{


    result=add()
}

function add(){

}