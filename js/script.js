/*function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal - 1;
	}

	document.getElementById("countDownButton").innerHTML = newVal;
}*/


$(document).ready(function() {
	$("#hidden").hover(function() {
		$(this).css("color", "black");
	}, 
	function() {
		$(this).hide();
		//$(this).css("display", "none");
	});

	$("button").click(function() {
		alert("I'm alerting you")
	});
});
