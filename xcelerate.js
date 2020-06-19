// xCelerate JS 
// Please refer to LICENSE to view how you can distribute and branch off of this code
var randomContent;
var content;
content = document.querySelector("body");
function print(styling, output) {
	if (typeof styling === "string" && typeof output === "string" && styling !== "" && output !== "") {
		content.innerHTML += `<p style = "` + styling +`">` + output + `</p>`
	}
}
function hello(outPutEnvironment) {
	if (typeof outPutEnvironment === "string") {
		if (outPutEnvironment === "console") {
			console.log("Hello");
		} else if (outPutEnvironment === "html") {
			content.innerHTML += `<p>Hello</p>`;
		} else if (outPutEnvironment === "alert") {
			alert("Hello");
		} else if (outPutEnvironment === "") {
			alert("SyntaxError: must specify at least one output environment.");
		} else {
			alert("SyntaxError: '"+outPutEnvironment+"' is not a valid output environment.");
		}
	} else {
		alert("SyntaxError: output environment must be a specified string.");
	}
}
function echo(output) {
	content.innerHTML += `<p>` + output + `</p>`;
}
function random(arrayName) {
	if (typeof arrayName === "string") {
		randomContent = arrayName[Math.floor(Math.random() * arrayName.length)];
		content.innerHTML += `<p>` + randomContent + `</p>`;
	}	
}
window.onload = function start() {
	console.log("xCelerate running");
	content.innerHTML += `<!-- xCelerate JS and Open-source Javascrpit framework. -->`
}
function line(styling) {
	if (typeof styling === "string") {
		content.innerHTML += `<hr style = "` + styling + `border: none; min-height: 2px;"/>`
	}
}