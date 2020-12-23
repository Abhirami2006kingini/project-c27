class Rope {
    constructor(body1,body2,xOffset){
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xOffset,y:0}
        }
      this.Rope = Constraint.create(options)
      this.xOffset = xOffset
      World.add(world,this.Rope)  
    }
    display(){
        var pointA=this.Rope.bodyA.position
        var pointB=this.Rope.bodyB.position
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y)
    }
}