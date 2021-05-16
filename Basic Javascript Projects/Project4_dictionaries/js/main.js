function dictionaryOne() { //defining a function that will create and handle our dictionary
    var Animal = {  //defining a variable and creating the dictionary that will be assigned to it
        Species: "Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //deleting the value in our dictionary assigned to the key Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //discplaying the value assigned to the key Sound on the screen
}