// adding two numbers using callback
function calculate(a, b, callback) {
  return callback(a, b)
} function add(a, b) {
  return a + b
}
console.log(calculate(4, 4, add))
