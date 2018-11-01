
$.simpleWeather({
    location: 96785,
    success: function(weather) {
      console.log(weather.image);
      console.log(weather.city);
      console.log(weather.temp);
      console.log(weather.updated);

      $('.image img').attr('src', weather.image);
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
      $('.time').text(weather.updated);

    }, 
    error: function(error) {
      console.log('Go outside!');
    }
 });

