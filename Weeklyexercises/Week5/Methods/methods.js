/* function getLongestWord(sentence) {
  var arr = sentence.split(" ");
  var results = "";
  console.log(arr);
  var i;
  for (i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (word.length > results.length) {
      results = word;
    }
  }

  return results;
}
console.log(getLongestWord("I love Javascript"));
*/

function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseString("Hello"));
