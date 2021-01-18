class bins {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0,
          'density':3.0,
          'friction':100,  
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      var angle
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  