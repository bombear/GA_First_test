function item(){
    this.pos=createVector(random(width), random(height));
    this.r=random(20,50);
    this.sides=floor(random(5,9));
    this.heading=PI;
    this.noise=[];
    for (var i=0;i<this.sides;i++){
        this.noise[i] = random(0.2,2);
    }
    
    this.gravity = 0.2;
    this.velocity = 0;
    this.rotateSpeed=0.1;
    this.momentumKept=0.7;
    
    
    this.render=function(){
        push();
        stroke(255);
        noFill();
        translate(this.pos.x,this.pos.y);
        rotate(this.heading)
        this.shape();
        pop();
    }
    
    this.shape = function() {
       beginShape(TRIANGLE_FAN);
        vertex(0,0);
         for (var i=0; i<this.sides+1;i++) {
            var angle= map(i,0,this.sides+1,0,TWO_PI)
            var r = this.r * this.noise[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x,y);
            }
        endShape();

    }
    
    this.fall = function(){
        this.pos.y +=this.velocity;
        this.velocity +=this.gravity;
        
        if (this.pos.y>height-this.r) {
            //this.pos.y=height;
            this.velocity*=-this.momentumKept;
            if(Math.abs(this.velocity)<0.5 && this.pos.y>height-this.r-20) {
                this.velocity=0;
            }
        }
    }
    
    this.rotate = function() {
        this.heading+=this.rotateSpeed;
        
        if(this.velocity==0){
            this.rotateSpeed*=0.98;
        }
        console.log(this.velocity,"",this.pos.y)
    }
    
    
    
    
}
    