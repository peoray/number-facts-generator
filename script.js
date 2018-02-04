var factText = document.getElementById('factText');

// GET FORM INPUT
var numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', getFact);

// GET TWEET BUTTON
var tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', tweetFact);

document.querySelector('body').addEventListener('click', getFocused);

document.querySelector('body').addEventListener('click', removeMessage);

function getFact() {

    // GET FACT CONTAINER
    var fact = document.getElementById('fact');

    // GET VALUE OF FORM INPUT
    var number = numberInput.value;

    var xhr = new XMLHttpRequest();

    if (document.getElementById('year').checked) {
        xhr.open('GET', 'http://numbersapi.com/' + number + '/year', true);
    } else if (document.getElementById('date').checked) {
        xhr.open('GET', 'http://numbersapi.com/' + number + '/date', true);
    } else {
        xhr.open('GET', 'http://numbersapi.com/' + number, true);

    }

    xhr.onload = function() {
        if (this.status === 200 && number !== '') {
            fact.style.display = 'block';
            factText.textContent = this.responseText;
        }
    }

    xhr.send();
}

function getFocused(e) {
    if (e.target.className === 'radio') {
        document.querySelector('input[type="text"]').focus();
        document.querySelector('input[type="text"]').value = '';
        document.getElementById('fact').style.display = 'none';
    }
}

function check() {
    // GET DATE ALERT
    var showDate = document.getElementById('showDate');

    var radioButton = document.getElementsByClassName("radio");

    this.addEventListener('click', function() {
        if (radioButton[2].checked) {
            showDate.style.display = 'block';
        } else {
            showDate.style.display = 'none';
        }
    })
}

check();

function removeMessage(e) {
    if (e.target.className === 'close') {
        document.getElementById('showDate').remove();
    }
}

function tweetFact() {
    var url = "https://twitter.com/intent/tweet";
    var text = factText.innerHTML;
    var hashtags = "100DaysOfCode, CodeNewbie";
    var via = "super_raay";
    window.open(url + "?text=" + text + ";hashtags=" + hashtags + ";via=" + via, "", "width=500, height=300");
}
