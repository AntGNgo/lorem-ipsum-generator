const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const text = document.getElementById('text');
const length = document.getElementById('length');
const generate = document.getElementById('generate');

generate.addEventListener('click', (e) => {
  e.preventDefault();
  let generatedText = lorem.generateWords(parseInt(length.value));
  console.log(generatedText);
  text.value = generatedText;
});
