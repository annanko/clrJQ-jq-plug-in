/*
* clrJQ.js - JQuery plugin
* lrJQ is JQuery mini-plugin that set positions to text,images and blocks.
*
* Name:			clrJQ.js
* Author:		Andrej Nankov - http://andrej.uk.to/
* Date:			july 23, 2015		
* Version:		1.0
* Example:		/
*	
*/

(function( $ ) {
	
	
$.fn.centerImg = function()
{
	$(this).css("display", "block");
	$(this).css( { marginLeft : "auto", marginRight : "auto" } );
	return this;
}
$.fn.centerImg = function(w,h)
{
	$(this).css("display", "block");
	$(this).css( { marginLeft : "auto", marginRight : "auto" } );
	$(this).innerHeight(h);
	$(this).innerWidth(w);
	return this;
}
$.fn.rightImg = function()
{
	$(this).css("float", "right");
	$(this).css("clear", "both"); 
	return this;
}
$.fn.rightImg = function(w,h)
{
	$(this).css("float", "right");
	$(this).css("clear", "both"); 
	$(this).innerWidth(w);
	$(this).innerHeight(h);
	return this;
}
$.fn.leftImg = function()
{
	$(this).css("float", "left");
	$(this).css("clear", "both"); 
	return this;
}
$.fn.leftImg = function(w,h)
{
	$(this).css("float", "left");
	$(this).css("clear", "both"); 
	$(this).innerWidth(w);
	$(this).innerHeight(h);
	return this;
}
$.fn.centerBlock = function(w)
{
	$(this).css("display", "block");
	$(this).css( { marginLeft : "auto", marginRight : "auto" } );
	$(this).innerWidth(w);	
	return this;
}
$.fn.centerBlock = function(w,h)
{
	$(this).css("display", "block");
	$(this).css( { marginLeft : "auto", marginRight : "auto" } );
	$(this).innerWidth(w);
	$(this).innerHeight(h);
	return this;	
}
$.fn.rightBlock = function(w)
{
	$(this).css("float", "right");
	$(this).css("clear", "both"); 
	$(this).innerWidth(w);
	return this;
}
$.fn.rightBlock = function(w,h)
{
	$(this).css("float", "right");
	$(this).css("clear", "both"); 
	$(this).innerWidth(w);
	$(this).innerHeight(h);
	return this;
}
$.fn.leftBlock = function(w)
{
	$(this).css("float", "left");
	$(this).css("clear", "both"); 
	$(this).innerWidth(w);
	return this;
}
$.fn.leftBlock = function(w,h)
{
	$(this).css("float", "left");
	$(this).css("clear", "both"); 
	$(this).innerWidth(w);
	$(this).innerHeight(h);
	return this;
}
$.fn.centerText = function(w)
{
		$(this).css("text-align", "center");
		return this;
}
$.fn.leftText = function(w)
{
		$(this).css("text-align", "left");
		return this;
}
$.fn.rightText = function(w)
{
		$(this).css("text-align", "right");
		return this;
}
}( jQuery ));