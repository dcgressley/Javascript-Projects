y = 1


function addTwo() {
    result = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + result;
}

function minusTwo() {
    sub = 3 - 1;
    document.getElementById("subtract").innerHTML = "3 - 1 = " + sub;
}

function multiplyTwo() {
    math = 2 * 4;
    document.getElementById("mult").innerHTML = "2 * 4 = " + math;
}

function divideTwo() {
    math = 12 / 3;
    document.getElementById("div").innerHTML = "12 / 3 = " + math;
}

function multExpression() {
    math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("lots").innerHTML = "1 plus 2, muliplied by 10, divided in half and then subtracted by 5 equals " + math;
}

function modulusOperator() {
    math = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + math;
}

function negationOperator() {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}

function addOne() {
    y++
    document.getElementById("num").innerHTML = y;
}

function minusOne() {
    y--
    document.getElementById("num").innerHTML = y;
}

window.alert(Math.random())