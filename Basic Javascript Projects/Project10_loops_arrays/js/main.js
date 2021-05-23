function callLoop() {
    X = 1;
    while (X <= 15) {
        X+=1;
        document.write("The number is " + (X-1) + "<br>");
    }
}

function forLoop() {
    listInst = ["Trumpet", "Oboe", "Keyboard", "Violin", "Xylophone"];
    write = "";
    for (Y=0; Y < listInst.length; Y++) {
        write = listInst[Y] + "<br>";
        document.write(write);
    }
}

function arrayFunction(Y) {
    sunPics = ["rising", "setting"];
    document.getElementById("array").innerHTML = "The sun is " + sunPics[Y];
}

function constant() {
    const dog = {name:"Brian", breed:"beagle", color:"Brown"};
    dog.age = "17";
    dog.color = "white";
    document.getElementById("dog").innerHTML = dog.name + " is a " + dog.color + " " + dog.breed + ".";
}

function letEx() {
    X = "Hello!<br>";
    document.write(X);
    {
        let X = "Okay.<br>"
        document.write(X);
    }
    document.write(X);
}

function getObject() {
    let cat = {
        name: "Lily ",
        breed: "American short hair",
        age: "13 year old ",
        personality: "playful ",
        description: function() {
            return this.name + "is a " + this.personality + this.age + this.breed + ".";
        }
    };
    document.getElementById("objectHolder").innerHTML = cat.description();
}