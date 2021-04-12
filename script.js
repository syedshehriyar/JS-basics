var btnTranslate = document.querySelector(".btn-translate");
console.log(btnTranslate);

var txtArea = document.querySelector("#txt-area");
console.log(txtArea);

//Approach1
// btnTranslate.addEventListener("click", function clickEvenetHandler() {
// 	console.log("clicked");
// });

//Approach2
function clickHandler() {
	console.log("Hey clicky");
	console.log("input", txtArea.value);
}

btnTranslate.addEventListener("click", clickHandler);

//Approach3
// btnTranslate.addEventListener("click", () => {
// 	console.log("clidked in arrow");
// });
