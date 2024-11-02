"use strict";

function updateElementsButtonsActions(){
	for (let button of document.getElementsByClassName("upButton")){
		button.onclick  = upButtonClick;
	}
	for (let button of document.getElementsByClassName("downButton")){
		button.onclick  = downButtonClick;
	}
	for (let button of document.getElementsByClassName("deleteButton")){
		button.onclick  = deleteButtonClick;
	}
	document.getElementById("addElement").onclick = addElementClick;
	document.getElementById("save").onclick = saveClick;
}


window.onload = function() {
	updateElementsButtonsActions();
}

function upButtonClick(){
	let parent = this.parentNode;
	let prevSibling =  parent.previousElementSibling;
	if (prevSibling != null){
		prevSibling.before(parent);
	}
}

function downButtonClick(){
	let parent = this.parentNode;
	let nextSibling =  parent.nextElementSibling;
	if (nextSibling != null){
		nextSibling.after(parent);
	}
}

function deleteButtonClick(){
	let parent = this.parentNode;
	parent.remove();
}

function addElementClick(){
	let element = document.createElement("div");
	element.className = "element";
	element.innerHTML = `
			<input class="leftInput" value="Первый"></input>
			<input class="rightInput" value="1"></input>
			<button class="upButton">↑</button>
			<button class="downButton">↓</button>
			<button class="deleteButton">x</button>
	`;
	document.getElementById("article").append(element);
	updateElementsButtonsActions();
}

function saveClick(){
	let saveString = "{";
	let elements = document.querySelectorAll(".element");
	for (let element of elements){
			saveString = saveString + "\"" + element.querySelector(".leftInput").value + "\"" + ":";
			saveString = saveString + "\"" + element.querySelector(".rightInput").value + "\"" + ",";
	}
	saveString = saveString.slice(0, saveString.length - 1) + "}";
	let saveStringElement = document.querySelector(".saveStringElement");
	if (saveStringElement == null){
		saveStringElement = document.createElement("div");
		saveStringElement.className = "saveStringElement";
		document.querySelector(".main").append(saveStringElement);
	}
	saveStringElement.innerHTML = saveString;
}





