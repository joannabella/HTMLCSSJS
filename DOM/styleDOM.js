/* var pRed = document.getElementsByTagName('p');
for (var i = 0; i < pRed.length; i++) {
   pRed[i].setAttribute('style', 'background-color: red;');
}
console.log("test"); */
/* var myDiv = document.getElementById('myDiv');
console.log(myDiv);
//myDiv.setAttribute('style', 'color: red;');
myDiv = myDiv.getElementsByTagName('span');
for (var i = 1; i < myDiv.length; i++) {
  myDiv[i].setAttribute('style', 'color: red;');
} */
/* var p = document.createElement('p');
p.textContent = 'Apple';
document.body.appendChild(p);
p = document.createElement('p');
p.textContent = 'Pear';
document.body.appendChild(p);
p = document.createElement('p');
p.textContent = 'Banana';
document.body.appendChild(p); */

/* var arr = ['Apple', 'Pear', 'Banana'];
for (var i = 0; i < arr.length; i++) {
  var p = document.createElement('p');
  p.textContent = arr[i];
  document.body.appendChild(p);
} */
var hello = document.getElementById('no-text');
hello.textContent = 'Hello World';


var badText = document.querySelector('main');
var deleted = document.querySelectorAll('.remove-me');
console.log(deleted);
for (var i = 0; i < deleted.length; i++) {
  var element = deleted[i];
  badText.removeChild(element);
  // deleted[i].parentElement.removeChild(deleted[i]);
}
