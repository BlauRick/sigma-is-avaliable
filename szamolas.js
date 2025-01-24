/*aram id =armanam
viz id = placcs
gaz id = smokey
kozos koltseg id = IRA
*/

const aramDij = 14.2; //áram éves
const emAramDij = 15.08;
const aramLimit = 1320;

const aramUpper = 25000

const gazDij = 85.06;
const emGazDij = 650.87;
const gazLimit = 149.91;

const gazUpper = 500;

const alVizDij = 179.95;
const vizDij = 218.95;
const csDij = 526.4;
const emVizDij = 504.06;
const vizLimit = 20;

const vizUpper = 500;

const koltsegLower = 6000;
const koltsegUpper = 22000;

var aramInput, vizInput, gazInput, koltsegInput, aramEredmeny, vizEredmeny, gazEredmeny, osszEredmeny;


function minimum(n1, n2) {
    if (n1 <= n2) { return n1; }
    if (n1 > n2) { return n2; }
}
function maximum(n1, n2) {
    if (n1 >= n2) { return n1; }
    if (n1 < n2) { return n2; }
}

function szamolas() {


    koltsegInput = document.getElementById("IRA").value-0;
    aramInput = document.getElementById("armanam").value-0;
    vizInput = document.getElementById("placcs").value-0;
    gazInput = document.getElementById("smokey").value-0;

    aramEredmeny = (aramDij * minimum(aramInput * 12, aramLimit) + emAramDij * maximum(0, aramInput * 12 - aramLimit)) / 12;
    gazEredmeny = gazDij * minimum(gazInput, gazLimit) + emGazDij * maximum(0, gazInput - gazLimit);
    vizEredmeny = alVizDij + (vizDij + csDij) * minimum(vizInput, vizLimit) + (emVizDij + csDij) * maximum(0, vizInput - vizLimit);

    osszEredmeny = koltsegInput + aramEredmeny + gazEredmeny + vizEredmeny;

    document.getElementById("ossz_kiir").value = osszEredmeny;



}

var input_page = "";
var output_page = "<button onclick=\"load_input_page()\">back</button><br>";

function load_output_page() {
    input_page = document.getElementById("body").innerHTML;
    output_page +=
    "<table>" +
        "<tr>" +
            "<th></th>" +
            "<th>Egyéb díjak</th>" +
            "<th>Kedvezményes díjak</th>"+
            "<th>Emelt díjak</th>" +
            "<th>Alap Költség</th>" +
            "<th>Emelt költség</th>" +
            "<th>Összesen</th>" +
        "</tr>" +
        "<tr>" +
            "<th>Áram</th>" +
            "<td> - </td>" +
            "<td>" + aramDij + "Ft/kWh</td>" +
            "<td>" + emAramDij + "Ft/kWh (\\>" + aramLimit +" kWh)</td>"+
            "<td>" + (aramDij*minimum(aramInput*12,aramLimit))/12 + " Ft</td>"+
            "<td>" + (emAramDij*maximum(0,aramInput*12-aramLimit))/12 + " Ft</td>"+
            "<td>" + aramEredmeny + " Ft</td>"+
        "</tr>" +
            "<th>Gáz</th>" +
            "<td> - </td>" +
            "<td>" + gazDij + "Ft/m³</td>" +
            "<td>" + emGazDij + "Ft/m³ (\\>" + gazLimit +" m³)</td>"+
            "<td>" + gazDij * minimum(gazInput, gazLimit) + " Ft</td>"+
            "<td>" + emGazDij * maximum(0, gazInput - gazLimit) + " Ft</td>"+
            "<td>" + gazEredmeny + " Ft</td>"+
        "</tr>" +
        "</tr>" +
            "<th>Víz</th>" +
            "<td>Alapdíj: " + alVizDij + " Ft</td>" +
            "<td>" + vizDij+csDij + "Ft/m³</td>" +
            "<td>" + emVizDij+csDij + "Ft/m³ (\\>" + vizLimit +" m³)</td>"+
            "<td>" + (vizDij + csDij) * minimum(vizInput, vizLimit) + " Ft</td>"+
            "<td>" + (emVizDij + csDij) * maximum(0, vizInput - vizLimit) + " Ft</td>"+
            "<td>" + vizEredmeny + " Ft</td>"+
        "</tr>" +
    "</table><br>" + 
    "Havi költség: " + koltsegInput + " Ft<br>" + 
    "Teljes összeg: " + osszEredmeny + "Ft";


    document.getElementById("body").innerHTML = output_page;
    output_page = "<button onclick=\"load_input_page()\">back</button><br>";
}

function load_input_page() {
    document.getElementById("body").innerHTML = input_page;
}
