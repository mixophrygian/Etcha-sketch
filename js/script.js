
$(document).ready(function() {

var size = 16;
var eraseButton = document.getElementById("Erase");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

	function makeGrid () {

	for(var i = 0; i < size; i++) {
		for(var j = 0; j< size;  j++){
			$("body").append("<div class='square'></div>");
		}
		$("body").append("<div class='square'></div>");
	}
	$(".square").wrapAll("<div class='container'></div>");

	var containerWidth = $(".container").width();
	var squareBorder = parseInt($(".square").css("border"), 10);
	var squareWidth = containerWidth/size - (2 * squareBorder);
	$(".square").width(squareWidth);
	$(".square").height(squareWidth);

	$("#Black").click(function() {
	$(".square").hover(function() {		
		$(this).css("background-color", "black");
		});
	});

	$("#Erase").click(function() {
		$(".square").hover(function() {		
			$(this).css("background-color", "white");
		});
	});

	$("#Rainbow").click(function() {
		$(".square").hover(function() {
			$(this).css("background-color", Math.floor(Math.random()*16777215).toString(16));
		});

	});

	$("#Black").click();
};
	makeGrid();

	$("#clear").click(function() {
		$(".square").css("background-color", "white");
		$("#Black").checked = true;
	});


	$("#resize").click(function() {
		$(".square").remove();
		$(".container").remove();
		size = prompt("How many squares on a side?", "16");
		makeGrid();

	});

});