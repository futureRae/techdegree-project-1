/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Stacey Billups
******************************************/

// An array of quote objects and name it `quotes`. Citation and year properties are optional
var quotes = [
  {
      source: 'Salvador Dali',
      quote: 'Have no fear of perfection—you’ll never reach it',
      tags: 'Art'
  },

  {
      source: 'Voltaire',
      quote: 'A witty saying proves nothing.',
      year: 'A long time ago',
      tags: 'Philsophy'
  },

  {
      source: 'Mies van der Rohe',
      quote: 'Less is more.',
      tags: 'Design'
  },

  {
      source: 'Seneca',
      quote: 'How does it help… to make troubles heavier by bemoaning them? ',
      citation: 'Letters From a Stoic',
      tags: 'Philosophy'
  },

  {
      source: 'Roald Dahl',
      quote: 'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.',
      tags: 'Literature'
  }

];

// Log the array of quotes to the console
console.log(quotes)

// get a random quote from the quotes array of objects
function getRandomQuote(){
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
  }

console.log(getRandomQuote(quotes));

// get a random quote and print it to index.html
function printQuote(){
  let theContents = getRandomQuote();
  let HTML_String = '';
  let theQuote = theContents.quote;
  let theSource = theContents.source;
  let theCitation = '';
  let theYear = '';
  let theTag = '';
  
  if (theContents.tags != null){
    theTag = theContents.tags; 
    HTML_String += '<span class="tag">' + theTag + '</span>';
  }
  // Construct the HTML_String
  HTML_String += '<p class="quote">' + theQuote + '</p>';
  HTML_String += '<p class="source">' + theSource;

  if (theContents.citation != null){
    theCitation = theContents.citation; 
    HTML_String += '<span class="citation">' + theCitation + '</span>';
  }

  if (theContents.year != null){
    theYear = theContents.year; 
    HTML_String += '<span class="year">' + theYear + '</span>';
  }
  
  
  HTML_String += '</p>'

  // setting innerHTML of quote-box div 
  document.getElementById('quote-box').innerHTML = HTML_String;

}

// create a random color for the background of the page
function changeBackgroundColor (){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return document.body.style.background = bgColor;
  
}

// create a 
function autoUpdateQuote() {
  let intervalID = window.setInterval(printQuote, 1000);
  return intervalID; 
}


// Call the printQuote function so there is something on the page by default
printQuote(); 
autoUpdateQuote();

// Button triggers `printQuote` and changeBackgroundColor
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBackgroundColor, false)


