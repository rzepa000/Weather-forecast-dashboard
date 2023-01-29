




$(".search-button").on("click", function(event) {
    event.preventDefault();
    var city = $("#search-input").val();
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q={"+city+"}&limit=1&appid=77700be72a5fa60eecb9e44751616b78" ;

    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {          
        var lat=response[0].lat;
        var lon=response[0].lon;
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=2e29d353623540203dd5c954be6f0d7e" ;
        $.ajax({
            url: queryURL2,
            method: "GET"
          }).then(function(response) {
            console.log(response)
            //today weather
            var todayWeather=$("#today");
            var p1=$("<p>").text(response.city.name +" ("+ response.list[0].dt_txt.slice(0, -9)+")");
            p1.css({"font-weight": "bold","font-size":"30px"});
            var temp=response.list[0].main.temp-273.15;
            var p2=$("<p>").text("Temp: "+temp.toFixed(2)+"°C");
            var p3=$("<p>").text("Wind: "+response.list[0].wind.speed+" KPH");
            var p4=$("<p>").text("Humidity: "+response.list[0].main.humidity+"%");
            todayWeather.append(p1,p2,p3,p4)
            //five day forecast weather
            var fiveDayWeather=$("#forecast");
            var fiveHeader=$("<h4>").text("5 day forecast:  ");
            $("#weather-section section:eq(0)").after(fiveHeader)
            for(var i=7;i<response.list.length; i = i + 7){
            var dayBlock=$("<div>");
            dayBlock.addClass("col mx-3");
            dayBlock.css("background-color","#19334d")
            var p1=$("<p>").text(response.list[i].dt_txt.slice(0, -9));
            p1.css("font-weight", "bold");
            p1.css("color", "white");
            p1.css("font-size","18px");
            var temp=response.list[i].main.temp-273.15;
            var p2=$("<p>").text("Temp: "+temp.toFixed(2)+"°C");
            p2.css("color", "white");
            var p3=$("<p>").text("Wind: "+response.list[i].wind.speed+" KPH");
            p3.css("color", "white");
            var p4=$("<p>").text("Humidity: "+response.list[i].main.humidity+"%");
            p4.css("color", "white");
            dayBlock.append(p1,p2,p3,p4)
            fiveDayWeather.append(dayBlock)
            }
            // 
          });
      });
     });

function displayWeatherInfo(){
    
    // $('.wind').text("Wind speed: "+response.wind.speed)
    // $('.humidity').text("Humidity: "+response.main.humidity)
    // var temp=response.main.temp-273.15;
    // $('.temp').text("Temperature: "+temp.toFixed(2))


}