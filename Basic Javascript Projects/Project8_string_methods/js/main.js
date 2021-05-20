function concat() {
    part1 = "These all";
    part2 = " come together";
    part3 = " to form";
    part4 = " a whole";
    part5 = " sentence!";
    allTogether = part1.concat(part2, part3, part4, part5);
    document.getElementById("concat").innerHTML = allTogether;
}

function slice() {
    whole = "An apple a day keeps the doctor away!"
    part = whole.slice(25, 31);
    document.getElementById("slice").innerHTML = part;
}

function stringMethod() {
    X = 193;
    document.getElementById("numToString").innerHTML = X.toString();
}

function precisionMethod() {
    X = 3.14159265358979;
    document.getElementById("precision").innerHTML = X.toPrecision(3);
}