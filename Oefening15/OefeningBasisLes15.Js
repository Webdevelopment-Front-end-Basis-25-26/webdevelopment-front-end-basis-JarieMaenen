
//OEFENING 1

var promptText;
var promptText2;

const exerciseOneButton = document.getElementById("oefening1");
const tekstVeldGetal1 = document.getElementById("getal1");
const tekstVeldGetal2 = document.getElementById("getal2");
const resultaat = document.getElementById("resultaat1");

document.getElementById("oefening1").onclick = function()
{

    let getal1 = vraagGetal("Geef het 1e getal in:");
    let getal2 = vraagGetal("Geef het 2e getal in:");
    tekstVeldGetal1.textContent = getal1;
    tekstVeldGetal2.textContent = getal2;


    let teksVergelijkContent = vergelijkGetallen(getal1, getal2);
    resultaat.textContent = teksVergelijkContent;

};

function vraagGetal(boodschap)
{
//     do {
//        promptText = +prompt("Geef het 1e getal in:");
//     }
//     while (isNaN(promptText) || promptText == null || promptText == "");

//    getal1.textContent = promptText;

//     {
//     do {
//        promptText2 = +prompt("Geef het 2e getal in:");
// }
//     while (isNaN(promptText2) || promptText2 == null || promptText2 == "");

//      getal2.textContent = promptText2;
//     }

    do {
    promptText = prompt(boodschap);
    }
    while (isNaN(promptText) || promptText == null || promptText == "");
    return +promptText;

};


function vergelijkGetallen(getal1, getal2)
{   
    let teksVergelijkContent;
    resultaat.textContent = "";
    if(getal1 == getal2)
    {
        teksVergelijkContent = "Het eerste getal is gelijk aan het tweede getal."
    }

    else if(getal1 > getal2)
    {
        teksVergelijkContent = "Het eerste getal is groter dan het tweede getal."
    }
    else
    {
        teksVergelijkContent = "Het eerste getal is kleiner dan het tweede getal."
    }

    return teksVergelijkContent;
};

/////////////////////////

//OEFENING 2

const getalOef2 = document.getElementById("getal");
const resultaat2 = document.getElementById("resultaat2");

document.getElementById("oefening2").onclick = function()
{
    vraagGetalInBereik(1, 20);
}


function vraagGetalInBereik(getal1, getal2)
{


    promptText = +prompt("Geef een getal van " + getal1 + " tot " + getal2 + ":");

    if(promptText > getal2)
    {
        promptText = +prompt("Geef een getal van " + getal1 + " tot " + getal2 + ":");
    }

    getalOef2.textContent = promptText;


    genereerTafels(promptText, getal2);


}

function genereerTafels(promptText, getal2) 
{
    for(var counter =1; counter<=getal2; counter++)
    {
        var result = counter * promptText;
        resultaat2.innerHTML += counter + "*" + promptText + "=" + result + "<br>";
    }
}

//OEFENING 3

document.getElementById("oefening3").onclick = function()
{
    demonstreerVarVsLet();
};

function demonstreerVarVsLet() {
    let resultaatDiv = document.getElementById("resultaat3");
    resultaatDiv.innerHTML = "<h3>Verschil tussen var en let:</h3>";
 
 
    // Voorbeeld 1: Block scope
    resultaatDiv.innerHTML += "<strong>1. Block Scope:</strong><br>";
    if (true) {
        var varGetal = 10;
        let letGetal = 20;  //LET IS EEN LOCALE VARIABELE
    }
    resultaatDiv.innerHTML += "var buiten block: " + varGetal + "<br>";
   // resultaatDiv.innerHTML += "let buiten block:" + letGetal + "<br>"; 
    resultaatDiv.innerHTML += "let buiten block: niet toegankelijk (ReferenceError)<br><br>";
 
 
    // Voorbeeld 2: Loop scope probleem met var
    resultaatDiv.innerHTML += "<strong>2. Loop Scope Probleem:</strong><br>";
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("var i:", i); // Print altijd 3!
            resultaatDiv.innerHTML += "var i in timeout: " + i + "<br>"; // wordt pas geprint na timeout
        }, 100);
    }
    resultaatDiv.innerHTML += "var i na loop: " + i + "<br>";
 
 
    for (let j = 0; j < 3; j++) {
        setTimeout(function () {
            console.log("let j:", j); // Print 0, 1, 2
            resultaatDiv.innerHTML += "var j in timeout: " + j + "<br>"; // wordt pas geprint na timeout
        }, 100);
    }
   // resultaatDiv.innerHTML += "let j na loop:" + j +"<br>";  //J HEEFT GEEN WAARDE
    resultaatDiv.innerHTML += "let j na loop: niet toegankelijk (ReferenceError)<br><br>";
}

//OEFENING 4

document.getElementById("oefening4").addEventListener("click", function () {

    var tot = vraagGetalInBereik("Tot welk getal wil je FizzBuzz spelen? (1-100)", 1, 100);

    var resultaat = "";

    for (var i = 1; i <= tot; i++) {
        var waarde = getFizzBuzzWaarde(i);
        resultaat += i + " : " + waarde + "<br>";
    }

    document.getElementById("resultaat4").innerHTML = resultaat;
});


function getFizzBuzzWaarde(getal) {
    if (getal % 3 === 0 && getal % 5 === 0) {
        return "FizzBuzz";
    } else if (getal % 3 === 0) {
        return "Fizz";
    } else if (getal % 5 === 0) {
        return "Buzz";
    } else {
        return getal;
    }
}


//OEFENING 5

function isPriem(getal) {
    if (getal < 2) return false;
    if (getal === 2) return true;
    if (getal % 2 === 0) return false;

    for (var i = 3; i < getal; i += 2) {
        if (getal % i === 0) return false;
    }

    return true;
}


function toonPriemgetallen(van, tot) {

    var resultaat = "";
    var aantal = 0;

    for (var i = van; i <= tot; i++) {
        if (isPriem(i)) {
            if (aantal > 0) {
                resultaat += ", ";
            }
            resultaat += i;
            aantal++;
        }
    }

    return resultaat;
}

document.getElementById("oefening5").addEventListener("click", function () {

    var getal = vraagGetalInBereik("Geef een getal tussen 1 en 100:", 1, 100);

    var resultaat = "<strong>Getal: " + getal + "</strong><br>";

    if (isPriem(getal)) {
        resultaat += getal + " is een <span style='color: green;'>priemgetal</span>!<br><br>";
    } else {
        resultaat += getal + " is <span style='color: red;'>geen priemgetal</span>.<br><br>";
    }

    resultaat += "Priemgetallen van 2 tot " + getal + ":<br>";
    resultaat += toonPriemgetallen(2, getal);

    document.getElementById("resultaat5").innerHTML = resultaat;
});