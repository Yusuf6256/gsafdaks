const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

var object1,object2

var count=0

var edges
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,200)


    ground = new Ground(600,displayHeight/1.1+50,400,200)

    stand = new Ground (1000,550,100,20)

    stand1 = new Ground (600, 590, 100, 20)

    stand2 = new Ground (800,500, 100, 20)

    stand3 = new Ground (700,450, 100, 20)

    stand4 = new Ground (890,400, 100, 20)

    stand5 = new Ground (600,350, 100, 20)

    stand6 = new Ground (700, 225, 100, 20)

    
    winStand = new Ground (800,100,100,20)
    

    invisibleGround = new Ground(displayWidth/4-600, displayHeight/1.2+160, 2000000,20)

    
}
    function draw(){
        background(0);
        Engine.update(engine);
        box1.display();
        ground.display();

        //visible stands
        stand3.display();
        stand4.display();
        stand5.display();

        textSize(42)
        fill('green')
        text("There are four stands find them if you find them all you win",300,50)

        if(isTouching(box1,stand1))
        {
            stand1.fill("brown")
        }
        


        
        fill('yellow')
        winStand.display();
        

    }
    function keyPressed(){
        
        //control the box
        if (keyCode===39)
        {
            
            Matter.Body.setVelocity(box1.body,{x:1.3,y:0})
            
        }

        if (keyCode===37)
        {
            
            Matter.Body.setVelocity(box1.body,{x:-1.3,y:0})
            
        }

        if (keyCode===38)
        {
            
            Matter.Body.setVelocity(box1.body,{x:0,y:-8})
            count = count+1
            console.log(count)
            
            if (count === 3)
            {
                
                Matter.Body.setVelocity(box1.body,{x:0,y:0})
                count=0
                console.log(count)
            }
        }
    }