const sentence = "hello there form lighthouse labs";

const typeWriter = (sentence) => {
  let delay = 0;
  for (let i = 0; i < sentence.length; i ++) {
    setTimeout(() => {
      process.stdout.write(sentence[i])
      if (i === sentence.length - 1) {
        process.stdout.write('\n')
      };
    }, delay += 50)
  }
}
typeWriter('hello its sarah');

