

     var weatherHistory = [];
function displayWeatherInfo(monke){
    event.preventDefault();
    $("#today").empty();
    $("#forecast").empty();
    if (  $("#five-head").length==1 ) {
      $("#five-head").empty();
              
    }
    // var city = $("#search-input").val();
    // var city = $(this).attr("data-name");
    var city = monke;
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
            console.log(response.list[0].weather[0].id)
            //today weather
            var weatherIcon= $("<img>") 
            weatherIcon.css({"width": "50px","heigth": "50px"});  
            //different icons for weather
            var weatherCondition=response.list[0].weather[0].id;
              if(weatherCondition==800){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/01d@2x.png")
              }else if(weatherCondition==801){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/02d@2x.png")
              }else if(weatherCondition==802){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/03d@2x.png")
              }else if(weatherCondition>=803){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/04d@2x.png")
              }else if(weatherCondition>=200 && weatherCondition<=232){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
              }else if(weatherCondition>=300 && weatherCondition<=321){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
              }else if(weatherCondition>=500 && weatherCondition<=504){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
              }else if(weatherCondition>=520 && weatherCondition<=531){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
              }else if(weatherCondition>=511){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
              }else if(weatherCondition>=600 && weatherCondition<=622){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
              }else if(weatherCondition>=701 && weatherCondition<=781){
                weatherIcon.attr("src", "http://openweathermap.org/img/wn/50d@2x.png")
              }    
            var todayWeather=$("#today");
            var p1=$("<p>").text(response.city.name +" ("+ response.list[0].dt_txt.slice(0, -9)+")");
            p1.css({"font-weight": "bold","font-size":"30px"});
            var temp=response.list[0].main.temp-273.15;
            var p2=$("<p>").text("Temp: "+temp.toFixed(2)+"°C");
            var p3=$("<p>").text("Wind: "+response.list[0].wind.speed+" KPH");
            var p4=$("<p>").text("Humidity: "+response.list[0].main.humidity+"%");
            todayWeather.append(p1,p2,p3,p4)
            p1.append(weatherIcon)

            //five day forecast weather
            
            var fiveDayWeather=$("#forecast");
            var fiveHeader=$("<h4>").attr('id', 'five-head');;
            fiveHeader.text("5 day forecast:  ")
            $("#weather-section section:eq(0)").after(fiveHeader)
            console.log(fiveHeader.val().length)
            
            for(var i=7;i<response.list.length; i = i + 7){
            var weatherIcon2= $("<img>")   
            //different icons for weather
            var weatherCondition2=response.list[i].weather[0].id;
            var dayBlock=$("<div>");
            dayBlock.addClass("col mx-3");
            dayBlock.css("background-color","#19334d");
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
            if(weatherCondition2==800){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/01d@2x.png")
            }else if(weatherCondition2==801){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/02d@2x.png")
            }else if(weatherCondition2==802){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/03d@2x.png")
            }else if(weatherCondition2>=803){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/04d@2x.png")
            }else if(weatherCondition2>=200 && weatherCondition2<=232){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/11d@2x.png")
            }else if(weatherCondition2>=300 && weatherCondition2<=321){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
            }else if(weatherCondition2>=500 && weatherCondition2<=504){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/10d@2x.png")
            }else if(weatherCondition2>=520 && weatherCondition2<=531){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/09d@2x.png")
            }else if(weatherCondition2>=511){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
            }else if(weatherCondition2>=600 && weatherCondition2<=622){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/13d@2x.png")
            }else if(weatherCondition2>=701 && weatherCondition2<=781){
              weatherIcon2.attr("src", "http://openweathermap.org/img/wn/50d@2x.png")
            } 
            weatherIcon2.css({"width": "50px","heigth": "50px"});
            dayBlock.append(p1,weatherIcon2,p2,p3,p4)
            fiveDayWeather.append(dayBlock)
            }
            // 
          });
      });
      
     }
     
     function renderButtons() {
       $("#history").empty();
     
       for (var i = 0; i < weatherHistory.length; i++) {
     
         var a = $("<button>");
          a.addClass("weather-btn btn-secondary btn-block");
          a.attr("data-name", weatherHistory[i]);
          a.text(weatherHistory[i]);
          $("#history").append(a);
       }
     }
     


     $("#search-button").on("click", function(event) {
      
          var city = $("#search-input").val();
          console.log(city)
          weatherHistory.push(city);
          displayWeatherInfo($("#search-input").val());
          renderButtons();
          
        
         });
    $(document).on("click", ".weather-btn",function(event){
      displayWeatherInfo($(this).attr("data-name"));
    });
    console.log(weatherHistory)

     renderButtons();