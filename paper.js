class Ball {

    constructor(x,y,r){
       
    
        var options={
        
        restitution : 0.6,
        density:1.2,
        friction:0.5
        }
        
        this.r=r;
        this.body=Bodies.circle(x,y,r,options) ;
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);

    }

    display(){
     var pos=this.body.position ;
     var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
       // ellipseMode(RADIUS)
       // ellipse(0,0,this.r,this.r);
        pop();
    }

}







