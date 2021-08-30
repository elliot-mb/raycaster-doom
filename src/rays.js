export default class Rays{

    constructor(){

        this.fov = Math.PI/3;
        this.instance = 10;
        this.rays = []; //rays are simple object with only a start and an end (a line segment)
        this.radius = 50;

    }

    update(heading, pos){

        let theta;

        for(let i = 0; i < this.instance; i++){

            theta = heading - (this.fov / 2) + ((this.fov / (this.instance - 1)) * i);

            this.rays[i] = { 
                sx: pos.x,
                sy: pos.y,
                tx: Math.cos(theta) * this.radius + pos.x,
                ty: Math.sin(theta) * this.radius + pos.y
            };
        }

    }    

    draw(ctx){

        this.rays.forEach(ray => {

            ctx.beginPath();
            ctx.moveTo(ray.sx, ray.sy);
            ctx.lineTo(ray.tx, ray.ty);
            ctx.stroke();

        });

    }

}