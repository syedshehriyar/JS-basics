var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-area");
var outputdiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/dothraki.json";

function constructUrl(text) {
	return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
	console.log("error occured" + error);
	alert("Something wrong with server! try again later");
}
function clickHandler() {
	//taking input
	var inputText = txtInput.value;

	//processing
	fetch(constructUrl(inputText))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputdiv.innerText = translatedText;
		})
		.catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
