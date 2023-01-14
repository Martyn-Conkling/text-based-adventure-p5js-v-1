
const optObj = {
    frameRate: 30,
    
}


class SummoningCircle{
    constructor(sO){
        this.x = sO.x;
        this.y = sO.y;
        this.sl = sO.sl;
        this.halfSL = sO.sl/2;
        this.xShift = Math.sqrt(this.sl**2 - (this.halfSL)**2)
        this.x1 = this.x;
        this.y1 = this.y - this.sl;
        this.x2 = this.x + this.xShift;
        this.y2 = this.y - this.halfSL;
        this.x3 = this.x + this.xShift;
        this.y3 = this.y + this.halfSL;
        this.x4 = this.x;
        this.y4 = this.y + this.sl;
        this.x5 = this.x - this.xShift;
        this.y5 = this.y + this.halfSL;
        this.x6 = this.x - this.xShift;
        this.y6 = this.y - this.halfSL;

        this.circleDiameter = this.sl/6;

        // to save time typing potentially
        // someFunction(this.x1, this.y1);
        // someFunction(this.x2, this.y2);
        // someFunction(this.x3, this.y3);
        // someFunction(this.x4, this.y4);
        // someFunction(this.x5, this.y5);
        // someFunction(this.x6, this.y6);

        
    }
    updateCoordinates(sO){
        this.x = sO.x;
        this.y = sO.y;
        this.sl = sO.sl;
        this.halfSL = sO.sl/2;
        this.xShift = Math.sqrt(this.sl**2 - (this.halfSL)**2)
        this.x1 = this.x;
        this.y1 = this.y - this.sl;
        this.x2 = this.x + this.xShift;
        this.y2 = this.y - this.halfSL;
        this.x3 = this.x + this.xShift;
        this.y3 = this.y + this.halfSL;
        this.x4 = this.x;
        this.y4 = this.y + this.sl;
        this.x5 = this.x - this.xShift;
        this.y5 = this.y + this.halfSL;
        this.x6 = this.x - this.xShift;
        this.y6 = this.y - this.halfSL;

        this.circleDiameter = this.sl/6;
    }

    getCoordsArray(){
        let coordsArray =[ 
            {x: this.x1, y: this.y1},
            {x: this.x2, y: this.y2},
            {x: this.x3, y: this.y3},
            {x: this.x4, y: this.y4},
            {x: this.x5, y: this.y5},
            {x: this.x6, y: this.y6}
        ]
        return coordsArray;
    }

    getCoordsObj(){
        
        return {
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
            x3: this.x3,
            y3: this.y3,
            x4: this.x4,
            y4: this.y4,
            x5: this.x5,
            y5: this.y5,
            x6: this.x6,
            y6: this.y6
        }
    }

    show(){
        noFill()
        strokeWeight(2)
        //Hexagonal outline
        line(this.x1, this.y1, this.x2, this.y2);
        line(this.x2, this.y2, this.x3, this.y3);
        line(this.x3, this.y3, this.x4, this.y4);
        line(this.x4, this.y4, this.x5, this.y5);
        line(this.x5, this.y5, this.x6, this.y6);
        line(this.x6, this.y6, this.x1, this.y1);

        //Equalateral Triangles
        strokeWeight(2)
        line(this.x1, this.y1, this.x3, this.y3);
        line(this.x3, this.y3, this.x5, this.y5);
        line(this.x5, this.y5, this.x1, this.y1);
        strokeWeight(2)
        line(this.x6, this.y6, this.x2, this.y2);
        line(this.x2, this.y2, this.x4, this.y4);
        line(this.x4, this.y4, this.x6, this.y6);

        //Circles
        strokeWeight(1);
        circle(this.x1, this.y1, this.circleDiameter);
        circle(this.x2, this.y2, this.circleDiameter);
        circle(this.x3, this.y3, this.circleDiameter);
        circle(this.x4, this.y4, this.circleDiameter);
        circle(this.x5, this.y5, this.circleDiameter);
        circle(this.x6, this.y6, this.circleDiameter);

    }
}


let glyphSettings = {
    x: 600,
    y: 600,
   sl: 600
}

let shape = new SummoningCircle(glyphSettings);



function setup(){

    createCanvas(2400 , 2000);
    background(255);
    frameRate(optObj.frameRate)

}

function draw(){
     background(255);

    // if (mouseIsPressed) {
    //     fill(100,100,100);
    //     ellipse(mouseX, mouseY, 80, 80);
    //   }
    

    let obj = {
        x: mouseX,
        y: mouseY,
        sl: 300
    }
if(mouseIsPressed){
    shape.updateCoordinates(obj)
    console.log("redrew shape");
}
    shape.show()    
     
}