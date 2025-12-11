let knop = document.querySelector("button");

knop.addEventListener("click", function () {
    let plaatsnaam = document.querySelector("input").value;
    if (plaatsnaam === "") {
        alert("Geef een plaatsnaam in aub!");
        return;
    }
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + plaatsnaam + "&lang=nl&units=metric&appid=9a158488037031bf4a773bec48fb7f49";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.weather[0].description);
            let weer = data.weather[0].description;

            let imgCode = data.weather[0].icon;
            let imgUrl = "https://openweathermap.org/img/w/" + imgCode + ".png";
            weerbericht = "<strong>" + plaatsnaam + ",BE </strong>" + data.main.temp + " graden " + weer + "<img src=" + imgUrl +">" + " " + data.wind.speed;

            document.getElementById("resultaat").innerHTML = weerbericht;
        });
});