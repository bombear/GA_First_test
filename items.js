function item(){
    this.pos=createVector(random(width), random(height));
    this.r=random(20,50);
    this.sides=floor(random(5,15));
    this.noise=[];
    for (var i=0;i<this.sides;i++){
        this.noise[i] = random(0.7,1.3);
    }
    
    this.gravity = 0.1;
    this.velocity = 0;
    
    
    this.render=function(){
        push();
        stroke(255);
        noFill();
        translate(this.pos.x,this.pos.y);
        //ellipse(0,0,this.r*2);
        beginShape();
        for (var i=0; i<this.sides;i++) {
            var angle= map(i,0,this.sides,0,TWO_PI)
            var r = this.r * this.noise[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x,y);
            }
        endShape(CLOSE);
        pop();
    }
    
    this.fall = function(){
        this.pos.y =this.pos.y + this.velocity;
        this.velocity = this.velocity + this.gravity;
        
        if (this.pos.y>height-this.r) {
            //this.pos.y=height;
            this.velocity=-this.velocity*0.7;
        }
    }
    
    
}
    