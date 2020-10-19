class Ball {
    constructor(x, y, width, height) {
      var options = {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
      }
      this.body = Bodies.ellipse(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x, pos.y, this.width, this.height);
      
    }
  }