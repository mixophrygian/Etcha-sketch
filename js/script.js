
$(document).ready(function() {

var size = 30;
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
	var squareBorder = 1;
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
		size = prompt("How many squares on a side? Between 3 and 100", "30");
		while(size < 3 || size > 100 || size != parseInt(size, 10)){
			size = prompt("Ahem! Between 3 and 100", "30");
		}
		makeGrid();

	});

});