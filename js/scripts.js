// Geolocation Check
if ( 'geolocation' in navigator ) {
  
  $('.geo').show();
  $('.no-geo').hide();
  
} else {
  
  $('.geo').hide();
  $('.no-geo').show();
  
}

// Get Weather
$('button').click( function(){
 
     navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Get Weather
      getWeather( lat + ',' + long );
       
     });
});


// Define Get Weather
var getWeather = function( location ) {
  
   console.log(location);
  
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      // console.log(weather);
      
      // Display Data
      $('h1').text(weather.city);
      $('h2').text(weather.temp);

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
};