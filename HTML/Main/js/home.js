// JavaScript Document



$(function() {
$('#tabm a[href^="#menu"]').click(function(){
$("#tabm .menu").hide();
$(this.hash).fadeIn();
return false;
});
$('#tabm a[href^="#menu"]:eq(0)').trigger('click');
});



//--円グラフ----------------------------------------

window.onload = function () {
    var chart = new CanvasJS.Chart("Dodata",
    {
      title:{
        text: "",
        fontFamily: "Impact",
        fontWeight: "normal"
      },
	  axisX: {
			interval: 10
		},

      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {
        //startAngle: 45,
       indexLabelFontSize: 20,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: true,
       dataPoints: [
       {  y: 30, legendText:"TV 30%",},
       {  y: 20, legendText:"Wash 20%",},
       {  y: 15, legendText:"Mic 15%",},
       {  y: 25, legendText:"Ref 25%"},
       ]
     }
     ]
   });

    chart.render();
  }



//--Math 縦棒グラフ----------------------
var dataPlot = [{
  type: 'column',
  showInLegend: true,
  dataPoints: [
  { label: "0",   y: 10 },
  { label: "3", y: 15 },
  { label: "6",   y: 25 },
  { label: "9", y: 30 },
  { label: "12", y: 28 },
  { label: "15", y: 18 },
  { label: "18", y: 48 },
  { label: "21", y: 58 },
  { label: "24", y: 30}
  
  ]

}]

var chart = new CanvasJS.Chart("DCodata", {
  theme: 'theme2',
  width: 540,
  height: 210,
  data: dataPlot
});

chart.render();

//Day 棒グラフ--------------------------

var dataPlot = [{
  type: 'column',
  showInLegend: true,
  dataPoints: [
  { label: "Jan",   y: 10 },
  { label: "Feb", y: 15 },
  { label: "Apr",   y: 25 },
  { label: "May", y: 30 },
  { label: "Jun", y: 28 },
  { label: "Jul", y: 18 },
  { label: "Aug", y: 48 },
  { label: "Sep", y: 58 },
  { label: "Oct", y: 38 },
  { label: "Nov", y: 8 },
  { label: "DEc", y: 68 },
  
  ]

}]

var chart = new CanvasJS.Chart("MCodata", {
  theme: 'theme2',
  width: 540,
  height: 210,
  data: dataPlot
});

chart.render();


//タブ----------------------------------

$(function() {
$('#tabs a[href^="#panel"]').click(function(){
$("#tabs .panel").hide();
$(this.hash).fadeIn();
return false;
});
$('#tabs a[href^="#panel"]:eq(0)').trigger('click');
});




	

