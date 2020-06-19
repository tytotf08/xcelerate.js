// xCelerate JS Scripting
var randomContent;
function print(styling, content) {
	if (typeof styling === "string" && typeof content === "string" && styling !== "" && content !== "") {
		document.body.innerHTML += `<p style = "` + styling +`">` + content + `</p>`
	}
}
function hello(outPutEnvironment) {
	if (typeof outPutEnvironment === "string") {
		if (outPutEnvironment === "console") {
			console.log("Hello");
		} else if (outPutEnvironment === "html") {
			document.body.innerHTML += `<p>Hello</p>`;
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
function echo(content, outPutEnvironment) {
	if (typeof outPutEnvironment === "string") {
		if (outPutEnvironment === "console") {
			console.log(content);
		} else if (outPutEnvironment === "html") {
			document.body.innerHTML += `<p>` + content + `</p>`;
		} else if (outPutEnvironment === "alert") {
			alert(content);
		} else if (outPutEnvironment === "") {
			alert("SyntaxError: must specify at least one output environment.");
		} else {
			alert("SyntaxError: '"+outPutEnvironment+"' is not a valid output environment.");
		}
	} else {
		alert("SyntaxError: output environment must be a specified string.");
	}
}
function random(arrayName) {
	if (typeof arrayName === "string") {
		randomContent = arrayName[Math.floor(Math.random() * arrayName.length)];
		document.body.innerHTML += `<p>` + randomContent + `</p>`;
	}	
}
window.onload = function communicate() {
	document.body.innerHTML += `<script src = "main.js"></script>`;
	document.querySelector("head").innerHTMl += `<link rel = "stylesheet" href = "style.css"/>`
}