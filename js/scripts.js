jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("Stop clicking me!!");
  });
});


const sentence = prompt("Enter your sentence here:");
alert("Your sentence is: " + sentence + ".");

function firstLast (inputSentence) {
  const firstLetter = inputSentence[0].toUpperCase();
  const sentenceLength = inputSentence.length;
  const lastLetter = inputSentence[sentenceLength - 1].toUpperCase();
  return firstLetter + lastLetter;
}
const firstLastLetters = firstLast(sentence);

function reverse (inputWords) {
  return inputWords[1] + inputWords[0];
}

const reversedLetters = reverse(firstLastLetters);

function newSentence (inputSentence, letters) {
  return inputSentence + letters;
}

alert(newSentence(sentence, reversedLetters));

