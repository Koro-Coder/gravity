const canvas = document.querySelector('canvas');
console.log(canvas);

const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function circle(){

    this.rad = 20;
    this.counter = 1;
    this.x = Math.random()*(canvas.width - 2*this.rad) + this.rad;
    this.y = Math.random()*(canvas.height - 2*this.rad) + this.rad;
    this.dx = (Math.random() - 0.5) * 4;
    this.dy =  0.5;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI*2, true);
        c.fillStyle = 'purple';
        c.fill();
        c.stroke();
        
        if(this.x+this.rad>canvas.width || this.x-this.rad<0)
        {
            this.dx = -this.dx;
        }
        if(this.y+this.rad+this.dy*this.counter>canvas.height){
            this.counter*=-0.9;
        }
        else{
            this.counter+=1;
        }

        this.x+=this.dx;
        this.y+=this.dy*this.counter;

    }
}

let Circle = [];

for(let i=0; i<100; i++)
{
    Circle.push(new circle());
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(let i=0; i<Circle.length; i++)
    {
        Circle[i].draw();
    }
}

animate();
