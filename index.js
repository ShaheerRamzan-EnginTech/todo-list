let tasks = [];
function saveData() {
	let textField = document.getElementById('text-field');
	if(textField.value !== '') {
		tasks.push({text: textField.value, isComplete: false});
		textField.value = "";
		loadData(tasks.length - 1);
	}
}

function loadData(index) {
	if(index !== -1) {
		let newDiv = document.createElement("div");
		newDiv.id = `task${index}-div`;
		newDiv.className = 'task-div';
		newDiv.innerHTML = `<input type="text" id="task-${index}-text" readonly value="${tasks[index].text}" class="task-text">
													<button class="button danger" onclick="deleteTask(${index})">Delete</button>
													<button class="button " onclick="doneTask(${index})">Done</button>`;
		document.getElementById('tasks').appendChild(newDiv);

	}
}

function deleteTask(index) {
	document.getElementById(`task${index}-div`).style.display = 'none';
}
function doneTask(index) {
	document.getElementById(`task-${index}-text`).style.textDecoration = "line-through";
}
