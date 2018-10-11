//Alert "Hello World"
//alert('Hello World!');

//Write "Hello World" to the document body
document.write('Hello World!');

//Append a p element with the text "Hello world" to the document body
var pGoodbye = document.createElement('p');
pGoodbye.textContent = 'Goodbye';
document.body.appendChild(pGoodbye);

//Change text of an existing p element
var textChange = document.querySelector('p');
textChange.textContent = 'Hello, there';

//Change css of an existing element
var colorBlue = document.querySelector('h1');
colorBlue.setAttribute('style', 'color: blue;');

//Change the tag of an existing element
var h2Tag = document.querySelector('h2');
var h4Tag = document.createElement('h4');
h4Tag.innerHTML = h2Tag.innerHTML;
h2Tag.parentNode.replaceChild(h4Tag, h2Tag);

//Extract value from input fields
var inputArray = document.querySelectorAll('input');
var arr = [];
for (var i = 0; i < inputArray.length; i++) {
  var inputValue = inputArray[i].value;
  arr.push(inputValue);
}
console.log(arr);

//Listen on button click and do an alert as a response
var myButton = document.querySelector('button');
function onClick(e) {
  var element = e.target;
  if (element === myButton) {
    alert('Your click matters!');
  }
}
myButton.addEventListener('click', onClick);

//Extract all links of a DOM page to an array
/*
var linksArray = document.querySelectorAll('a');
var arrayOfLinks = [];
for (var i = 0; i < linksArray.length; i++) {
  var linkPlace = linksArray[i].getAttribute('href');
  arrayOfLinks.push(linkPlace);
}
console.log(arrayOfLinks);
*/
var arrayOfLinks = ["http://google.com", " http://facebook.com"];

//Iterate an array of values (for example links) and append seperate DOM elements to document body
for (var i = 0; i < arrayOfLinks.length; i++) {
  var element = document.createElement('a');
  element.textContent = arrayOfLinks[i];
  element.setAttribute('href', arrayOfLinks[i]);
  document.body.appendChild(element);
}

//Write a function that adds a row to a table
var myTable = document.querySelector('table tbody');
function addRow(a, b) {
  var newTr = document.createElement('tr');
  myTable.appendChild(newTr);
  var newTd = document.createElement('td');
  var newTd2 = document.createElement('td');
  newTr.appendChild(newTd)
  newTr.appendChild(newTd2);
  newTd.textContent = a;
  newTd2.textContent = b;
}
addRow("Third Value", "Fourth Value");
addRow("Joanna är", "Cool")
