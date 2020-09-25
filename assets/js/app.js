// dcoument.getElementById()

// console.log(document.getElementById("task-title"));

// Get things from the element

// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// Change styling

// document.getElementById("task-title").style.background = "Red";
// document.getElementById("task-title").style.color = "white";
// document.getElementById("task-title").style.padding = "5px";
// document.getElementById('task-title').style.display = 'none';

// Change Content
// document.getElementById("task-title").textContent = "Task Lists";
// document.getElementById("task-title").innerText = "My Task Lists";
// document.getElementById("task-title").innerHTML = "My Task Lists HTML";

// const tasktitle = document.getElementById("task-title");
// tasktitle.innerText = "Any Thing";

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector("h2"));

// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "red";
// document.querySelector("li:nth-child(4)").textContent = "Hello World!!";
// document.querySelector("li:nth-child(odd)").style.border = "1px solid black";
// document.querySelector("li:nth-child(even)").style.border = "1px solid black";

// document.getElementByClassName();

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[3].textContent = 'collection';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementByTagName()
// let items = document.getElementsByTagName("li");
// items = Array.from(items);
// items.reverse();
// console.log(items);
// items.forEach(function(item){
//     item.textContent = 'Hello World!!'
// })
// query selector all
// const items = document.querySelectorAll("ul.collections li.collection-item");
// console.log(items);
// items.forEach(function (item) {
//   item.textContent = "Hello World!!";
// });

// const liODD = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// liODD.forEach(function (odd, index) {
//   odd.style.backgroundColor = "black";
//   odd.style.color = "white";
// });

// liEven.forEach(function (even, index) {
//   even.style.backgroundColor = "red";
//   even.style.color = "yellow";
// });
// let val;

// const list = document.querySelector("ul.collections");
// const listItem = document.querySelector("li.collection-item:first-child");
// val = listItem;
// val = list;

// get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;
// get children li nodes
// val = list.children;

// 1 - Element
// 2 - Attributes (desprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// // 10 - Doctype
// val = list.children[2];
// val = list.children[2].children[0];
// list.children[2].children[0].id = 'test-link';
// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;
// count child elements
// val = list.childElementCount;
// get parent nodes
// val = listItem.parentNode;
// val = listItem.parentNode.parentNode;
// get next siblings
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// get previous siblings
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


// console.log(val);

// Create the element
// const li = document.createElement('li');

// Add Class
// li.className = 'collection-item';
// li.id = 'new-item';
// Add Attributes
// li.setAttribute('name', 'New Item');
// create text node
// li.appendChild(document.createTextNode('Hello World'));
// Create new link element
// const link = document.createElement('a');
// link.className = 'text-decoration-none pl-5';
// link.innerHTML = 'x'+'<i class="fa fa-remove"></i>'
// link.setAttribute('href', '#');
// Append link to li
// li.appendChild(link);
// Append li as child to ul
// document.querySelector("ul.collections").appendChild(li);
// console.log(link);

// Replacing elements
// const newHeading = document.createElement('h1');
// newHeading.className = 'bg-primary';
// newHeading.innerHTML = 'Task Lists';
// const oldHeading = document.getElementById('task-title');
// const parentOfOldHeader = document.querySelector('.title');
// parentOfOldHeader.replaceChild(newHeading, oldHeading);
// remove element
// const lis = document.querySelectorAll('li');
// const lists = document.querySelectorAll('ul');
// lis[0].remove();
// lists[0].removeChild(lis[3]);
// console.log(lis);

// classes and attributes
// const firstli = document.querySelector('li:first-child');
// const link = firstli.children[0];
// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// val = link;
// link.classList.remove('test');
// console.log(val);

// Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://localhost');
// val = link.hasAttribute('href');
// val = link.removeAttribute('href');
// console.log(val);
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('All the task is clear');
//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
    // let val;
    // val = e;
    // Event Target Elements
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     console.log(val);
// }

// mouse events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const header = document.querySelector('h2');

// event handler
// click event
// clearBtn.addEventListener('click', runEvent);
// double click
// clearBtn.addEventListener('dblclick', runEvent);
// mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// mouse up
// clearBtn.addEventListener('mouseup', runEvent);
// mouse enter
// clearBtn.addEventListener('mouseenter', runEvent);
// mouse leave
// clearBtn.addEventListener('mouseleave', runEvent);
// mouse over
// clearBtn.addEventListener('mouseover', runEvent);
// mouse out
// clearBtn.addEventListener('mouseout', runEvent);
// mouse move
// card.addEventListener('mousemove', runEvent);
// function runEvent(e) {
//     console.log(`event type : ${e.type}`);
//     header.textContent = `MouseX : ${e.offsetX}, MouseY : ${e.offsetY}`;
//     card.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
// }
// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector('h2');
// const select = document.querySelector('select');
// clear input
// taskInput.value = '';
// form.addEventListener("submit", runEvent);
// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent);
// taskInput.addEventListener("keypress", runEvent);
// taskInput.addEventListener("focus", runEvent);
// taskInput.addEventListener("blur", runEvent);
// taskInput.addEventListener("cut", runEvent);
// taskInput.addEventListener("paste", runEvent);
// taskInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);


// function runEvent(e) {
//   console.log(`Event Type : ${e.type}`);
//   heading.innerText = e.target.value;
//  get input value
//   console.log(e.target.value);
//   e.preventDefault();
// }
// Events Bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card-title');
// });
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });
// document.querySelector('ul').addEventListener('click', function(){
//     console.log('ul');
// });
// Events Delegations
// const delItem = document.querySelector('.deleteItem');
// delItem.addEventListener('click', deleteItem);
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     if(e.target.parentElement.classList.contains('collection-item')){
//         console.log(e.target);
//         e.target.parentElement.remove();
//     }
// }
// set local storage items
// localStorage.setItem('name', 'John');
// set session storage items
// sessionStorage.setItem('name', 'Steve');
// remove from local storage
// localStorage.removeItem('name');
// remove from storage
// localStorage.removeItem('name');
// localStorage.clear();
// get from storage
// const name = sessionStorage.getItem('name');
// console.log(name);

// document.querySelector('form').addEventListener('submit', function(e) {
//     const task = document.getElementById('task').value;
//     console.log(task);
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('task Saved');
//     e.preventDefault();
// });
// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function (task){
//     console.log(task);
// });