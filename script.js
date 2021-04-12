var btnTranslate = document.querySelector(".btn-translate");
var txtArea = document.querySelector("#txt-area");
var outputdiv = document.querySelector("#output");
function clickHandler() {
	outputdiv.innerText = "this is a transated text" + txtArea.value;
}

btnTranslate.addEventListener("click", clickHandler);
