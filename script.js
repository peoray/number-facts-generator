var factText = document.getElementById('factText');

// GET FORM INPUT
var numberInput = document.getElementById('numberInput');
document.getElementById("numberInput").focus();
numberInput.addEventListener('input', getFact);

// GET TWEET BUTTON
var tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', tweetFact);

function getFact() {

	// GET FACT CONTAINER
	var fact = document.getElementById('fact');

	// GET DATE ALERT
	var showDate = document.getElementById('showDate');

	// GET VALUE OF FORM INPUT
	var number = numberInput.value;

	var xhr = new XMLHttpRequest();

	if (document.getElementById('year').checked) {
		getFocused();
		xhr.open('GET', 'http://numbersapi.com/'+number+'/year', true);
	}

	else if (document.getElementById('date').checked) {
		getFocused();
		showDate.style.display = 'block';
		xhr.open('GET', 'http://numbersapi.com/'+number+'/date', true);
	}

	else {
		xhr.open('GET', 'http://numbersapi.com/'+number, true);
	}

	xhr.onload = function() {
		if(this.status === 200 && number !== '') {
			fact.style.display = 'block';
			factText.textContent = this.responseText;
		}
	}

	xhr.send();
}

function getFocused() {
	if(document.getElementByClassName('radio').checked) {
		document.getElementById('numberInput').focus();
	}
}

function tweetFact() {
	var url = "https://twitter.com/intent/tweet";
	var text = factText.innerHTML;
	var hashtags = "100DaysOfCode, CodeNewbie";
	var via = "super_raay";
	window.open(url+"?text="+text+";hashtags="+hashtags+";via="+via,"","width=500, height=300");
}

