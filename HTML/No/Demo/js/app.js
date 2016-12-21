$(document).ready(function() {
  $.simpleWeather({
    location: 'TOKYO, JP',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><h4><br>Today weather</h4><br><br><i class="icon-'+weather.code+'"></i><br><br><br> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+'</li>';
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

