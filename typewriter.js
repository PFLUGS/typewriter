const sentence = "hello there form lighthouse labs";

const typeWriter = (sentence) => {
  let delay = 0;
  for (let i = 0; i < sentence.length; i ++) {
    setTimeout(() => {
      process.stdout.write(sentence[i])
    }, delay += 50)
    }
  }
typeWriter('hello its sarah');
