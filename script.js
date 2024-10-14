
var taskInput = document.getElementById("task-input");
var addTaskBtn = document.getElementById("add-task-btn");
var taskList = document.getElementById("task-list");


addTaskBtn.addEventListener("click", addTask);

function addTask() {
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }


  var taskItem = document.createElement("li");
  var taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  
  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => editTask(taskItem, taskContent));

  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => deleteTask(taskItem));

  taskItem.appendChild(taskContent);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);

  
  taskInput.value = "";}
function editTask(taskItem, taskContent) {
  var newTaskText = prompt("Edit your task:", taskContent.textContent);
  if (newTaskText && newTaskText.trim() !== "") {
    taskContent.textContent = newTaskText;
  }
}

// Delete a task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
