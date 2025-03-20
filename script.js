function addTask() {
    let taskText = document.getElementById("task").value;
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    document.getElementById("task").value = "";
}

function deleteTask(element) {
    element.parentElement.remove();
}
