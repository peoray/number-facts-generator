// get the result of the search term
const factText = document.getElementById("factText");

// get container of fact result
const fact = document.getElementById("fact");

function getFact(e) {
  // get value of form input
  var numberInput = document.getElementById("numberInput").value;

  const xhr = new XMLHttpRequest();
  const url = `http://numbersapi.com/${numberInput}`;

  if (document.getElementById("year").checked) {
    xhr.open("GET", `${url}/year`, true);
  } else if (document.getElementById("date").checked) {
    xhr.open("GET", `${url}/date`, true);
  } else {
    xhr.open("GET", url, true);
  }
  xhr.onload = function() {
    if (this.status === 200 && numberInput !== "") {
      fact.style.display = "block";
      factText.textContent = this.responseText;
    }
  };
  xhr.send();
  e.preventDefault();
}

function makeFormInputfocused(e) {
  if (e.target.className === "radio") {
    document.querySelector('input[type="text"]').focus();
    document.querySelector('input[type="text"]').value = "";
    fact.style.display = "none";
  }
}

function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = `alert message-alert ${className}`;
  div.appendChild(document.createTextNode(message));
  // get parent
  const parent = document.querySelector("#input");
  const before = document.getElementById("numberInput");
  // insert message
  parent.insertBefore(div, before);

  setTimeout(() => document.querySelector(".message-alert").remove(), 3000);
}

document.getElementById("date").addEventListener("click", e => {
  showMessage(
    `Enter "month"/"day" to get fact for Date. E.g: 12/25 = December 25th`,
    "alert-info"
  );
  document.querySelector('input[type="text"]').focus();
  document.querySelector('input[type="text"]').value = "";
});

// Tweet functionality
function tweetFact() {
  const url = "https://twitter.com/intent/tweet";
  const text = factText.innerHTML;
  const hashtags = "100DaysOfCode, CodeNewbie";
  const via = "super_raay";
  window.open(
    url + "?text=" + text + ";hashtags=" + hashtags + ";via=" + via,
    "",
    "width=700, height=300"
  );
}

// get form submit button
document.getElementById("submit").addEventListener("click", getFact);

// get tweet button
document.getElementById("tweetButton").addEventListener("click", tweetFact);

// make the form input to focus when the anywhere on the page is click
document.body.addEventListener("click", makeFormInputfocused);
