var quotes = [
{
    'author': 'Steve Jobs',
    'quote': 'Your time is limited. Don’t waste it living someone else’s life.'
},
{
    'author': 'Bill Gates',
    'quote': 'Your most unhappy customers are your greatest source of learning.'
},
{
    'author': 'Carol S. Dweck',
    'quote': 'Did I win? Did I lose? Those are the wrong questions. The correct question is: Did I make my best effort?'
},
{
    'author': 'David Allen',
    'quote': '“Much of the stress that people feel doesn\'t come from having too much to do. It comes from not finishing what they\'ve started.'
},
{
    'author': 'Warren Buffet',
    'quote': 'It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you\'ll do things differently.'
},
];

$(function() {
   setQuote('.quote', '.author');
   $('#sw-reload').click(function() {
        console.log('reaload');
        document.location.reload(true);
    })
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

