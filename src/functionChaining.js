// function chaining for add , substract and print
let obj = function () {
    let i = 0;  // closure
  
    let add = function (j) {
      i += j;   // Add The value
      return this;
    };
  
    let multiplication = function (j) {
      i = j * i; // multiplication the value
      return this;
    };
  
    let subtract = function (j) {
      i -= j; // Subtract's the value
      return this;
    };
  
    let print = function () {
      console.log(i);  // Prints the value
    };
    return { add: add, multiplication: multiplication, subtract: subtract, print: print }; // Returns object of function's
  }
  let x = obj();
  x.add(5).multiplication(3).subtract(2).print();
  