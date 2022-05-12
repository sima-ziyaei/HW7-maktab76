function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(5);

circle.getArea = function () {
    return Math.PI * this.radius * this.radius;
};

circle.getPerimeter = function () {

    return 2 * Math.PI * this.radius;
};

console.log(circle.getArea());
console.log(circle.getPerimeter());