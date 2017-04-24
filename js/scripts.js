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
var sentence1 = prompt("Write a sentence.")

var userSentence = function(hhh){
  return (hhh);
}

userSentence(sentence1);
console.log(sentence1);

console.log(sentence1.charAt(0), sentence1.slice(-1));

var firstLast = (sentence1.charAt(0) + sentence1.slice(-1));

var upper = firstLast.toUpperCase();

// var backward = upper.reverse();



console.log(firstLast);
console.log(upper);
// console.log(backward);
