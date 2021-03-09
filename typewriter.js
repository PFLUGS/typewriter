const sentence = "hello there form lighthouse labs";

const typeWriter = (sentence) => {
  let delay = 0;
  for (const char of sentence)
    setTimeout(() => {
      process.stdout.write(char)
    }, delay += 50)
    }
typeWriter(sentence);