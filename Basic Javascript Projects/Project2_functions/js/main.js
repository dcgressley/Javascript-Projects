function greenTime() { //declaring and naming a function with no parameters
    var str = "This text"; //declaring, naming and assigning a value to a string
    str += " is green!"; //using the += operator to concatenate two strings into one
    var result = str.fontcolor("green"); //declaring, naming and assigning a string variable, as well as using a method to change its color
    document.getElementById("Green_Text").innerHTML = result; //displaying the variable result where the element with id "Green_Text" is
}