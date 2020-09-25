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
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';
li.id = 'new-item';
// Add Attributes
li.setAttribute('name', 'New Item');
// create text node
li.appendChild(document.createTextNode('Hello World'));
// Create new link element
const link = document.createElement('a');
link.className = 'text-decoration-none pl-5';
link.innerHTML = 'x'+'<i class="fa fa-remove"></i>'
link.setAttribute('href', '#');
// Append link to li
li.appendChild(link);
// Append li as child to ul
document.querySelector("ul.collections").appendChild(li);
console.log(link);