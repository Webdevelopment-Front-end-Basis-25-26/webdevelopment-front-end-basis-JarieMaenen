//DEEL 1

const IngredientenArray1 = [];

const IngredientInput = document.getElementById("ingredientInput");
const showIngredientsText = document.getElementById("ingredientenResultaat");
const addButton = document.getElementById("addIngredient");
const showButton = document.getElementById("showIngredients");

addButton.onclick = function() {
    const value = IngredientInput.value.trim();
    if (value === "") {
        showIngredientsText.textContent = "Voer een ingrediënt in!";
        return;
    }

    
    let ingredientAanwezig = false;
    for (let i = 0; i < IngredientenArray1.length; i++) { //checkt of ingrediënt al bestaat
        if (IngredientenArray1[i].toLowerCase() === value.toLowerCase()) {
            ingredientAanwezig = true;
            break;
        }
    }

    if (ingredientAanwezig) {
        showIngredientsText.textContent = "Ingrediënt bestaat al!";
        return;
    }

    IngredientenArray1.push(value); //voegt dat toe aan de array
    showIngredientsText.textContent = value + " toegevoegd"; //toont dat het is toegevoegd
    IngredientInput.value = ""; //maakt het inputveld weer leeg
};

showButton.onclick = function() {
    if (IngredientenArray1.length === 0) {
        showIngredientsText.textContent = "Nog geen ingrediënten toegevoegd"; 
        return;
    }

    showIngredientsText.textContent = IngredientenArray1.length + " ingrediënt(en): " + IngredientenArray1.join(", ");
};                                                                                 //join zorgt voor de "," tussenin de waarden





//////////////////////


//DEEL 2


const PizzaArray2 = [];

const ToonPizza = document.getElementById("showPizzas");
const ShowTotal = document.getElementById("showTotal");
const FilterPizzas = document.getElementById("filterPizzas");

const PizzaResult = document.getElementById("pizzasResultaat");

const PizzaName = document.getElementById("pizzaNaam");
const PizzaPrice = document.getElementById("pizzaPrijs");
const PizzaNumber = document.getElementById("pizzaAantal");
const PizzaAdd = document.getElementById("addPizza");


PizzaAdd.onclick = function() {
   
    if (PizzaName.value.trim() === "" || PizzaPrice.value.trim() === "" || PizzaPrice.value.trim() === isNaN() || PizzaPrice.value.trim() < 0.01 || PizzaNumber.value.trim() < 1)

    {
        PizzaResult.textContent = "Voer alle velden correct in!";
        return;
    }
    else {			
        let pizza = 
        {
		naam: PizzaName.value,
		prijs: Number(PizzaPrice.value),
	    aantal: Number(PizzaNumber.value)
		};

        PizzaArray2.push(pizza);
        PizzaResult.textContent = "Pizza " + PizzaName.value + " toegevoegd!";
        PizzaName.value = "";
        PizzaPrice.value = "";
        PizzaNumber.value = "1";
    }

    PizzaArray2.push(pizza);
};

ToonPizza.onclick = function()
{
    if (PizzaArray2.length === 0) {
        PizzaResult.textContent = "Nog geen pizza's toegevoegd"; 
        return;
    }

    // Maak een tabel
    let tabelHTML = "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    
    // Header rij met eigenschap-namen + subtotaal
    tabelHTML += "<tr>";
    for (let eigenschap in PizzaArray2[0]) {
        tabelHTML += "<th>" + eigenschap + "</th>";
    }
    tabelHTML += "<th>Subtotaal</th>";
    tabelHTML += "</tr>";

    // Body: voor elke pizza een rij
    for (let i = 0; i < PizzaArray2.length; i++) {
        tabelHTML += "<tr>";
        let pizza = PizzaArray2[i];
        
        for (let eigenschap in pizza) {
            tabelHTML += "<td>" + pizza[eigenschap] + "</td>";
        }
        
        // Subtotaal: prijs * aantal
        let subtotaal = pizza.prijs * pizza.aantal;
        tabelHTML += "<td>" + subtotaal.toFixed(2) + "</td>";
        tabelHTML += "</tr>";
    }
    
    tabelHTML += "</table>";
    PizzaResult.innerHTML = tabelHTML;
};


ShowTotal.onclick = function()
{
    if (PizzaArray2.length === 0) {
        PizzaResult.textContent = "Voeg eerst pizza's toe!";
        return;
    }

    // Maak array met subtotalen (prijs * aantal) voor elke pizza met .map()
    let subtotalen = PizzaArray2.map(function(pizza) {
        return pizza.prijs * pizza.aantal;
    });

    // Bereken totaal van alle subtotalen met .reduce()
    let totaal = subtotalen.reduce(function(som, subtotaal) {
        return som + subtotaal;
    }, 0);

    // Hergebruik de functie om pizza's te tonen
    ToonPizza.onclick();

    PizzaResult.innerHTML += "<div class='totaal'>Totaal: €" + totaal.toFixed(2) + "</div>";
};


function toonPizzaTabel(pizzasArray) {
    
    let tabelHTML = "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    
    
    tabelHTML += "<tr>";
    for (let eigenschap in pizzasArray[0]) {
        tabelHTML += "<th>" + eigenschap + "</th>";
    }
    tabelHTML += "<th>Subtotaal</th>";
    tabelHTML += "</tr>";

    
    for (let i = 0; i < pizzasArray.length; i++) {
        tabelHTML += "<tr>";
        let pizza = pizzasArray[i];
        
        for (let eigenschap in pizza) {
            tabelHTML += "<td>" + pizza[eigenschap] + "</td>";
        }
        
        
        let subtotaal = pizza.prijs * pizza.aantal;
        tabelHTML += "<td>" + subtotaal.toFixed(2) + "</td>";
        tabelHTML += "</tr>";
    }
    
    tabelHTML += "</table>";
    PizzaResult.innerHTML = tabelHTML;
}

FilterPizzas.onclick = function () {
    let MinAantal = document.getElementById("minAantal");
    
    // Controleer of minAantal geldig is
    if (MinAantal.value.trim() === "" || Number(MinAantal.value) < 1) {
        PizzaResult.textContent = "Voer een geldig getal in!";
        return;
    }

    // Controleer of pizzas array leeg is
    if (PizzaArray2.length === 0) {
        PizzaResult.textContent = "Voeg eerst pizza's toe";
        return;
    }

    // Filter de array: behoud enkel pizza's waar aantal > minAantal
    let pizzafiltered = PizzaArray2.filter(function (pizza) {
        return pizza.aantal > Number(MinAantal.value);
    });

    // Controleer of gefilterde array leeg is
    if (pizzafiltered.length === 0) {
        PizzaResult.textContent = "Geen pizza's gevonden met minimum " + Number(MinAantal.value) + " stuks";
        return;
    }

    // Toon gefilterde pizza's in een tabel
    toonPizzaTabel(pizzafiltered);
};