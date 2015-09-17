document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     init(); 
   }
 }
function init(){
	var canvas = document.getElementById("canvas");
	var screen = new Screen(canvas);

}