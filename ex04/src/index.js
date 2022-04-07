// only change code below this line 
var players = {
    7 : "Muahmed Besic",
    10 : "Miralem Pjanic",
    11 : "Edin Dzeko"
};

function myFunction(myObj) {
    var playerNumber = 10;
    var player = myObj[playerNumber];
    return player;
}

//only change code above this line 

console.log(myFunction(players)); // change this line 
module.exports ={ players, myFunction};