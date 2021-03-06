// xCelerate JS 
// Please refer to LICENSE to view how you can distribute and branch off of this code.
var randomContent;
var content;
content = document.querySelector("body");

window.onload = function start() {
	console.log("xCelerate running");
	content.innerHTML += `<!-- xCelerate JS is an Open-source Javascript framework. -->`
}

function write(output, styling) {
	if (typeof styling === "string" && typeof output === "string" && styling !== "" && output !== "") {
		content.innerHTML += `<p style = "` + styling +`">` + output + `</p>`
	} else if (styling === undefined && typeof output === "string" && output !== "") {
		content.innerHTML += `<p>` + content + `</p>`;
	} else if (output === undefined) {
		alert("SyntaxError: output must be defined in print()");
	} else if (output === undefined && styling === undefined) {
		alert("SyntaxError: at least one argument must be given in print()");
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
function print(output) {
	content.innerHTML += `<p>` + output + `</p>`;
}
function random(arrayName) {
	if (typeof arrayName === "string") {
		randomContent = arrayName[Math.floor(Math.random() * arrayName.length)];
		content.innerHTML += `<p>` + randomContent + `</p>`;
	}	
}
function line(styling) {
	if (typeof styling === "string") {
		content.innerHTML += `<hr style = "` + styling + `border: none; min-height: 2px;"/>`;
	}
}
function button(value, functionCalled) {
	if (typeof value === "string" && typeof functionCalled === "string" && !functionCalled.includes("()")) {
		content.innerHTML += `<button onclick = "`+functionCalled+`()">`+value+`</button>`;
	} else if (typeof value === "string" && typeof functionCalled === "string" && functionCalled.includes("()")) {
		alert("SyntaxError: functionCalled cannot include () parantheses.");
	} else if ()
}