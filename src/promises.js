// adding two numbers using promises
let add1 = function (x, y) {
    return new Promise((resolve, reject) => {
      let sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
  };
  add1(5, 5).then(res => {
    console.log("res in promise", res);
  })
  