// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

//Defines a Phrase object.
function Phrase(content){
  this.content = content;

  this.processedContent = function processedContent(){
    return this.content.toLowerCase
  }

  this.palindrome = function palindrome(){
    return this.processedContent() == reverse(this.processedContent())
  }

}

function TranslatedPhrase(content, translation){
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent(){
    return this.translation.toLowerCase()
  }
}
TranslatedPhrase.prototype = new Phrase()
