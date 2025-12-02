let scorerood = 0;
let scoreblauw = 0;

const scoreRood = document.getElementById("scoreRood");
const scoreBlauw = document.getElementById("scoreBlauw");

const scoreRoodGiven = document.getElementById("valueRood");
const scoreBlauwGiven = document.getElementById("valueBlauw");


document.getElementById("btnRoodPlus1").onclick = function(){
    scorerood += 1;
    scoreRood.textContent = scorerood;
};

document.getElementById("btnRoodPlus3").onclick = function(){
    scorerood += 3;
    scoreRood.textContent = scorerood;
};

document.getElementById("btnBlauwPlus1").onclick = function(){
    scoreblauw += 1;
    scoreBlauw.textContent = scoreblauw;
};

document.getElementById("btnBlauwPlus3").onclick = function(){
    scoreblauw += 3;
    scoreBlauw.textContent = scoreblauw;
};

document.getElementById("btnResetScores").onclick = function(){
    scoreblauw = 0;
    scorerood = 0;

    scoreRood.textContent = scorerood;
    scoreBlauw.textContent = scoreblauw;
};

document.getElementById("updateRood").onclick = function(){
    const scoreRoodUpdated = new Number(scoreRoodGiven.value);
    scorerood = scoreRoodUpdated ;

    scoreRood.textContent = scorerood;
};

document.getElementById("updateBlauw").onclick = function(){
    const scoreBlauwUpdated = new Number(scoreBlauwGiven.value);
    scoreblauw = scoreBlauwUpdated ;

    scoreBlauw.textContent = scoreblauw;
};

document.getElementById("btnRood").onclick = function(){

    document.getElementById("kleurBox").style.backgroundColor = "#FF0000";

};

document.getElementById("btnBlauw").onclick = function(){

    document.getElementById("kleurBox").style.backgroundColor = "#0000FF";

};

document.getElementById("btnGroen").onclick = function(){

    document.getElementById("kleurBox").style.backgroundColor = "#008000";

};

document.getElementById("kleurKiezer").oninput = function(){

    document.getElementById("kleurBox").style.backgroundColor = document.getElementById("kleurKiezer").value;

};

const naam = document.getElementById("naam");
const voornaam = document.getElementById("voornaam");
const geboortedatum = document.getElementById("geboortedatum");
const leeftijdbericht = document.getElementById("leeftijdBericht");


document.getElementById("btnBericht").onclick = function(){

    const geboorteDatum = new Date (geboortedatum.value);
    const geboorteJaar = geboorteDatum.getFullYear();

    const huidigJaar = new Date().getFullYear();

    const leeftijd = huidigJaar - geboorteJaar;

    leeftijdbericht.textContent = "Hallo " + voornaam.value + naam.value + " je wordt dit jaar " + leeftijd + " jaar oud";
};

document.getElementById("events").onmouseover = function(){
    document.getElementById("resultaat").textContent = "De box werd betreden";
    document.getElementById("box").style.backgroundColor = "#008000";

};

document.getElementById("events").onmouseleave = function(){
    document.getElementById("resultaat").textContent = "De box werd verlaten";
    document.getElementById("box").style.backgroundColor = "#FF0000";
};

document.getElementById("box").onmousedown = function(){
    document.getElementById("box").style.border = "5px solid #000000";
};

document.getElementById("box").onmouseup = function(){
    document.getElementById("box").style.border = "none";
};