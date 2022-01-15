<template>
  <div id="quote-component" class="text-red-700 pt-5 italic text-xs">
    <p class="message">{{ quote.message }}</p>
    <p class="author">- {{ quote.author }}</p>
  </div>
</template>

<script>
var _ = require("lodash");

export default {
  name: "Quote",
  props: {
    parentMessage: String,
  },
  mounted: function () {
    this.quote = this.randomQuote();
  },
  methods: {
    randomQuote: function () {
      return this.quotes[_.random(0, this.quotes.length - 1)];
    },
  },
  data: function () {
    return {
      quote: { author: "", message: "" },
      quotes: [
        {
          author: "Steve Jobs",
          message:
            "Your time is limited. Don’t waste it living someone else’s life.",
        },
        {
          author: "Bill Gates",
          message:
            "Your most unhappy customers are your greatest source of learning.",
        },
        {
          author: "Carol S. Dweck",
          message:
            "Did I win? Did I lose? Those are the wrong questions. The correct question is: Did I make my best effort?",
        },
        {
          author: "David Allen",
          message:
            "Much of the stress that people feel doesn't come from having too much to do. It comes from not finishing what they've started.",
        },
        {
          author: "Warren Buffet",
          message:
            "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
        },
        {
          author: "Damian Lillard",
          message:
            "If you want to look good in front of thousands, you have to outwork thousands in front of nobody.",
        },
        {
          author: "Albert Camus",
          message:
            "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        },
        {
          author: "Martin Fowler",
          message:
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        },
      ],
    };
  },
};
</script>

<style scoped>
#quote-component {
}
</style>
