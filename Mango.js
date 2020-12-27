class Mango{
    constructor(x,y,r){

        var options = {            
            isStatic: true,
            restitution: 0,
            friction:1
              }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r
        this.image = loadImage("Plucking mangoes images/mango.png")
        World.add(world,this.body)

        
    }

    
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2)
        pop();

    }




}