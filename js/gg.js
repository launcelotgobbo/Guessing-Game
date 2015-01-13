// Library functions
String.prototype.toNum = function() {
	return parseInt(this, 10);
};

// Constants
var $maximumNumberOfTries = 3;

var $resetButton = $("#resetButton");
var $submitButton = $("#submitButton");
var $inputField = $("#inputNumber");

// User-defined variable initialization
var $tryCount;
var $minValue;
var $maxValue;
var $midValue;
var $inputValue;
var $randomNumberGenerated;
var $numTriesLeft;
var $stringVal;
var $canSubmit;

// Updaters
var updateNumTriesLeft = function() {
	$numTriesLeft = $maximumNumberOfTries - $tryCount;
};

var generateNewRandomNumber = function() {
	$randomNumberGenerated = Math.floor(Math.random() * 100);
};

var updateMinValue = function() {
	$minValue = ($inputValue > $randomNumberGenerated) ? $minValue: $inputValue;
	updateMidValue();
};

var updateMaxValue = function() {
	$maxValue = ($inputValue < $randomNumberGenerated) ? $maxValue : $inputValue;
	updateMidValue();
};

var updateMidValue = function () {
	$midValue = Math.floor(($minValue + $maxValue) / 2);
};

var updateCanSubmit = function() {
	$canSubmit = $numTriesLeft > 0 && !($inputValue === $randomNumberGenerated);
	if (!$canSubmit)
		$submitButton.attr("disabled", true);
	else
		$submitButton.attr("disabled", false);
};

// Reset button toggle
var toggleResetButton = function() {
	if ($tryCount > 0) 
		$resetButton.show();
	else 
		$resetButton.hide();
};

var getInputValue = function() {
	$inputValue = $inputField.val().toNum();
};

var flushButtonValue = function() {
	console.log($inputValue);
	updateMinValue();
	updateMaxValue();
	updateMidValue();
	$inputField.attr("min", $minValue.toString());
	$inputField.attr("max", $maxValue.toString());
	$inputField.attr("value", $midValue.toString());
};

var incrementTryCount = function() {
	$tryCount++;
	updateNumTriesLeft();
};

var updateOutputString = function() {
	if ($tryCount > 0) {
		if ($inputValue > $randomNumberGenerated)
			$stringVal = "Hot - Lower your guess";
		else if ($inputValue < $randomNumberGenerated)
			$stringVal = "Cold - Increase your guess";
		else if ($inputValue === $randomNumberGenerated)
			$stringVal = "Success";
		else if ($numTriesLeft <= 0)
			$stringVal = "Sorry";
	} else {
		$stringVal = "";
	}
};

$submitButton.click(function(event) {
	event.preventDefault();
	getInputValue();
	incrementTryCount();
	toggleResetButton();
	flushButtonValue();
	updateOutputString();
	updateCanSubmit();
});

$resetButton.click(function(event) {
	event.preventDefault();
	flushVariables();	
	flushButtonValue();
});

var flushVariables = function() {
	$tryCount = 0;
	$minValue = 0;
	$maxValue = 99;
	$inputValue = 0;
	$stringVal = "";
	generateNewRandomNumber();	
	updateNumTriesLeft();
	toggleResetButton();
	updateOutputString();
	updateCanSubmit();
}

flushVariables();
