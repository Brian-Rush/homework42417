// jQuery(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.")
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });
//
// var sentence1 = prompt("Write a sentence.")
//
// var userSentence = function(hhh){
//   return (hhh);
// }
//
// userSentence(sentence1);
// console.log(sentence1);
//
// console.log(sentence1.slice(0), sentence1.slice(-1));
//
// var first = (sentence1.slice(0).toUpperCase());
// var last = (sentence1.slice(-1));
//
// // var upper = firstLast.toUpperCase();
//
// // var backward = upper.reverse();
//
//
//
// console.log(first);
// console.log(last);
// // console.log(backward);


// Asks for user input
var sentence1 = prompt("Write a sentence.")

// Selects first and last letters of the string
var first = sentence1.slice(0,1);
var last = sentence1.slice(-1);


// Capitalizes the letters that were selected

first = first.toUpperCase();
last = last.toUpperCase();

var letterPair = first + last;

console.log(letterPair);

// var backwardPair = letterPair.reverse; it's not working!

// Reverses the letter pair in a cheatery way

console.log(last+first);
// console.log(backwardPair);

// Adds the reversed letter pair to the end of the sentence
console.log(sentence1+last+first);


// Calculates the length of the sentence
var total = sentence1.length;

console.log(total);

// Finds the middle and rounds down
var middle = Math.floor(total / 2);

console.log(middle);


var midChar = sentence1.charAt(middle);

console.log(midChar);

var lastSentence = midChar + sentence1 + last + first;

console.log (lastSentence);

var finalReverse = lastSentence.split("").reverse().join("");

console.log (finalReverse);
