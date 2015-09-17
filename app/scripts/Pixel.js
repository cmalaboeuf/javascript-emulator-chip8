"use strict";

var Position = function (_x,_y){
	this.x  = null || _x;
	this.y = null|| _y;

}
Position.prototype.initialize = function(_x,_y){
	this.x = _x;
	this.y = _y;
}

var Pixel  = function(_x,_y,_color){
	this.position = new Position();

	/*8 Bits*/
	this.color = null|| _color;
}