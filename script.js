$("#button-addon2").on("click", function() {
    var apiKey = "cf311af30723358fb4415f7c72ba9042";
    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    var indexUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=";
    var cityName = $(".form-control").val();

        $(document).ready(function () {
            $("#currentDay").text(moment().format("dddd, MMMM Do"));
            $.ajax({
                url: baseUrl + cityName + "&appId=" + apiKey,
                method: "GET"
            }).then(function (results) {
                console.log(results);
                var currentDiv = $("<div class='weather'>");
                var city = results.name;
                var pOne = $("<p>").text("City: " + city);
                currentDiv.append(pOne);
                var icon = results.weather.icon;
                var pTwo = $("<p>").text(JSON.stringify(icon));
                currentDiv.append(pTwo);
                var tempF = (results.main.temp - 273.15) * 1.80 + 32;
                var pThree = $("<p>").text("Temp: " + tempF);
                currentDiv.append(pThree);
                var humidity = results.main.humidity;
                var pFour = $("<p>").text("Humidity: " + humidity);
                currentDiv.append(pFour);
                var wind = results.wind.speed;
                var pFive = $("<p>").text("Wind Speed: " + wind);
                currentDiv.append(pFive);
                $(".cityInfo").append(currentDiv);
                var lat = results.coord.lat;
                var lon = results.coord.lon;
                $.ajax({
                    url: indexUrl + apiKey + "&lat=" + lat + "&lon=" + lon, 
                    method: "GET"
                }).then(function (results) {
                    console.log(results);
                    var index = results.value;
                    var pSix = $("<p>").text("UV Index: " + index);
                    currentDiv.append(pSix);
                });
            });
        });
    });