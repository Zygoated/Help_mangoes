class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.chai = Constraint.create(options);
        World.add(world, this.chai);
    }

    display(){
        if (this.chai.bodyA){
            var pointA = this.chai.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }
    fly(){
        this.chai.bodyA = null;
    }
}