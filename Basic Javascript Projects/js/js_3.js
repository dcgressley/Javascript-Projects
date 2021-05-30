function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is from the show " + character.innerHTML + "!");
}