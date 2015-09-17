var l_screen = 64; // largeur en pixel
var L_screen = 32; // longeur en pixel
var factor = 8; // facteur de mutliplication
var WIDTH_SCREEN = l_screen * 8; 
var HEIGHT_SCREEN  = L_screen * 8; 

var BLACK_COLOR = 0;
var WHITE_COLOR = 1;

var Screen  = function(_canvas){
	/*initialise first dimension*/
	var pixels = new Array();
	var canvas = _canvas; 
}

Screen.prototype.initialize = function() {
	var x,y = 0;

		for(x = 0; x < l_screen; x++){
			/*initialise second dimension*/
			pixels[x] = new Array();
			for(y = 0; y< L_screen; y++){
				pixels[x][y] = new Pixel(x, y,BLACK_COLOR);
			
	}		}
};

Screen.prototype.eraseScreen = function(){
	var x,y = 0;

		for(x = 0; x < l_screen; x++){
			/*initialise second dimension*/
			pixels[x] = new Array();
			for(y = 0; y< L_screen; y++){
				pixels[x][y].color = BLACK_COLOR);
			}
		}
}