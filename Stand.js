class Stand {
    constructor(x,y,width,height){
var options={
    isStatic: true
}

        
 this.body= Bodies.rectangle(x,y,width,height,options)
 this.width=width
 this.height= height
 
 World.add(myWorld,this.body)
 
    }
display(){
    var pos = this.body.position
    rectMode(CENTER)
    fill("black")
    rect(550,100,this.width,this.height)
}

}