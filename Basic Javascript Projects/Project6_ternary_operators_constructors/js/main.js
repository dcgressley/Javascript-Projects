var counter = 1;


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function iPhone(Model, Data, Color) {
    this.iPhone_Color = Color;
    this.iPhone_Data = Data;
    this.iPhone_Model = Model;
}
var Dan = new iPhone("7", "124GB", "Red");
var Chandler = new iPhone("8", "64GB", "Blue");

function newFunction(Name) {
    document.getElementById("New_and_This").innerHTML =
    "Dan has a " + Dan.iPhone_Color + " iPhone " + Dan.iPhone_Model + " that has " +
    Dan.iPhone_Data + " of storage.";
}

function outer() {
    document.getElementById("nestedFunction").innerHTML = count();
    function count() {
        function plusOne() {counter += 1;}
        plusOne();
        return counter;
    }
}