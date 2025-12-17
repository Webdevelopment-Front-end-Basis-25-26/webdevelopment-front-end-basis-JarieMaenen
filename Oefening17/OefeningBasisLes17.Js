
let volgendId = 3;

let taken = [
    {
        id: 1,
        tekst: "JavaScript oefening maken",
        prioriteit: "hoog",
        voltooid: false
    },
    {
        id: 2,
        tekst: "Boodschappen doen",
        prioriteit: "laag",
        voltooid: true
    }
];


//LES OPNAME OP TOLEDO!!!!!!

hertoonAlleTaken();

function toonTaak(taakObject) {
    var li = document.createElement("li");
    li.className = "taak-item";
    li.classList.add("prioriteit-" + taakObject.prioriteit);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taakObject.voltooid;
    checkbox.addEventListener("change", function () {
        toggleTaak(taakObject.id);
    });

    var span = document.createElement("span");
    span.textContent = taakObject.tekst;
    if (taakObject.voltooid) {
        span.style.textDecoration = "line-through";
    }

    var verwijderBtn = document.createElement("button");
    verwijderBtn.textContent = "x";
    verwijderBtn.className = "verwijder-btn";
    verwijderBtn.addEventListener("click", function () {
        verwijderTaak(taakObject.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(verwijderBtn);

    if (taakObject.voltooid) {
        document.getElementById("taken-lijst").appendChild(li);
    } else {
        document.getElementById("taken-lijst").insertBefore(li, document.getElementById("taken-lijst").children[1]);
    }
}

function hertoonAlleTaken() {
    var lijst = document.getElementById("taken-lijst");

    while (lijst.children.length > 1) {
        lijst.removeChild(lijst.lastChild);
    }

    taken.forEach(taak => {
        toonTaak(taak);
    });

    updateTeller();
}

function toggleTaak(taakId) {
    var taak = taken.find(t => t.id === taakId);
    taak.voltooid = !taak.voltooid;
    hertoonAlleTaken();
}

function verwijderTaak(taakId) {
    taken = taken.filter(t => t.id !== taakId);
    hertoonAlleTaken();
}

function updateTeller() {
    var nietVoltooide = taken.filter(t => !t.voltooid).length;
    document.getElementById("aantal").textContent = nietVoltooide;
}

document.getElementById("toevoegen-btn").addEventListener("click", () => {
    var taakTekst = document.getElementById("taak-input").value;
    var prioriteit = document.getElementById("prioriteit-select").value;

    if (taakTekst === "") {
        alert("Voer een taak in!");
        return;
    }

    var nieuweTaak = {
        id: volgendId,
        tekst: taakTekst,
        prioriteit: prioriteit,
        voltooid: false
    };

    taken.push(nieuweTaak);
    volgendId++;

    toonTaak(nieuweTaak);
    document.getElementById("taak-input").value = "";
    updateTeller();
});

document.getElementById("markeer-hoog-btn").addEventListener("click", () => {
    var hogeTaken = document.querySelectorAll(".prioriteit-hoog");

    hogeTaken.forEach(taak => {
        taak.classList.remove("gemarkeerd");
    });

    hogeTaken.forEach(taak => {
        // Markeer alle hoge prioriteit taken, ongeacht voltooid-status
        taak.classList.add("gemarkeerd");
    });
});

document.getElementById("verberg-voltooide-btn").addEventListener("click", () => {
    var voltooideCheckboxes = document.querySelectorAll("#taken-lijst input[type='checkbox']:checked");

    voltooideCheckboxes.forEach(checkbox => {
        var li = checkbox.parentElement;
        if (li.style.display === "none") {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
});