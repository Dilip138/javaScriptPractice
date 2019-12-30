// adding two numbers using async and await 
async function fn(a, b) {
    console.log("hello")
    let res = await a + b
    console.log(res)
  }
  setTimeout(function () {
    fn(4, 5);
  }, 300);
  