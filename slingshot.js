class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            lenght:20,
          }
           this.Sling=  Matter.Constraint.create(options)
          World.add(world, this.Sling);
    }
    display(){
    var pointA=this.Sling.bodyA.position
    var pointB=this.Sling.bodyB.position
    line( pointA.x,pointA.y,pointB.x,pointB.y);
    }
}