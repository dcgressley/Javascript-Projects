Y = "Michael";
Z = 1;
function getName() {
    X = "Sandy";
    document.getElementById("name").innerHTML = Y;
}

function otherName() {
    document.getElementById("otherName").innerHTML = X;
    console.log("The variable Y is local to the function getName and can't be used here unless the first function has run and defined it!");
}

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("greeting").innerHTML = "Good evening!";
    }
}

function ifStatement() {
    if(Z < 20) {
    Z+=1;
    }
    document.getElementById("ifStatement").innerHTML = Z;
}

function canBuy() {
    age=document.getElementById("age").value;
    if (age >= 21) {
        canbuy = "You are old enough to purchase alcohol!";
    }
    else {
        canbuy = "You are too young to purchase alcohol.";
    }
    document.getElementById("canBuy").innerHTML = canbuy;
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply= "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}
