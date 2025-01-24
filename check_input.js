// Báronovics Barnabás

// tag: str; num, min, max: number
// Returns true if input in incorrect
// There should be a span (called tag + _err) to write errors to
// Also enables and disables the button

// aram = armanam, gaz = smokey, viz = placcs, penz = IRA
function isInputCorrect(tag, min, max) {
    let num = document.getElementById(tag).value;
    if ("".match(num)) {
        document.getElementById(tag + "_err").innerHTML = "Meg kell adni egy értéket.";
        document.getElementById("detailed").disabled = true;
        return true;
    }else if (isNaN(Number(num))) {
        document.getElementById(tag + "_err").innerHTML = "A megadott értéknek számnak kell lennie.";
        document.getElementById("detailed").disabled = true;
        return true;
    } else if (num < min) {
        document.getElementById(tag + "_err").innerHTML = "A megadott érték túl alacsony. A legalacsonyabb megadható érték: " + min;
        document.getElementById("detailed").disabled = true;
        return true;
    } else if (num > max) {
        document.getElementById(tag + "_err").innerHTML = "A megadott érték túl magas. A legmagasabb megadható érték: " + max;
        document.getElementById("detailed").disabled = true;
        return true;
    } else {
        document.getElementById(tag + "_err").innerHTML = "";
        return false;
    }
}

function checkEverything() {
    let err = false;
    if (isInputCorrect("armanam", 0, 25000)) {
        document.getElementById("armanam" + "_kiir").value = "";
        document.getElementById("smokey" + "_kiir").value = "";
        document.getElementById("placcs" + "_kiir").value = "";
        document.getElementById("ossz" + "_kiir").value = " ";
        err = true;
    }
    if (isInputCorrect("smokey", 0, 500)) {
        document.getElementById("armanam" + "_kiir").value = "";
        document.getElementById("smokey" + "_kiir").value = " ";
        document.getElementById("placcs" + "_kiir").value = "";
        document.getElementById("ossz" + "_kiir").value = "";
        err = true;
    }
    if (isInputCorrect("placcs", 0, 20)) {
        document.getElementById("armanam" + "_kiir").value = "";
        document.getElementById("smokey" + "_kiir").value = "";
        document.getElementById("placcs" + "_kiir").value = "";
        document.getElementById("ossz" + "_kiir").value = "";
        err = true;
    }
    if (isInputCorrect("IRA", 6000, 22000)) {
        document.getElementById("armanam" + "_kiir").value = "";
        document.getElementById("smokey" + "_kiir").value = "";
        document.getElementById("placcs" + "_kiir").value = "";
        document.getElementById("ossz" + "_kiir").value = "";
        err = true;
    }
    if (!err) document.getElementById("detailed").disabled = false;
    return !err;
}
