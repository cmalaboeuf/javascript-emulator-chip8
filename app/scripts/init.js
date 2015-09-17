document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     init(); 
   }
 }
function init(){
	var canvas = document.getElementById("screen");
	var screen = new Screen(canvas);

}