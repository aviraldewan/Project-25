class Paper
{
    constructor(x,y)
    {
        var options={
            isStatic: false,
            restitution: 0,
            friction: 0,
            density: 1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.width = 30;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
        pop();
    }
}