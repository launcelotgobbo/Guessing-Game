// Library functions
String.prototype.toNum = function() {
	return parseInt(this, 10);
}

// User-defined variable initialization
var $tryCount = 0;
var $maximumNumberOfTries = 3;
var $minValue = 0;
var $maxValue = 100;
var $midValue = 0;
var $inputValue = 0;
var $randomNumberGenerated = Math.floor(Math.random() * 100);

var $numTriesLeft = $maximumNumberOfTries - $tryCount;
var $canSubmit = $numTriesLeft > 0;

var $resetButton = $("#resetButton");
var $submitButton = $("#submitButton");
var $inputField = $("#inputNumber");

// Updaters
var updateMidValue = function () {
	midValue = Math.floor(($minValue + $maxValue) / 2);
}

var updateNumTriesLeft = function() {
	$numTriesLeft = $maximumNumberOfTries - $tryCount;
}

$resetButton.hide();

var $toggleResetButton = function() {
	if ($tryCount > 0) $resetButton.show()
	else $resetButton.hide();
};

var $resetInputValue = function() {
	$inputValue = $inputField.val().toNum();
}

var $flushButtonValue = function() {
	console.log($inputValue);
	$inputField.attr("min", (Math.min($inputValue, $minValue)).toString());
	$inputField.attr("max", (Math.min($inputValue, $maxValue)).toString());
	$inputField.attr("value", $midValue.toString());
};

var $incrementTryCount = function() {
	$tryCount++;
};

var $outputSignal = function() {
};

$submitButton.click(function(event) {
	event.preventDefault();
	$resetInputValue();
	$incrementTryCount();
	$toggleResetButton();
	$flushButtonValue();
});

var $flushVariables = function() {
	$tryCount = 0;
	$minValue = 0;
	$maxValue = 99;
	$inputValue = 0;
	$randomNumberGenerated = Math.floor(Math.random() * 100);
}
