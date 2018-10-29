// Random Quote Generator

// global quote objects with source, citation and year.
var quotes = [{ quote: "Have no fear of perfection, you'll never reach it.",
              source: "Salvador Dali",

            },
              { quote: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
              source: "Miguel de Cervantes",

            },
              { quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
              source: "Malcom X",
              tags: "Inspirational"
            },
              { quote: "That's what I do: I drink and I know things.",
              source: "Tyrion Lannister",
              citation: "Game of Thrones TV series",
              tags: "Funny"
            },
              { quote: "And so, my fellow Americans: ask not what your country can do for you - ask what can you do for your country.",
              source: "John F. Kennedy",
              citation: "Inaugaration Address",
              year: "1961"
}];



// function generates random number and assigns it to the array index returns object from array
function getRandomQuote(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  randomIndex = array[randomIndex];
  return randomIndex;

}

//sets a random css rgb color value to the background-color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = backgroundColor;


}

// function prints quote
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var quoteString = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '</p>';
  //conditional prints citation and year if applicable
  if (randomQuote.citation) {
    quoteString += '<span class="citation">' + randomQuote.citation + '</span>'
  }
  if (randomQuote.year) {
    quoteString += '<span class="year">' + randomQuote.year + '</span></p>'
  }
  if (randomQuote.tags) {
    quoteString += '<h3 class="tags"> ' + randomQuote.tags + '</h3>'
  }
  document.getElementById("quote-box").innerHTML = quoteString;
  //changes the background color when printquote function gets called
  randomColor();


}


//changes quote automatically every three seconds
var startTimer = window.setInterval(printQuote, 3000);
//stops the quote from automatically changing after 50 seconds
setTimeout(function() { clearInterval(startTimer); }, 50000);

printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
