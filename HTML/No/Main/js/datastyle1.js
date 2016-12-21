<!--折れ線グラフ----------------------> 
	  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['math', 'TV', 'Rait'],
          ['12',  1000,      400],
          ['3',  1170,      460],
          ['9',  660,       1120],
          ['12',  1030,      540]
        ]);

        var options = {
          hAxis: {title: 'Maht',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }