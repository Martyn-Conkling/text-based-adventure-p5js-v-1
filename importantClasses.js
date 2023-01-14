
class Player{
    constructor(settingsObject){
        if (settingsObject){
           // traverse all of the settings properties and set the properties of the object to these settings 
        }
    }
}

class Story{
    constructor(){
        
    }
}

class SummoningCircle{
    constructor(sO){
        this.x = sO.x;
        this.y = sO.y;
        this.width = sO.width;
        this.height = sO.height ;
    }
    show(){
      line(this.x,this.y, this.x + this.width, this.y +this.height)
        
    }
}

let glyphSettings = {
    x: 50,
    y: 50,
    width: 120,
    height: 120
}

let shape = new SummoningCircle(glyphSettings);


// Major things I need
//UI 
// Text Input

// Text output

// Data for the descriptions, rooms, etc

//


this.coordPoints = {
    x1: this.x,
    y1: this.y - this.sl,
    x2: this.x + Math.sqrt(this.sl**2 - (this.halfSL)**2),
    y2: this.y - this.halfSL,
    x3: this.x + Math.sqrt(this.sl**2 - (this.halfSL)**2),
    y3: this.y + this.halfSL,
    x4: this.x,
    y4: this.y + this.sl,
    

}