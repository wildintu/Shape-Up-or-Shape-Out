const rectBtn = document.getElementById('rectBtn'),
    sqBtn = document.getElementById('sqBtn'),
    cirBtn = document.getElementById('cirBtn'),
    triBtn = document.getElementById('triBtn'),
    container = document.getElementById('container'),
    cb = document.getElementById('canvasbox'),
    MAX = 600;


class Shape {
    constructor() {
        this.x = Math.floor(Math.random() * 600);
        this.y = Math.floor(Math.random() * 600);
    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    render() {
        let ctx = document.getElementById('canvas').getContext("2d");
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'purple';
        ctx.fill();
    }


}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
    }

    render() {
        let ctx = document.getElementById('canvas').getContext("2d");
        let xh = parseInt(this.x) - parseInt(this.height);
        let yh = parseInt(this.y) + parseInt(this.height);
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.y, this.x);
        ctx.lineTo(this.y, xh);
        ctx.lineTo(yh, this.x);
        ctx.lineTo(this.y, this.x);
        ctx.closePath();
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    render() {
        let ctx = document.getElementById('canvas').getContext("2d");
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'green';
        ctx.fill();
    }
}

class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }
    render() {
        let ctx = document.getElementById('canvas').getContext("2d");
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.length, this.length);
        ctx.fillStyle = 'red';
        ctx.fill();
    }

}

cirBtn.addEventListener('click', function () {
    let circle = new Circle(document.getElementById('cirradius').value);
    circle.render();
})

triBtn.addEventListener('click', function () {
    let triangle = new Triangle(document.getElementById('triheight').value);
    triangle.render();
})

rectBtn.addEventListener('click', function () {
    let rectangle = new Rectangle(document.getElementById('rectwidth').value, document.getElementById('rectheight').value);
    rectangle.render();
})

sqBtn.addEventListener('click', function () {
    let square = new Square(document.getElementById('sqside').value);
    square.render();
})



canvas.addEventListener('click', function (e) {
    let canvas = document.getElementById('canvas');
    canvasLeft = canvas.offsetLeft,
        canvasTop = canvas.offsetTop,
        context = canvas.getContext('2d'),
        canvas = [];
    let xCanvas = e.pageX - canvasLeft,
        yCanvas = e.pageY - canvasTop;
    console.log(this);
})

function randomVal(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}


