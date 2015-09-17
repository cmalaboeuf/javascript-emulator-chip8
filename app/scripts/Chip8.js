"use strict";
var Chip8 = function Chip8 (){

	/*4096 octet*/
	this.memory = new Array(); 

	/*compteur qui permet de parcourir le tableau memory
	* de 0 à 4095
	*/ 
	this.pgCounter = 0;

	this.register = new Array (); 

	/* stocke les 16 niveau d'appel de stack */
	this.jump = new Array();

	/*Compteur pour parcourir le tableau d'appel de stack*/
	this.nbJump ; 

	/*compteur pour la synchronisation*/
	this.counterGame;

	/*compteur pour le son*/
	this.counterSound;
}

Chip8.prototype.init = function(){

	var size_memory = 4096; 
	var i=0;
	/*initialisation de la mémoire*/
	
	for(i; i< size_memory; i++){
		this.memory[i] = 0;
	}

	var size_stack = 16;
	for ( i =0; i< size_stack; i++){
		this.jump = 0; 
		this.register = 0;
	}

}
Chip8.prototype.decreasing = function (){
	if(this.counterGame > 0 ){
		this.counterGame --;
	}
	if(this.counterSound >0 ){
		this.counterSound --;
	}
}

var chip8 = new Chip8();