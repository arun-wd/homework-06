$("#button-addon2").on("click", function() {
    var apiKey = "cf311af30723358fb4415f7c72ba9042";
    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    var indexUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=";
    var fiveUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    var cityName = $(".form-control").val();
    $(".cityInfo").empty();
    $("#textOne").empty();
    $("#textTwo").empty();
    $("#textThree").empty();
    $("#textFour").empty();
    $("#textFive").empty();
    

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
            
            $.ajax({
                url: fiveUrl + cityName + "&appId=" + apiKey,
                method: "GET"
            }).then(function (results) {
                console.log(results)
                
                var dayOne = $("<div>");
                var dateOne = results.list[2].dt_txt;
                var pSeven = $("<p>").text(dateOne);
                dayOne.append(pSeven);
                var tempOne = (results.list[2].main.temp - 273.15) * 1.80 + 32;
                var pEight = $("<p>").text("Temp: " + tempOne);
                dayOne.append(pEight);
                var humidityOne = results.list[2].main.humidity;
                var pNine = $("<p>").text("Humidity: " + humidityOne);
                dayOne.append(pNine);
                $("#textOne").append(dayOne);

                var dayTwo = $("<div>");
                var dateTwo = results.list[10].dt_txt;
                var pTen = $("<p>").text(dateTwo);
                dayTwo.append(pTen);
                var tempTwo = (results.list[10].main.temp - 273.15) * 1.80 + 32;
                var pEleven = $("<p>").text("Temp: " + tempTwo);
                dayTwo.append(pEleven);
                var humidityTwo = results.list[10].main.humidity;
                var pTwelve = $("<p>").text("Humidity: " + humidityTwo);
                dayTwo.append(pTwelve);
                $("#textTwo").append(dayTwo);

                var dayThree = $("<div>");
                var dateThree = results.list[18].dt_txt;
                var pThirteen = $("<p>").text(dateThree);
                dayThree.append(pThirteen);
                var tempThree = (results.list[18].main.temp - 273.15) * 1.80 + 32;
                var pFourteen = $("<p>").text("Temp: " + tempThree);
                dayThree.append(pFourteen);
                var humidityThree = results.list[18].main.humidity;
                var pFifteen = $("<p>").text("Humidity: " + humidityThree);
                dayThree.append(pFifteen);
                $("#textThree").append(dayThree);

                var dayFour = $("<div>");
                var dateFour = results.list[26].dt_txt;
                var pSixteen = $("<p>").text(dateFour);
                dayFour.append(pSixteen);
                var tempFour = (results.list[26].main.temp - 273.15) * 1.80 + 32;
                var pSeventeen = $("<p>").text("Temp: " + tempFour);
                dayFour.append(pSeventeen);
                var humidityFour = results.list[26].main.humidity;
                var pEighteen = $("<p>").text("Humidity: " + humidityFour);
                dayFour.append(pEighteen);
                $("#textFour").append(dayFour);

                var dayFive = $("<div>");
                var dateFive = results.list[34].dt_txt;
                var pNineteen = $("<p>").text(dateFive);
                dayFive.append(pNineteen);
                var tempFive = (results.list[34].main.temp - 273.15) * 1.80 + 32;
                var pTwenty = $("<p>").text("Temp: " + tempFive);
                dayFive.append(pTwenty);
                var humidityFive = results.list[34].main.humidity;
                var pTwentyone = $("<p>").text("Humidity: " + humidityFive);
                dayFive.append(pTwentyone);
                $("#textFive").append(dayFive);

            });
        });
});