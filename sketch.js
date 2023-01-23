//import {gameStateObject} from './importantClasses';

let playerTextInput;
let playerSubmitButton;
let submittedInput;

const storyData ={

    textCommandLog: [],
    
    commandLineText: [],
}

const optObj = {
    frameRate: 10,
    canvasWidth: 1900,
    canvasHeight: 1000
    
}


const gameStateObject = {
    currentScene: 0,
    gameOver: false,
    startingRoom: 0,
    currentRoomID: 0,
    storyData : {},
    deathCounter: 0,
    seed: 999,
    currentZone: "A",
    zoneFlags:{
        zombiesSummoned: false,
        dragonAwake: false,
    },

}

function loadDescriptionText(object, id){
    
    object[id]["descriptionText"].forEach(element => {
        storyData.commandLineText.push(element);   
    });

}

function loadStartMenu(){
    console.log("loadStartMenu Ran");
    removeElements();
    gameStateObject.currentScene = 0;
    let newGameButton = createButton('New Game');
    newGameButton.position((optObj.canvasWidth/2), optObj.canvasHeight/2 );
    newGameButton.mousePressed(startGame);
    noloop();

    

}



function startGame(){
    
    gameStateObject.currentScene = 1;
    createUI1();
    loadDescriptionText(hardCodedRoomData, 0)
}



function submitTextInput(){
    submittedInput = playerTextInput.value();
    console.log(playerTextInput.value());
    playerTextInput.value("");
    storyData.textCommandLog.push(submittedInput);
    storyData.commandLineText.push(submittedInput);
    //console.log(storyData.textCommandLog);

}

function createUI1(){
    //Clears the sketch of created elements
    removeElements();
    console.log("Create UI1 ran");
    playerTextInput = createInput('');

    playerTextInput.size(optObj.canvasWidth/2);
    playerTextInput.position(0, optObj.canvasHeight-playerTextInput.height);
    //console.log(playerTextInput.width, playerTextInput.height);

    playerSubmitButton = createButton('Enter');
    playerSubmitButton.position((optObj.canvasWidth/2)+1, optObj.canvasHeight- playerSubmitButton.height );
    playerSubmitButton.mousePressed(submitTextInput);
}

function triggerGameOver(){
    gameStateObject.gameOver = true;
}

function gameOverScreen(){

}


// Test data for testing functionality of engine
// All sizes are in meters
const hardCodedRoomData = {
    0: {
        roomShape: "square",
        roomPerimeter: [4,4,4,4],
        descriptionText: ["You awake in a cave.", 
                        "You can see an exit to the north.", 
                        "There is a bottle filled with a green glowing liquid on the ground in front of you.", 
                        "What do you do?"],
        roomItems: {
                    "health-potion":{
                        description: "It looks like a potion that you should drink when you are hurt or dying.",

                        },
                    },
        hiddenRoomItems: null,

        exits: [{"north":1},],
        hiddenExits: null,
        
        },
    1: {
        roomShape: "square",
        roomPerimeter: [4,4,4,4],
        descriptionText: ["It's a room.", "There is a door to the north and the south.", "What do you do?"],
        enterRoomTriggers: null,
        roomItems: {
                    "rock":{
                        description: "It's a small rock weighing about 0.5kgs, you can throw it stuff.",

                        },
                    },
        hiddenRoomItems: null,

        exits: [{"north":2},{"south":0}],
        hiddenExits: null,

    },
    2: {
        roomShape: "square",
        roomPerimeter: [4,4,4,4],
        descriptionText: ["You win the game, congrats adventurer"],
        enterRoomTriggers: triggerGameOver(),
        roomItems: null,
        hiddenRoomItems: null,

        exits: [{south: 1}],
        hiddenExits: null,

    }
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
   sl: 300
}

let shape = new SummoningCircle(glyphSettings);

// cool beans 
 // if(mouseIsPressed){
    //     shape.updateCoordinates({x: mouseX, y: mouseY, sl: 300});
    //     console.log("redrew shape");
    // }

    // shape.show()    
function showLastTwentyLines(){
    let last20 = 20;
    for (let i = storyData.commandLineText.length-1; i > -1 && i > storyData.commandLineText.length - 21; i--){
       text(storyData.commandLineText[i], 10, (20* last20)+500 );
       last20--; 
    }
}

function sceneOne(){
    showLastTwentyLines()

}
     
function runScene(){
    

    // switch(gameStateObject.currentScene){
    //     case 0:
    //         loadStartMenu();
        
    //         break;
    //     case 1:
    //         sceneOne();
    //         break;    
    // };

    const runSceneObject ={
        0: loadStartMenu(),
        1: sceneOne(),
    }

    runSceneObject[gameStateObject.currentScene];

}


function setup(){

    createCanvas(optObj.canvasWidth , optObj.canvasHeight);
    background(255);
    frameRate(optObj.frameRate)
   


}

function draw(){
     background(255);
        runScene();

   
}