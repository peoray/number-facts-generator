var fact = document.getElementById('fact');

var factText = document.getElementById('factText');

var numberInput = document.getElementById('numberInput');

numberInput.addEventListener('input', getFact);

function getFact() {
	var number = numberInput.value;

	var xhr = new XMLHttpRequest();

	if (document.getElementById('year').checked) {
		xhr.open('GET', 'http://numbersapi.com/'+number+'/year', true);
	}

	else if (document.getElementById('date').checked) {
		xhr.open('GET', 'http://numbersapi.com/'+number+'/date', true);
	}

	else {
		xhr.open('GET', 'http://numbersapi.com/'+number, true);
	}

	xhr.onload = function() {
		if(this.status === 200 && number !== '') {
			console.log(this.responseText);
			factText.textContent = this.responseText;
		}
	}

	xhr.send();
}

