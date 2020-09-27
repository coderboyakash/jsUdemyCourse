// Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
filter.value = "";
//  Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // dom load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", removeTask);
  // clear task events
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks events
  filter.addEventListener("keyup", filterTasks);
}
function addTask(e) {
  if (taskInput.value === "") {
    alert("add the task");
  }
  //  Craete li elements
  const li = document.createElement("li");
  li.className = "collection-item";
  // create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  //  create new link element
  const link = document.createElement("a");
  // add class to the a
  link.className = "delete-item secondary-content";
  // add the icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append to the li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // store in local storage
  storeTaskInLocalStorage(taskInput.value);
  //  clear the input
  taskInput.value = "";
  e.preventDefault();
}
// Store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you Sure ?")) {
      e.target.parentElement.parentElement.remove();
      // remove from ls`
      removeFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function clearTasks() {
  // taskList.innerHTML = '';
  // faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  //clear tasks
  clearTaskFromLocalStorage();
}
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function clearTaskFromLocalStorage() {
  console.log('clear task from local storage');
  localStorage.clear();
}

// get tasks from
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(task);
  tasks.push(task);
  tasks.forEach(function (task) {
    console.log(task);
    //  Craete li elements
    const li = document.createElement("li");
    li.className = "collection-item";
    // create text node and append to the li
    li.appendChild(document.createTextNode(task));
    //  create new link element
    const link = document.createElement("a");
    // add class to the a
    link.className = "delete-item secondary-content";
    // add the icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append to the li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  });
}
function removeFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
