class Catapoult{

    constructor(poA, boB){

        var options = {
            
            pointA: poA,
            bodyB :boB,
            stiffness: 0.004,
            length: 10
            

        }
        this.catapoult = Constraint.create(options)
        this.pointA = poA
        this.bodyB = boB
        World.add(world,this.catapoult);



    }

    attach(body){
        this.catapoult.bodyB = body;
    }

    fly(){

        this.catapoult.bodyB=null
    }

    display(){
        
        if(this.catapoult.bodyB){
        var anchor1 =this.pointA
        var shot = this.bodyB.position

        strokeWeight(2);
        line(anchor1.x,anchor1.y,shot.x,shot.y)

        }


    }




}