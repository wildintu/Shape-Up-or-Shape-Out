let MAX = 600;
let sc = document.getElementById('shapecontainer');

class Shape {
    constructor(x,y,mw,mh) {
        this.div = document.createElement('div');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.classList.add('shape');
        sc.appendChild(this.div);
    }
}

class Rectangle extends Shape {
    constructor(x,y,width,height) {
        super(x,y);
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`
        this.div.classList.add('rectangle');
    }
}

let rBtn = document.getElementById('rectBtn');
rBtn.addEventListener('click',addSq);

function addSq(e) {
    e.preventDefault();
    //console.log('hey');
    let width = document.getElementById('rectwidth').value;
    let height = document.getElementById('rectheight').value;
    let xVal = randVal((MAX - width),0);
    let yVal = randVal((MAX - height),0);
    let rectangle = new Rectangle(xVal, yVal, width, height);
}

let randVal = (max,min) => Math.floor(Math.random() * (max-min)) + min;
//console.log(randVal);