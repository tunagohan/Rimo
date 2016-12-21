// JavaScript Document
var pbar = document.getElementById('prog');
  var ptxt = document.getElementById('outp');
  var pup = setInterval("upPrgrss()",100);
  function upPrgrss(){
    if(pbar.value <= pbar.max){
    pbar.value = myS;
    ptxt.value = pbar.value;
    }else{
    clearInterval(pup);
    }
}