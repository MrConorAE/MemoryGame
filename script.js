var length = 3;
var counter = 0;
var myTimer;
var nums = [];
var answer = "";

$(document).ready(function () {
	var correctSound = new Audio('right.wav');
	var wrongSound = new Audio('wrong.wav');
	newNums();
})


function newNums() {
	//set up screen
	$('#digitArea').show();
	$('#boxArea').hide();
	$('#bottom').hide();
	$('#bottomWrong').hide();
	$('#header').show();
	$('#task').html("Memorize these");
	$('body').css('background-color', '#434343');
	$('#top').css('background-color', '#585656');
	$('#top').css('box-shadow', '0px 5px 8px #585858');
	//
	$('#numDigits').html(length);
	var chooseFrom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (i = 0; i < length; i += 1) {
		var pickedIndex = Math.floor(Math.random() * chooseFrom.length);
		var pickedNum = chooseFrom[pickedIndex];
		nums.push(pickedNum);
		answer += pickedNum.toString();
		chooseFrom.splice(pickedIndex, 1);

	}
	console.log(nums);
	testingUnit();
}

function testingUnit() {
	myTimer = window.setInterval(presentNums, 1000);
}

function presentNums() {
	$('#memDigit').html(nums[counter]);
	counter += 1;
	if (counter > nums.length) {
		clearInterval(myTimer);
		nums = [];
		counter = 0;
		$('#digitArea').hide();
		$('#boxArea').show();
		$('#textIn').focus();
		$('#task').html("Recall the");
	}
}

function checkUser() {
	var userIn = $('#textIn').val();
	if (userIn === answer) {
		$('#bottom').show();
		answer = "";
		length += 1;
		$('#boxArea').hide();
		$('#memDigit').html('');
		$('#textIn').val('');
		$('#header').hide();
		$('body').css('background-color', 'darkgreen');
		$('#top').css('background-color', '#008800');
		$('#top').css('box-shadow', '0px 5px 8px #008800');
	} else {
		$('#boxArea').hide();
		$('#header').hide();
		$('#bottomWrong').show();
		$('#numCorrect').html(length - 1)
		$('body').css('background-color', 'darkred');
		$('#top').css('background-color', '#aa0000');
		$('#top').css('box-shadow', '0px 5px 8px #aa0000');
	}
}