class Pandulam {
  constructor(bodyA,pointB){
      var option ={
          bodyA:bodyA,
          pointB :pointB,
          
  
      }
      this.pandulam =Constraint.create (option)
      this.pointB=pointB
      World.add(world,this.pandulam)
  }
  display() {
   var pointA= this.pandulam.bodyA.position
   var pointB=this.pointB
   strokeWeight(4);
   line(pointA.x,pointA.y,pointB.x,pointB.y)

  }
  
}