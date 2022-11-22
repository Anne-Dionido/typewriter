const sentence = ['4311o', 'th3r3', 'w0r1d'];
let i = 0;

const f = () => setTimeout(() => {
  console.log(sentence[i++]);

  if (i < sentence.length) {
    f();
  }
}, 3000);

f();