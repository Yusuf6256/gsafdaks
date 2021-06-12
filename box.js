class Box {
    constructor(x, y) {
      var options = {
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;

      World.add(world, this.body);


    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);    
      rectMode(CENTER);
      fill(255);
      rect(0, 0, 20, 20);
      pop();
    }
  }