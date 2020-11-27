class Circle {
   constructor(x,y,radius) {
      var options = {
        isStatic : false,
         restitution: 1.0
     
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
     }   
      display(){
         var pos =this.body.position;
         
         push();
         translate(this.body.position.x, this.body.position.y);
         rectMode(CENTER);
         fill(255,0,255)
         ellipse(0,0,50,50);
         pop();
 
         
       }
     };