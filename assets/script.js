




$(".search-button").on("click", function(event) {
    event.preventDefault();
    var city = $("#search-input").val();
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q={"+city+"}&limit=1&appid=77700be72a5fa60eecb9e44751616b78" ;

    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        //console.log(response)
        

        var lat=response[0].lat;
        var lon=response[0].lon;
        console.log(lat)
        console.log(lon)
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=2e29d353623540203dd5c954be6f0d7e" ;


        $.ajax({
            url: queryURL2,
            method: "GET"
          }).then(function(response) {
            console.log(response)
            
    
            
          });
      });
      console.log("test")
  });

