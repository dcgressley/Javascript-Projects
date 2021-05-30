var c = document.getElementById("myCan");
var ctx = c.getContext("2d");
ctx.font = "100px Arial";
ctx.strokeText("Bon Appétit", 125, 225);
function foodFunction() {
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