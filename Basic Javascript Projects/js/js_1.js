//declaring a variable that gets set to the canvas from our html doc
var c = document.getElementById("myCan");
var ctx = c.getContext("2d");
//creating and defining a gradient background
var grd = ctx.createLinearGradient(0, 0, 700, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");


//implementing this background into the canvas
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 750, 375);

//creating some strokeText within the canvas
ctx.font = "100px Arial";
ctx.strokeStyle = "white";
ctx.strokeText("Bon Appétit", 125, 225);

function foodFunction() { //Declaring a function that will contain our switch statement for evaluating our favorite types of food!
    var foodOutput;
    var foods = document.getElementById("foodInput").value;
    var foodString = " is a great choice!";
    switch(foods) {
        case "Spaghetti":
            foodOutput = "Spaghetti" + foodString;
        break;
        case "Hamburger":
            foodOutput = "Hamburger" + foodString;
        break;
        case "Cheeseburger":
            foodOutput = "Cheeseburger" + foodString;
        break;
        case "Cereal":
            foodOutput = "Cereal" + foodString;
        break;
        case "Pancakes":
            foodOutput = "Pancakes" + foodString;
        break;
        case "Waffles":
            foodOutput = "Waffles" + foodString;
        break;
        default:
            foodOutput = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = foodOutput;
    var A = document.getElementsByClassName("guide");
    A[2].innerHTML = "Thank you for your selection!";
}