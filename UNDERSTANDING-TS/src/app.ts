const names: Array = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => {
      resolve("this is done");
    }, 2000);
  });
});

promise.then((data) => {
  data.split(" ");
});
