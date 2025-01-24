// Báronovics Barnabás

// tag: str; num, min, max: number
// Returns true if input in incorrect
// There should be a span (called tag + _err) to write errors to
// Also enables and disables the button
function isInputCorrect(tag, min, max) {
    let num = document.getElementById(tag).value;
    if ("".match(num)) {
        document.getElementById(tag + "_err").innerHTML = "Meg kell adni egy értéket.";
        document.getElementById("detailed_count").disabled = false;
        return true;
    }else if (isNaN(Number(num))) {
        document.getElementById(tag + "_err").innerHTML = "A megadott értéknek számnak kell lennie.";
        document.getElementById("detailed_count").disabled = false;
        return true;
    } else if (num < min) {
        document.getElementById(tag + "_err").innerHTML = "A megadott érték túl alacsony. A legalacsonyabb megadható érték: " + min;
        document.getElementById("detailed_count").disabled = false;
        return true;
    } else if (num > max) {
        document.getElementById(tag + "_err").innerHTML = "A megadott érték túl magas. A legmagasabb megadható érték: " + max;
        document.getElementById("detailed_count").disabled = false;
        return true;
    } else {
        document.getElementById(tag + "_err").innerHTML = "";
        return false;
    }
}

function checkEverything() {
    if (isInputCorrect("aram", 0, 25000)) {
        document.getElementById("aram" + "_kiir").innerHTML = "";
        document.getElementById("gaz" + "_kiir").innerHTML = "";
        document.getElementById("viz" + "_kiir").innerHTML = "";
        document.getElementById("ossz" + "_kiir").innerHTML = "";
    }
    if (isInputCorrect("gaz", 0, 500)) {
        document.getElementById("aram" + "_kiir").innerHTML = "";
        document.getElementById("gaz" + "_kiir").innerHTML = "";
        document.getElementById("viz" + "_kiir").innerHTML = "";
        document.getElementById("ossz" + "_kiir").innerHTML = "";
    }
    if (isInputCorrect("viz", 0, 30)) {
        document.getElementById("aram" + "_kiir").innerHTML = "";
        document.getElementById("gaz" + "_kiir").innerHTML = "";
        document.getElementById("viz" + "_kiir").innerHTML = "";
        document.getElementById("ossz" + "_kiir").innerHTML = "";
    }
    if (isInputCorrect("penz", 6000, 22000)) {
        document.getElementById("aram" + "_kiir").innerHTML = "";
        document.getElementById("gaz" + "_kiir").innerHTML = "";
        document.getElementById("viz" + "_kiir").innerHTML = "";
        document.getElementById("ossz" + "_kiir").innerHTML = "";
    }
}