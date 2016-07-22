var quotes = [
{
    'author': 'Dweck',
    'quote': 'Growth mindset 1.'
},
{
    'author': 'Dweck',
    'quote': 'Growth mindset 2.'
}
];

$(function() {
    // setQuote('.quote', '.author');
});

var setQuote = function(quoteEl, authorEl) {
    var random = getRandomNumber(quotes.length);
    var quote = quotes[random];
    $(quoteEl).html(quote.quote);
    $(authorEl).html(quote.author);
}

function getRandomNumber(quoteLength) {
    var min = 0;
    var max = quoteLength-1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
