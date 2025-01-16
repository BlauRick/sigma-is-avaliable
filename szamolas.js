const aramDij=14.2; //áram éves
const emAramDij=15.08;
const aramLimit=1320;

const aramUpper=25000

const gazDij=85.06;
const emGazDij=650.87;
const gazLimit=149.91;

const gazUpper=500;

const alVizDij=179.95;
const vizDij=218.95;
const csDij=526.4;
const emVizDij=504.06;
const vizLimit=20;

const vizUpper=500;

const koltsegLower=6000;
const koltsegUpper=22000;

var aramInput, vizInput, gazInput, koltsegInput, aramEredmeny, vizEredmeny, gazEredmeny, osszEredmeny;


function minimum(n1,n2){
    if(n1<=n2){return n1;}
    if(n1>n2){return n2;}
}
function maximum(n1,n2){
    if(n1>=n2){return n1;}
    if(n1<n2){return n2;}
}

function szamolas(){
    

    koltsegInput=10000;
    aramInput=1500; //example values
    vizInput=21;
    gazInput=33;

    aramEredmeny=(aramDij*minimum(aramInput*12,aramLimit)+emAramDij*maximum(0,aramInput*12-aramLimit))/12;
    gazEredmeny=gazDij*minimum(gazInput,gazLimit)+emGazDij*maximum(0,gazInput-gazLimit);
    vizEredmeny=alVizDij+(vizDij+csDij)*minimum(vizInput,vizLimit)+(emVizDij+csDij)*maximum(0,vizInput-vizLimit);

    osszEredmeny=koltsegInput+aramEredmeny+gazEredmeny+vizEredmeny;

    document.getElementById("bruh").value=osszEredmeny;



}

var input_page = "";
var output_page = "<button onclick=\"load_input_page()\">back</button><br>";

function load_output_page() {
    input_page = document.getElementById("body").innerHTML;
    output_page = 
    document.getElementById("body").innerHTML = output_page;
}

function load_input_page() {
    document.getElementById("body").innerHTML = input_page;
}