var myFood = {
    vegetable : "carrot",
    fruit : "orange",
    drink : "water"
};

function myFunction(myObj) {
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood['fruit'];
    var drinkValue = myFood['drink'];
    return {
        vegetableValue,
         fruitValue, 
         drinkValue
        }
};

//only change code above this line 

console.log(myFunction(myFood)); // change this line 
module.exports = myFunction(myFood);