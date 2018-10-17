function isBetween (x, from, to) {
  if (x > from && x < to) {
  return true;
} else {
  return false;
}
}
console.log(isBetween(10, 0 , 20));

function range(from, to) {
  var myArray = [];
  var i;
  for (i = from; i <= to; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log(range(3,10));
var y = range(6,8);
console.log(y);

function min(a, b) {
  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}
console.log(min(20,10));
