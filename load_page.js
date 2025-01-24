// Báronovics Barnabás

let input_page = "";
let output_page = "<button onclick=\"load_input_page()\">back</button><br>";

function load_output_page() {
    input_page = document.getElementById("body").innerHTML;
    document.getElementById("body").innerHTML = output_page;
}

// Erases the output page
function load_input_page() {
    document.getElementById("body").innerHTML = input_page;
}