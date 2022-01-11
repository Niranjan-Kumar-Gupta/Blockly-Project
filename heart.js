const canvas_intro_heart = document.getElementById('canvas1');
const ctx_canvas_intro_heart = canvas_intro_heart.getContext('2d');
canvas_intro_heart.width = window.innerWidth;
canvas_intro_heart.height = window.innerHeight;


window.addEventListener('resize',function () {
    canvas_intro_heart.width = window.innerWidth;
    canvas_intro_heart.height = window.innerHeight;
   
});


const heartX = [];
const heartY = [];
let hue = 0;

function HeartData() {
    for (let i = 0; i <= Math.PI * 2; i += 0.03) {
        let m = (16 * Math.sin(i) ** 3);
        heartX.push(m);
        let n = -(13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i));
        heartY.push(n);
    }
}
HeartData();




function clear(canvas) {
    let ctx = canvas
    ctx.fillStyle = 'rgba(0, 0, 0,.06)'
    ctx.fillRect(0,0,canvas_intro_heart.width,canvas_intro_heart.height);
}



class Heart2{
    constructor(x,y,vel,col){
        this.x = x;
        this.y = y;
        this.size = 2.5;
        this.vel = vel;
        this.gravity = -0.0002;
        this.color = 'hsl(' +hue+ ',100%,50%)';
        this.alpha = 5;
        this.friction = 0.99999;
         

    }
    draw(canv){
        let ctx = canv;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.fillStyle = this.color;       
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill(); 
        ctx.closePath();
        ctx.restore();
    }
    update(){
        this.draw(ctx_canvas_intro_heart );
        this.alpha -= 0.06;
        this.vel.x *= this.friction; 
        this.vel.y *= this.friction; 
        this.vel.y += this.gravity; 
        this.x += this.vel.x;
        this.y -= this.vel.y;
    }

}
let hearts = [];
function initheart() {
    let heartsNum = heartX.length;
    let speed = 0.2;
    for (let i = 0; i < heartsNum; i++) {
        hearts.push(new Heart2(canvas_intro_heart.width*0.5,canvas_intro_heart.height*0.4,{
            x:heartX[i]*speed*1.5,
            y:-heartY[i]*speed
        },'blue'))
    }
}

function handelheart() {
    hearts.forEach((object,index) => {
        if (object.alpha > 0) {
            object.update();  
        }else{
            hearts.splice(index,1);
       }
    });
}

let count = 0
function handelHeartInit() {
    if (count%21==0) {
        initheart() 
    }
    if (count>1000) {
        count=0
    }else{
        count++
    }
}

function animate() {
    clear(ctx_canvas_intro_heart)
    handelHeartInit()
    handelheart()
    hue+=0.2
    requestAnimationFrame(animate)
}
animate()