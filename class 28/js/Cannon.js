class Cannon {
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }
    display(){
        console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW) && this.angle < 0.40){
            this.angle += 0.02;
        }
        if(keyIsDown(LEFT_ARROW) && this.angle > -1.45){
            this.angle -= 0.02
        }

        fill("grey");
        push();

        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20,this.width,this.height);

        pop();

        arc(this.x - 30, this.y + 80, 160,230,PI, TWO_PI);
        noFill();
    }
}