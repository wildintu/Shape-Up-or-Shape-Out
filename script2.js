let MAX = 600;
let sc = document.getElementById('shapecontainer');
let sn2 = document.getElementById('shapename2'),
    sh2 = document.getElementById('shapeheight2'),
    sw2 = document.getElementById('shapewidth2'),
    sr2 = document.getElementById('shaperadius2'),
    sa2 = document.getElementById('shapearea2'),
    sp2 = document.getElementById('shapeperimeter2');

class Shape {
    constructor(x,y) {
        this.div = document.createElement('div');
        //this.div.classList.add('shape');
        this.div.style.position = 'absolute';
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        sc.appendChild(this.div);
        this.div.addEventListener('dblclick', () => this.div.remove());
        this.div.addEventListener('click', () => this.describe())
    }
}

class Rectangle extends Shape {
    constructor(x,y,width,height) {
        super(x,y);
        this.height = height;
        this.width = width;
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`
        this.div.classList.add('rectangle');
    }

    describe() {
        let shapeVal = this.div.classList;
        sn2.value = shapeVal;
        let heightVal = this.div.style.height;
        sh2.value = heightVal;
        let widthVal = this.div.style.width;
        sw2.value = widthVal;
        let radiusVal = 'NA';
        sr2.value = radiusVal;
        let areaVal = `${Math.floor(this.height * this.width)}px`;
        sa2.value = areaVal;
        let perimeterVal = `${Math.floor((this.height * 2) + (this.width * 2))}px`;
        sp2.value = perimeterVal;
    }
}

class Square extends Shape {
    constructor(x,y,length) {
        super(x,y);
        this.length = length;
        this.div.style.width = `${length}px`;
        this.div.style.height = `${length}px`
        this.div.classList.add('square');
    }
    describe() {
        let shapeVal = this.div.classList;
        sn2.value = shapeVal;
        let heightVal = this.div.style.height;
        sh2.value = heightVal;
        let widthVal = this.div.style.width;
        sw2.value = widthVal;
        let radiusVal = 'NA';
        sr2.value = radiusVal;
        let areaVal = `${Math.floor(this.length * this.length)}px`;
        sa2.value = areaVal;
        let perimeterVal = `${Math.floor(this.length * 4)}px`;
        sp2.value = perimeterVal;
    }
}

class Circle extends Shape {
    constructor(x,y,radius) {
        super(x,y);
        this.radius = radius;
        this.div.style.width = `${radius*2}px`;
        this.div.style.height = `${radius*2}px`
        this.div.classList.add('circle');
    }
    describe() {
        let shapeVal = this.div.classList;
        sn2.value = shapeVal;
        let heightVal = 'NA';
        sh2.value = heightVal;
        let widthVal = 'NA';
        sw2.value = widthVal;
        let radiusVal = this.radius;
        sr2.value = radiusVal;
        let areaVal = `${Math.floor(Math.PI * this.radius * this.radius)}px`;
        sa2.value = areaVal;
        let perimeterVal = `${Math.floor(2 * Math.PI * this.radius)}px`;
        sp2.value = perimeterVal;
    }
}

class Triangle extends Shape {
    constructor(x,y,height) {
        super(x,y);
        this.height = height;
        this.div.style.width = `0px`;
        this.div.style.height = `0px`;
        this.div.style.borderRight = `${height}px solid transparent`;
        this.div.style.borderBottom = `${height}px solid #ffff00`;
        this.div.style.opacity = `50%`;
        this.div.classList.add('triangle');
    }
    describe() {
        let shapeVal = this.div.classList;
        sn2.value = shapeVal;
        let heightVal = this.height;
        sh2.value = heightVal;
        let widthVal = this.height;
        sw2.value = widthVal;
        let radiusVal = 'NA';
        sr2.value = radiusVal;
        let areaVal = `${Math.floor(0.5 * this.height ** 2)}px`;
        sa2.value = areaVal;
        let perimeterVal = `${Math.floor(2 * this.height + (Math.sqrt(2)) * this.height)}px`;
        sp2.value = perimeterVal;
    }
}

let rBtn = document.getElementById('rectBtn');
rBtn.addEventListener('click', addRect);

let sBtn = document.getElementById('sqBtn');
sBtn.addEventListener('click', addSq);

let cBtn = document.getElementById('cirBtn');
cBtn.addEventListener('click', addCir);

let tBtn = document.getElementById('triBtn');
tBtn.addEventListener('click', addTri);

function addRect() {
    let width = document.getElementById('rectwidth').value;
    let height = document.getElementById('rectheight').value;
    let xVal = randVal((MAX - width),0);
    let yVal = randVal((MAX - height),0);
    new Rectangle(xVal, yVal, width, height);
}

function addSq() {
    let length = document.getElementById('sqlength').value;
    let xVal = randVal((MAX - length),0);
    let yVal = randVal((MAX - length),0);
    new Square(xVal, yVal, length);
}

function addCir() {
    let radius = document.getElementById('cirradius').value;
    let xVal = randVal((MAX - radius*2),0);
    let yVal = randVal((MAX - radius*2),0);
    new Circle(xVal, yVal, radius);
}

function addTri() {
    let height = document.getElementById('triheight').value;
    let xVal = randVal((MAX - height),0);
    let yVal = randVal((MAX - height),0);
    new Triangle(xVal, yVal, height);
}

let randVal = (max,min) => Math.floor(Math.random() * (max-min)) + min;