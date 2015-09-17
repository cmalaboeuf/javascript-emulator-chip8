"use strict";

var l_screen = 64; // largeur en pixel
var L_screen = 32; // longeur en pixel
var factor = 8; // facteur de mutliplication
var WIDTH_SCREEN = l_screen * 8; 
var HEIGHT_SCREEN  = L_screen * 8; 

var BLACK_COLOR = 0;
var WHITE_COLOR = 1;

var Screen  = function(_canvas){
	/*initialise first dimension*/
	this.pixels = new Array();
	this.canvas = _canvas; 
	this.init();
	this.square = new Array();

}

Screen.prototype.init = function(){
	this.initializeCanvas();
	this.initializePixels();
	this.updateScreen();
}
Screen.prototype.initializeCanvas = function (){
	var ctx = this.canvas.getContext("2d");
	this.canvas.style.width = WIDTH_SCREEN + "px";
	this.canvas.style.height = HEIGHT_SCREEN + "px";
	//this.canvas.style."background-color" = "black";
	//ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	//ctx.fillStyle="#000000"; //BLACK
	//ctx.fillRect(0,0,WIDTH_SCREEN,HEIGHT_SCREEN); 

}
Screen.prototype.initializePixels = function() {
	var x,y = 0;

	for(x = 0; x < l_screen; x++){
		/*initialise second dimension*/
		this.pixels[x] = new Array();
		for(y = 0; y< L_screen; y++){	
			if(x == y ){
				this.pixels[x][y] = new Pixel(x, y,WHITE_COLOR);	
				}	
				else{	
				this.pixels[x][y] = new Pixel(x, y,BLACK_COLOR);			
			}
		}		
	}
	//this.square[0] = null;//mettre une texture noir dedans; 
	//this.square[1] = null;
}

Screen.prototype.eraseScreen = function(){
	var x,y = 0;

		for(x = 0; x < l_screen; x++){
			/*initialise second dimension*/
			this.pixels[x] = new Array();
			for(y = 0; y< L_screen; y++){
				pixels[x][y].color = BLACK_COLOR;
			}
		}
	ctx.fillRect(0,0,WIDTH_SCREEN,HEIGHT_SCREEN); 
}

Screen.prototype.updateScreen = function(){
	var x, y; 
	for(x = 0 ; x<l_screen ;x++){
		for(y = 0; y <L_screen ; y++ ){
			this.drawPixels(this.pixels[x][y]);
		}
	}
}

Screen.prototype.drawPixels= function(_pixel){
	var ctx = this.canvas.getContext("2d");

	ctx.fillStyle = _pixel.color == BLACK_COLOR ? "#000000":"#FFFFFF"; 
	ctx.fillRect(_pixel.position.x * factor, _pixel.position.y * factor, factor, factor);
}