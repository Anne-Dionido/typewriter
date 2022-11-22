const sentence = "Hello there how are you doing today?";
let i = 0;


const typewritter = () => setTimeout(() => {
  process.stdout.write(sentence[i++]);
  if (i < sentence.length) typewritter();
  if (i === sentence.length) process.stdout.write('\n');
}, 50);

typewritter();