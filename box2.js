class BOX2{
    constructor(x, y, width, height) {
        var options = {
            'isStatic' : false,
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        var angle = this.body.angle;
        if (this.body.speed > 3)
        {
          World.remove(world,this.body)
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          stroke(225);
          fill(225);
          translate(this.body.position.x, this.body.position.y,50,50);
          rect( 0, 0, 50,50);
          pop();
        }
        else
        {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(4);
        stroke("BLACK");
        fill(199,224,224);        
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
    }
  }