var fact = document.getElementById('fact');

var factText = document.getElementById('factText');

var showDate = document.getElementById('showDate');

var numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', getFact);

var tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', tweetFact);

function getFact() {
	var number = numberInput.value;

	var xhr = new XMLHttpRequest();

	if (document.getElementById('year').checked) {
		xhr.open('GET', 'http://numbersapi.com/'+number+'/year', true);
	}

	else if (document.getElementById('date').checked) {
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

function tweetFact() {
	var url = "https://twitter.com/intent/tweet";
	var text = factText.innerHTML;
	var hashtags = "100DaysOfCode, CodeNewbie";
	var via = "super_raay";
	window.open(url+"?text="+text+";hashtags="+hashtags+";via="+via,"","width=500, height=300");
}

