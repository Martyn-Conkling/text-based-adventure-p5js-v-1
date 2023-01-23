
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




// Major things I need
//UI 
// Text Input

// Text output

// Data for the descriptions, rooms, etc

//

const gameStateObject = {
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
    }

}

function triggerGameOver(){
    gameStateObject.gameOver = true;
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


